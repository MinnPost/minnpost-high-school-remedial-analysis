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

      // Make color scale, using diverging
      this.colorScale = chroma.scale([
        mpConfig['colors-data'].green1,
        mpConfig['colors-data'].blue1
      ]).mode('hsl').domain(_.map(this.schools.features, function(f, fi) {
        return f.properties.remMean;
      }), 5);

      // TODO: Use a router so people can link to specific schools

      // Create main application view
      this.mainView = new Ractive({
        el: this.$el,
        template: tApplication,
        data: {
          f: mpFormatters
        },
        partials: {
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
          // Update chart

          // Update map
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
          return {
            id: f.properties.id,
            name: f.properties.name,
            y: f.properties.remMean * 100,
            remMean: f.properties.remMean,
            color: thisApp.colorScale(f.properties.remMean).hex()
          };
        })
      }];

      // Column chart
      this.schoolsChart = mpHighcharts.makeChart(this.$('.schools-chart'),
        $.extend(true, {}, mpHighcharts.columnOptions, {
          series: this.chartData,
          legend: { enabled: false },
          yAxis: {
            opposite: true,
            title: {
              text: '% of enrollees'
            }
          },
          xAxis: {
            type: 'category',
            labels: {
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
            series: {
              cursor: 'pointer',
              point: {
                events: {
                  click: function() {
                    thisApp.mainView.set('selectedSchoolID', this.id);

                    /*
                    _.each(this.series.data)
                      this.series.data[i].update({ color: '#ECB631' }, true, false);
                    }
                    this.update({ color: '#f00' }, true, false)
                    */
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
            radius: 8
          });
        },
        // Style accordingly
        style: function(feature) {
          var color = thisApp.colorScale(feature.properties.remMean).hex();

          return _.extend(mpMaps.mapStyle, {
            fillColor: color,
            fillOpacity: 0.8,
            stroke: true,
            color: color,
            weight: 5,
            opacity: 0.2
          });
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
        }
      }).addTo(this.map);

      // Fit in
      this.map.fitBounds(this.schoolMapLayer.getBounds(), {
        reset: true
      });

    },

  });

  // Create instance and return
  return new App({});
});
