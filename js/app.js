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
  'text!../data/schools.geo.json'
], function(
  $, _, Backbone, Lazyload, Ractive, RactiveBackbone, RactiveEventsTap,
  L, Highcharts, HM, chroma, mpConfig, mpFormatters, mpHighcharts, mpMaps,
  Base,
  tApplication,
  dSchoolsGeo
  ) {
  'use strict';

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
      // Add some example data
      this.schools.features = _.sample(this.schools.features, 50);
      this.schools.features = _.map(this.schools.features, function(f, fi) {
        f.properties.remedialScore = Math.random();
        f.properties.id = f.properties.ORGID;
        return f;
      });
      // Sort data
      this.schools.features = _.sortBy(this.schools.features, function(f, fi) {
        return f.properties.remedialScore;
      });

      // Make color scale, using diverging
      this.colorScale = chroma.scale([
        mpConfig['colors-data'].blue1,
        mpConfig['colors-data'].orange
      ]).mode('hsl').domain([0, 1], 7);

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
            name: f.properties.SCHNAME,
            y: f.properties.remedialScore,
            color: thisApp.colorScale(f.properties.remedialScore).hex()
          };
        })
      }];

      // Column chart
      mpHighcharts.makeChart(this.$('.schools-chart'),
        $.extend(true, {}, mpHighcharts.columnOptions, {
          series: this.chartData,
          legend: { enabled: false }
        }
      ));
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
          return _.extend(mpMaps.mapStyle, {
            fillColor: thisApp.colorScale(feature.properties.remedialScore).hex(),
            fillOpacity: 0.8,
            stroke: false
          });
        },
        // Events
        onEachFeature: function(feature, layer) {
          // Show name on hover
          layer.on('mouseover', function(e) {
            thisApp.tooltipControl.update(feature.properties.SCHNAME);
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

    },

  });

  // Create instance and return
  return new App({});
});
