/**
 * Main application file for: minnpost-high-school-remedial-analysis
 *
 * This pulls in all the parts
 * and creates the main object for the application.
 */

// Create main application
require([
  'jquery', 'underscore', 'backbone', 'lazyload',
  'ractive', 'ractive-backbone', 'ractive-events-tap',
  'leaflet', 'highcharts', 'highchartsMore', 'chroma',
  'mpConfig', 'mpFormatters', 'mpHighcharts', 'mpMaps',
  'base',
  'text!templates/application.mustache',
  'text!templates/tooltip-chart.underscore',
  'text!../data/schools.geo.json'
], function(
  $, _, Backbone, Lazyload, Ractive, RactiveBackbone, RactiveEventsTap,
  L, Highcharts, HM, chroma, mpConfig, mpFormatters, mpHighcharts, mpMaps,
  Base,
  tApplication, tTooltipChart,
  dSchoolsGeo
  ) {
  'use strict';

  // Convert underscore templates
  tTooltipChart = _.template(tTooltipChart);

  // Convert data to actual JSON
  dSchoolsGeo = JSON.parse(dSchoolsGeo);

  // Create new class for app
  var App = Base.BaseApp.extend({

    defaults: {
      name: 'minnpost-high-school-remedial-analysis',
      el: '.minnpost-high-school-remedial-analysis-container'
    },

    initialize: function() {
      var thisApp = this;

      // Attach data to app
      this.schools = dSchoolsGeo;
      // Sort data
      this.schools.features = _.sortBy(this.schools.features, function(f, fi) {
        return f.properties.remMean;
      });
      // Remove zero data (though this should not be in here)
      this.schools.features = _.filter(this.schools.features, function(f, fi) {
        return f.properties.remMean;
      });

      // Make color scale, using diverging
      this.colorScale = chroma.scale([
        '#ff6633', '#ff9975', '#ffc8b6', '#efe3c8', '#7abecc', '#0793ab'
      ].reverse()).mode('hsl').domain(_.map(this.schools.features, function(f, fi) {
        return f.properties.remMean;
      }), 6);

      // TODO: Use a router so people can link to specific schools

      // Create main application view
      this.mainView = new Ractive({
        el: this.$el,
        template: tApplication,
        data: {
          f: mpFormatters
        },
        partials: {
        },
        decorators: {
          schoolChart: this.schoolChartDecorator
        }
      });

      // Render inital parts
      this.drawCharts();
      this.drawMaps();

      // Handle events
      this.mainView.observe('selectedSchoolID', function(n, o) {
        var found = _.find(thisApp.schools.features, function(f, fi) {
          return (!!n && f.properties.id === n);
        });

        if (found) {
          // Get data for school
          this.set('selectedSchool', found);
          // Highlight chart and map
          thisApp.highlight(found);
        }
      });
    },

    // Draw charts
    drawCharts: function() {
      var thisApp = this;

      this.chartData = [{
        name: 'Schools',
        color: mpConfig['colors-data'].blue1,
        data: _.map(this.schools.features, function(f, fi) {
          var color = thisApp.colorScale(f.properties.remMean).hex();
          return {
            id: f.properties.id,
            name: f.properties.name,
            y: f.properties.remMean * 100,
            remMean: f.properties.remMean,
            color: color,
            originalColor: color
          };
        })
      }];

      // Column chart
      this.schoolsChart = mpHighcharts.makeChart(this.$('.schools-chart'),
        $.extend(true, {}, mpHighcharts.columnOptions, {
          series: this.chartData,
          legend: { enabled: false },
          yAxis: {
            title: {
              text: '% of enrollees'
            }
          },
          xAxis: {
            type: 'category',
            lineWidth: 0,
            minorTickLength: 0,
            tickLength: 0,
            labels: {
              enabled: false,
              rotation: -45
            }
          },
          tooltip: {
            formatter: function() {
              return tTooltipChart({
                p: this.point,
                f: mpFormatters
              });
            }
          },
          plotOptions: {
            column: {
              pointPadding: 0,
              groupPadding: 0,
              borderWidth: 0
            },
            series: {
              cursor: 'pointer',
              point: {
                events: {
                  click: function() {
                    // Details of school on clicl
                    thisApp.mainView.set('selectedSchoolID', this.id);
                  }
                }
              }
            }
          }
        })
      );
    },

    // Draw map
    drawMaps: function() {
      var thisApp = this;
      this.map = mpMaps.makeLeafletMap('schools-map');
      this.tooltipControl = new mpMaps.TooltipControl();
      this.map.setZoom(9);
      this.map.addControl(this.tooltipControl);

      // Geojson
      this.schoolMapLayer = L.geoJson(this.schools, {
        // Make points circle markers
        pointToLayer: function(feature, latlng) {
          return L.circleMarker(latlng, {
            radius: 5
          });
        },
        // Style accordingly
        style: function(feature) {
          var color = thisApp.colorScale(feature.properties.remMean).hex();
          var style = _.extend(mpMaps.mapStyle, {
            fillColor: color,
            fillOpacity: 0.9,
            stroke: true,
            color: color,
            weight: 3,
            opacity: 0.2
          });
          return style;
        },
        // Events
        onEachFeature: function(feature, layer) {
          // Show name on hover
          layer.on('mouseover', function(e) {
            thisApp.tooltipControl.update(feature.properties.name);
          });
          layer.on('mouseout', function(e) {
            thisApp.tooltipControl.hide();
          });
          // Show details on click
          layer.on('click', function(e) {
            thisApp.mainView.set('selectedSchoolID', feature.properties.id);
          });

          // Make reference to original styles for easy change
          layer.originalOptions = _.clone(layer.options);
        }
      }).addTo(this.map);

      // Fit in
      this.map.fitBounds(this.schoolMapLayer.getBounds(), {
        reset: true
      });

    },

    // Highlight
    highlight: function(current) {
      var thisApp = this;
      var currentP = current.properties;

      // Map
      this.schoolMapLayer.eachLayer(function(layer) {
        if (layer.feature.properties.id === currentP.id) {
          layer.setStyle(_.extend(_.clone(layer.originalOptions), {
            opacity: 0.75,
            color: '#222222',
            weight: 3
          }));
          layer.bringToFront();
          thisApp.map.setView(current.geometry.coordinates.reverse(), 10);
          _.delay(function() {
            thisApp.map.invalidateSize();
          }, 400);
        }
        else {
          layer.setStyle(_.clone(layer.originalOptions));
        }
      });

      // Chart
      _.each(this.schoolsChart.series[0].data, function(d, di) {
        if (d.id === currentP.id) {
          d.update({ color: '#222222' }, true, false);
        }
        else {
          // Only redraw if previously highlighted
          d.update({ color: d.options.originalColor }, (d.color === '#222222'), false);
        }
      });
    },

    // Ractive decorator for making a chart for each school
    schoolChartDecorator: function(node, currentSchool) {
      var p = currentSchool.properties;
      var chart, chartData;

      // Add chart
      if (!_.isObject(chart) && _.isObject(currentSchool)) {
        chartData = [{
          name: 'Remedial score over time',
          color: mpConfig['colors-data'].purple,
          data: [
            [ 2006, (p.rem2006) ? p.rem2006 * 100 : null ],
            [ 2007, (p.rem2007) ? p.rem2007 * 100 : null ],
            [ 2008, (p.rem2008) ? p.rem2008 * 100 : null ],
            [ 2009, (p.rem2009) ? p.rem2009 * 100 : null ],
            [ 2010, (p.rem2010) ? p.rem2010 * 100 : null ],
            [ 2011, (p.rem2011) ? p.rem2011 * 100 : null ],
            [ 2012, (p.rem2012) ? p.rem2012 * 100 : null ]
          ]
        }];
        chart = mpHighcharts.makeChart($(node),
          $.extend(true, {}, mpHighcharts.lineOptions, {
            series: chartData,
            legend: false,
            yAxis: { title: { enabled: false }},
            tooltip: {
              formatter: function() {
                return this.x + ': ' + mpFormatters.number(this.y, 0) + '%';
              }
            },
            plotOptions: {
              line: {
                marker: {
                  enabled: true
                }
              }
            }
          }));
      }

      return {
        teardown: function () {
          if (_.isObject(chart)) {
            chart.destroy();
          }
        }
      };
    }
  });

  // Create instance and return
  return new App({});
});
