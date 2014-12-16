
define('text!../bower.json',[],function () { return '{\n  "name": "minnpost-high-school-remedial-analysis",\n  "version": "0.0.0",\n  "main": "index.html",\n  "homepage": "https://github.com/minnpost/minnpost-high-school-remedial-analysis",\n  "repository": {\n    "type": "git",\n    "url": "https://github.com/minnpost/minnpost-high-school-remedial-analysis"\n  },\n  "bugs": "https://github.com/minnpost/minnpost-high-school-remedial-analysis/issues",\n  "license": "MIT",\n  "author": {\n    "name": "MinnPost",\n    "email": "data@minnpost.com"\n  },\n  "dependencies": {\n    "leaflet": "~0.7.3",\n    "jquery-csv": "*",\n    "highcharts-release": "~4.0.4",\n    "ractive": "~0.5.6",\n    "ractive-events-tap": "~0.1.1",\n    "ractive-backbone": "~0.1.1",\n    "requirejs": "~2.1.15",\n    "almond": "~0.3.0",\n    "text": "~2.0.12",\n    "underscore": "~1.7.0",\n    "jquery": "~1.11.1",\n    "backbone": "~1.1.2",\n    "rgrove-lazyload": "*",\n    "minnpost-styles": "master",\n    "chroma-js": "~0.6.1"\n  },\n  "devDependencies": {\n    "qunit": "~1.15.0"\n  },\n  "dependencyMap": {\n    "requirejs": {\n      "rname": "requirejs",\n      "js": [\n        "requirejs/require"\n      ]\n    },\n    "almond": {\n      "rname": "almond",\n      "js": [\n        "almond/almond"\n      ]\n    },\n    "text": {\n      "rname": "text",\n      "js": [\n        "text/text"\n      ]\n    },\n    "jquery": {\n      "rname": "jquery",\n      "js": [\n        "jquery/dist/jquery"\n      ],\n      "returns": "$"\n    },\n    "underscore": {\n      "rname": "underscore",\n      "js": [\n        "underscore/underscore"\n      ],\n      "returns": "_"\n    },\n    "backbone": {\n      "rname": "backbone",\n      "js": [\n        "backbone/backbone"\n      ],\n      "returns": "Backbone"\n    },\n    "rgrove-lazyload": {\n      "rname": "lazyload",\n      "js": [\n        "rgrove-lazyload/lazyload"\n      ],\n      "returns": "Lazyload"\n    },\n    "ractive": {\n      "rname": "ractive",\n      "js": [\n        "ractive/ractive-legacy"\n      ],\n      "returns": "Ractive"\n    },\n    "ractive-backbone": {\n      "rname": "ractive-backbone",\n      "js": [\n        "ractive-backbone/ractive-adaptors-backbone"\n      ],\n      "returns": "RactiveBackbone"\n    },\n    "ractive-events-tap": {\n      "rname": "ractive-events-tap",\n      "js": [\n        "ractive-events-tap/ractive-events-tap"\n      ],\n      "returns": "RactiveEventsTap"\n    },\n    "leaflet": {\n      "rname": "leaflet",\n      "js": [\n        "leaflet/dist/leaflet-src"\n      ],\n      "css": [\n        "leaflet/dist/leaflet"\n      ],\n      "images": [\n        "leaflet/dist/images"\n      ],\n      "returns": "L"\n    },\n    "highcharts-release": {\n      "rname": "highcharts",\n      "js": [\n        "highcharts-release/highcharts.src"\n      ],\n      "returns": "Highcharts"\n    },\n    "highcharts-release-more": {\n      "rname": "highchartsMore",\n      "js": [\n        "highcharts-release/highcharts-more.src"\n      ],\n      "returns": "HighchartsMore"\n    },\n    "chroma-js": {\n      "rname": "chroma",\n      "js": [\n        "chroma-js/chroma"\n      ],\n      "returns": "chroma"\n    },\n    "minnpost-styles": {\n      "rname": "mpStyles",\n      "css": [\n        "//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css",\n        "minnpost-styles/dist/minnpost-styles"\n      ],\n      "sass": [\n        "minnpost-styles/styles/main"\n      ]\n    },\n    "mpConfig": {\n      "rname": "mpConfig",\n      "js": [\n        "minnpost-styles/dist/minnpost-styles.config"\n      ],\n      "returns": "mpConfig"\n    },\n    "mpFormatters": {\n      "rname": "mpFormatters",\n      "js": [\n        "minnpost-styles/dist/minnpost-styles.formatters"\n      ],\n      "returns": "mpFormatters"\n    },\n    "mpHighcharts": {\n      "rname": "mpHighcharts",\n      "js": [\n        "minnpost-styles/dist/minnpost-styles.highcharts"\n      ],\n      "returns": "mpHighcharts"\n    },\n    "mpMaps": {\n      "rname": "mpMaps",\n      "js": [\n        "minnpost-styles/dist/minnpost-styles.maps"\n      ],\n      "returns": "mpMaps"\n    }\n  },\n  "resolutions": {\n    "underscore": ">=1.5.0"\n  }\n}\n';});

/**
 * Base class(es) for applications.
 */

// Create main application
define('base',['jquery', 'underscore', 'backbone', 'lazyload', 'mpFormatters', 'text!../bower.json'],
  function($, _, Backbone, Lazyload, formatters, bower) {
  

  var Base = {};
  bower = JSON.parse(bower);

  // Base App constructor
  Base.BaseApp = function(options) {
    // Attach options
    this.options = _.extend(this.baseDefaults || {}, this.defaults || {}, options || {});
    this.name = this.options.name;

    // Handle element if in options
    if (this.options.el) {
      this.el = this.options.el;
      this.$el = $(this.el);
      this.$ = function(selector) { return this.$el.find(selector); };
    }

    // Determine paths and get assesets
    this.determinePaths();
    this.renderAssests();

    // Run an initializer once CSS has been loaded
    this.on('cssLoaded', function() {
      this.initialize.apply(this, arguments);
    });
  };

  // Extend with Backbone Events and other properties
  _.extend(Base.BaseApp.prototype, Backbone.Events, {
    // Attach bower info
    bower: bower,

    // Default options
    baseDefaults: {
      jsonpProxy: '//mp-jsonproxy.herokuapp.com/proxy?url=',
      availablePaths: {
        local: {
          css: ['.tmp/css/main.css'],
          images: 'images/',
          data: 'data/'
        },
        build: {
          css: [
            'dist/[[[PROJECT_NAME]]].libs.min.css',
            'dist/[[[PROJECT_NAME]]].latest.min.css'
          ],
          images: 'dist/images/',
          data: 'dist/data/'
        },
        deploy: {
          css: [
            '//s3.amazonaws.com/data.minnpost/projects/' +
              '[[[PROJECT_NAME]]]/[[[PROJECT_NAME]]].libs.min.css',
            '//s3.amazonaws.com/data.minnpost/projects/' +
              '[[[PROJECT_NAME]]]/[[[PROJECT_NAME]]].latest.min.css'
          ],
          images: '//s3.amazonaws.com/data.minnpost/projects/[[[PROJECT_NAME]]]/images/',
          data: '//s3.amazonaws.com/data.minnpost/projects/[[[PROJECT_NAME]]]/data/'
        }
      }
    },

    // Determine paths.  A bit hacky.
    determinePaths: function() {
      var query;

      // Only handle once
      if (_.isObject(this.options.paths) && !_.isUndefined(this.options.deployment)) {
        return this.options.paths;
      }

      // Deploy by default
      this.options.deployment = 'deploy';

      if (window.location.host.indexOf('localhost') !== -1) {
        this.options.deployment = 'local';

        // Check if a query string forces something
        query = this.parseQueryString();
        if (_.isObject(query) && _.isString(query.mpDeployment)) {
          this.options.deployment = query.mpDeployment;
        }
      }

      this.options.paths = this.options.availablePaths[this.options.deployment];
      return this.options.paths;
    },

    // Get assests.  We use the rgrove lazyload library since it is simple
    // and small, but it is unmaintained.
    renderAssests: function() {
      var thisApp = this;
      var scripts = [];

      // Add CSS from bower dependencies
      _.each(this.bower.dependencyMap, function(c, ci) {
        if (c.css) {
          _.each(c.css, function(s, si) {
            // If local, add script, else only add external scripts
            if (thisApp.options.deployment === 'local') {
              s = (s.match(/^(http|\/\/)/)) ? s : 'bower_components/' + s + '.css';
              scripts.push(thisApp.makePath(s));
            }
            else if (s.match(/^(http|\/\/)/)) {
              scripts.push(thisApp.makePath(s));
            }
          });
        }
      });

      // Add app CSS
      _.each(this.options.paths.css, function(c, ci) {
        scripts.push(thisApp.makePath(c));
      });

      // Load and fire event when done
      Lazyload.css(scripts, function() {
        this.trigger('cssLoaded');
      }, null, this);
    },

    // Make path
    makePath: function(path) {
      path = path.split('[[[PROJECT_NAME]]]').join(this.name);
      if (this.options.basePath && !path.match(/^(http|\/\/)/)) {
        path = this.options.basePath + path;
      }
      return path;
    },

    // Override Backbone's ajax call to use JSONP by default as well
    // as force a specific callback to ensure that server side
    // caching is effective.
    overrideBackboneAJAX: function() {
      Backbone.ajax = function() {
        var options = arguments[0];
        if (options.dataTypeForce !== true) {
          return this.jsonpRequest(options);
        }
        return Backbone.$.ajax.apply(Backbone.$, [options]);
      };
    },

    // Unfortunately we need this more often than we should
    isMSIE: function() {
      var match = /(msie) ([\w.]+)/i.exec(navigator.userAgent);
      return match ? parseInt(match[2], 10) : false;
    },

    // Read query string
    parseQueryString: function() {
      var assoc  = {};
      var decode = function(s) {
        return decodeURIComponent(s.replace(/\+/g, " "));
      };
      var queryString = location.search.substring(1);
      var keyValues = queryString.split('&');

      _.each(keyValues, function(v, vi) {
        var key = v.split('=');
        if (key.length > 1) {
          assoc[decode(key[0])] = decode(key[1]);
        }
      });

      return assoc;
    },

    // Wrapper for a JSONP request, the first set of options are for
    // the AJAX request, while the other are from the application.
    //
    // JSONP is hackish, but there are still data sources and
    // services that we don't have control over that don't fully
    // support CORS
    jsonpRequest: function(options) {
      options.dataType = 'jsonp';

      // If no callback, use proxy
      if (this.options.jsonpProxy && options.url.indexOf('callback=') === -1) {
        options.jsonpCallback = 'mpServerSideCachingHelper' +
          formatters.hash(options.url);
        options.url = this.options.jsonpProxy + encodeURIComponent(options.url) +
          '&callback=' + options.jsonpCallback;
        options.cache = true;
      }

      return $.ajax.apply($, [options]);
    },


    // Project data source handling for data files that are not
    // embedded in the application itself.  For development, we can call
    // the data directly from the JSON file, but for production
    // we want to proxy for JSONP.
    //
    // Takes single or array of paths to data, relative to where
    // the data source should be.
    //
    // Returns jQuery's defferred object.
    dataRequest: function(datas) {
      var thisApp = this;
      var useJSONP = false;
      var defers = [];
      datas = (_.isArray(name)) ? datas : [ datas ];

      // If the data path is not relative, then use JSONP
      if (this.options.paths.data.indexOf('http') === 0) {
        useJSONP = true;
      }

      // Go through each file and add to defers
      _.each(datas, function(d) {
        var defer = (useJSONP) ?
          thisApp.jsonpRequest(thisApp.options.paths.data + d) :
          $.getJSON(thisApp.options.paths.data + d);
        defers.push(defer);
      });

      return $.when.apply($, defers);
    },

    // Empty initializer
    initialize: function() { }
  });

  // Add extend from Backbone
  Base.BaseApp.extend = Backbone.Model.extend;


  return Base;
});


define('text!templates/application.mustache',[],function () { return '<div class="application-container">\n  <div class="message-container"></div>\n\n  <div class="content-container">\n\n    <div class="row">\n      <div class="column-small-100 column-medium-66">\n        <div id="schools-map" class="map"></div>\n      </div>\n\n      <div class="column-small-100 column-medium-33">\n        {{^selectedSchool}}\n          <div class="text-center"><em>Click or tap on school in the map or on the chart to see details about that school.</em></div>\n        {{/selectedSchool}}\n\n        {{#selectedSchool}}\n          <div class="component-label">{{ properties.name }}</div>\n\n          <div><em class="small">Percent of enrollees that required development education (7-year mean)</em></div>\n          <div class="xlarge space-bottom">{{ f.percent(properties.remMean, 0) }}</div>\n\n          <div><em class="small">Graduation rate</em></div>\n          <div class="large space-bottom">{{ f.percent(properties.grad_rate, 0) }}</div>\n\n          <div class="small">\n            {{ properties.district_name }} school district.<br>\n            {{ properties.address }}\n          </div>\n        {{/selectedSchool}}\n      </div>\n    </div>\n\n    <div class="row">\n      <div class="column-small-100">\n        <div class="schools-chart chart"></div>\n      </div>\n    </div>\n\n  </div>\n\n  <div class="footnote-container">\n    <div class="footnote">\n      <p>Some code, techniques, and data on <a href="https://github.com/minnpost/minnpost-high-school-remedial-analysis" target="_blank">Github</a>.</p>\n\n        <p>Some map data © OpenStreetMap contributors; licensed under the <a href="http://www.openstreetmap.org/copyright" target="_blank">Open Data Commons Open Database License</a>.  Some map design © MapBox; licensed according to the <a href="http://mapbox.com/tos/" target="_blank">MapBox Terms of Service</a>.  Location geocoding provided by <a href="http://www.mapquest.com/" target="_blank">Mapquest</a> and is not guaranteed to be accurate.</p>\n\n    </div>\n  </div>\n</div>\n';});


define('text!templates/tooltip-chart.underscore',[],function () { return '<%= p.name %>: <strong><%= f.percent(p.remMean, 0) %></strong>\n';});


define('text!../data/schools.geo.json',[],function () { return '{"type":"FeatureCollection","crs":{"type":"name","properties":{"name":"urn:ogc:def:crs:OGC:1.3:CRS84"}},"features":[{"type":"Feature","properties":{"id":"0625-01-220","grad_rate":"0.84","rem2006":0.19,"rem2007":0.27,"rem2008":0.21,"rem2009":0.18,"rem2010":0.26,"rem2011":0.29,"rem2012":0.26,"remMean":0.24,"name":"Highland Park High","address":"1015 S. Snelling Ave., St. Paul, MN 55116","district_name":"St. Paul"},"geometry":{"type":"Point","coordinates":[-93.16804155868478,44.91011836891787]}},{"type":"Feature","properties":{"id":"0001-03-368","grad_rate":"0.53","rem2006":0.32,"rem2007":0.44,"rem2008":0.29,"rem2009":0.31,"rem2010":0.36,"rem2011":0.3,"rem2012":0.24,"remMean":0.32,"name":"Washburn High","address":"201 W. 49th St., Minneapolis, MN 55409","district_name":"Minneapolis"},"geometry":{"type":"Point","coordinates":[-93.28279057628097,44.91329014656214]}},{"type":"Feature","properties":{"id":"0001-03-364","grad_rate":"0.8","rem2006":0.14,"rem2007":0.12,"rem2008":0.14,"rem2009":0.14,"rem2010":0.1,"rem2011":0.12,"rem2012":0.1,"remMean":0.12,"name":"Southwest High","address":"3414 W. 47th St., Minneapolis, MN 55410","district_name":"Minneapolis"},"geometry":{"type":"Point","coordinates":[-93.32472701129313,44.91890839003768]}},{"type":"Feature","properties":{"id":"0625-01-215","grad_rate":"0.77","rem2006":0.37,"rem2007":0.41,"rem2008":0.36,"rem2009":0.38,"rem2010":0.42,"rem2011":0.43,"rem2012":0.37,"remMean":0.39,"name":"Harding High","address":"1540 E. 6th St., St. Paul, MN 55106","district_name":"St. Paul"},"geometry":{"type":"Point","coordinates":[-93.03541747577106,44.95941906180471]}},{"type":"Feature","properties":{"id":"0001-03-358","grad_rate":"0.44","rem2006":0.2,"rem2007":0.32,"rem2008":0.33,"rem2009":0.33,"rem2010":0.37,"rem2011":0.38,"rem2012":0.64,"remMean":0.37,"name":"North High","address":"1500 James Ave. N., Minneapolis, MN 55411","district_name":"Minneapolis"},"geometry":{"type":"Point","coordinates":[-93.3001193572437,44.9940680103081]}},{"type":"Feature","properties":{"id":"0001-03-360","grad_rate":"0.49","rem2006":0.35,"rem2007":0.41,"rem2008":0.42,"rem2009":0.27,"rem2010":0.4,"rem2011":0.42,"rem2012":0.32,"remMean":0.37,"name":"Roosevelt High","address":"4029 28th Ave. S., Minneapolis, MN 55406","district_name":"Minneapolis"},"geometry":{"type":"Point","coordinates":[-93.23048735242095,44.92961587649561]}},{"type":"Feature","properties":{"id":"0001-03-362","grad_rate":"0.75","rem2006":0.15,"rem2007":0.17,"rem2008":0.2,"rem2009":0.16,"rem2010":0.15,"rem2011":0.15,"rem2012":0.16,"remMean":0.16,"name":"South High","address":"3131 19th Ave. S., Minneapolis, MN 55407","district_name":"Minneapolis"},"geometry":{"type":"Point","coordinates":[-93.24413452799908,44.945642607781735]}},{"type":"Feature","properties":{"id":"0625-01-210","grad_rate":"0.89","rem2006":0.21,"rem2007":0.21,"rem2008":0.22,"rem2009":0.21,"rem2010":0.19,"rem2011":0.26,"rem2012":0.2,"remMean":0.21,"name":"Central High","address":"275 N. Lexington Pkwy., St. Paul, MN 55104","district_name":"St. Paul"},"geometry":{"type":"Point","coordinates":[-93.14791370799544,44.949359067941316]}},{"type":"Feature","properties":{"id":"0625-01-212","grad_rate":"0.81","rem2006":0.23,"rem2007":0.26,"rem2008":0.3,"rem2009":0.26,"rem2010":0.28,"rem2011":0.32,"rem2012":0.29,"remMean":0.28,"name":"Como Park High","address":"740 W. Rose Ave., St. Paul, MN 55117","district_name":"St. Paul"},"geometry":{"type":"Point","coordinates":[-93.13127349009197,44.97593525467396]}},{"type":"Feature","properties":{"id":"0625-01-230","grad_rate":"0.77","rem2006":0.33,"rem2007":0.32,"rem2008":0.26,"rem2009":0.33,"rem2010":0.34,"rem2011":0.42,"rem2012":0.38,"remMean":0.34,"name":"Johnson High","address":"1349 Arcade St., St. Paul, MN 55106","district_name":"St. Paul"},"geometry":{"type":"Point","coordinates":[-93.06783019762182,44.98143674257659]}},{"type":"Feature","properties":{"id":"0001-03-352","grad_rate":"0.52","rem2006":0.34,"rem2007":0.36,"rem2008":0.4,"rem2009":0.33,"rem2010":0.38,"rem2011":0.43,"rem2012":0.45,"remMean":0.38,"name":"Edison High","address":"700 22nd Ave. NE, Minneapolis, MN 55418","district_name":"Minneapolis"},"geometry":{"type":"Point","coordinates":[-93.25176357693164,45.00944098070713]}},{"type":"Feature","properties":{"id":"0001-03-354","grad_rate":"0.68","rem2006":0.31,"rem2007":0.37,"rem2008":0.27,"rem2009":0.3,"rem2010":0.33,"rem2011":0.29,"rem2012":0.33,"remMean":0.31,"name":"Patrick Henry High","address":"4320 Newton Ave. N., Minneapolis, MN 55412","district_name":"Minneapolis"},"geometry":{"type":"Point","coordinates":[-93.30533887817293,45.034034008324795]}}]}';});

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

define("app", function(){});

