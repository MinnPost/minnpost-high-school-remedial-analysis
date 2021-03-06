
define('text!../bower.json',[],function () { return '{\n  "name": "minnpost-high-school-remedial-analysis",\n  "version": "0.0.0",\n  "main": "index.html",\n  "homepage": "https://github.com/minnpost/minnpost-high-school-remedial-analysis",\n  "repository": {\n    "type": "git",\n    "url": "https://github.com/minnpost/minnpost-high-school-remedial-analysis"\n  },\n  "bugs": "https://github.com/minnpost/minnpost-high-school-remedial-analysis/issues",\n  "license": "MIT",\n  "author": {\n    "name": "MinnPost",\n    "email": "data@minnpost.com"\n  },\n  "dependencies": {\n    "leaflet": "~0.7.3",\n    "jquery-csv": "*",\n    "highcharts-release": "~4.0.4",\n    "ractive": "~0.5.6",\n    "ractive-events-tap": "~0.1.1",\n    "ractive-backbone": "~0.1.1",\n    "requirejs": "~2.1.15",\n    "almond": "~0.3.0",\n    "text": "~2.0.12",\n    "underscore": "~1.7.0",\n    "jquery": "~1.11.1",\n    "backbone": "~1.1.2",\n    "rgrove-lazyload": "*",\n    "minnpost-styles": "master",\n    "chroma-js": "~0.6.1",\n    "chosen": "https://github.com/harvesthq/chosen/releases/download/v1.3.0/chosen_v1.3.0.zip",\n    "ractive-decorators-chosen": "https://github.com/kalcifer/ractive-decorators-chosen.git#master"\n  },\n  "devDependencies": {\n    "qunit": "~1.15.0"\n  },\n  "dependencyMap": {\n    "requirejs": {\n      "rname": "requirejs",\n      "js": [\n        "requirejs/require"\n      ]\n    },\n    "almond": {\n      "rname": "almond",\n      "js": [\n        "almond/almond"\n      ]\n    },\n    "text": {\n      "rname": "text",\n      "js": [\n        "text/text"\n      ]\n    },\n    "jquery": {\n      "rname": "jquery",\n      "js": [\n        "jquery/dist/jquery"\n      ],\n      "returns": "$"\n    },\n    "underscore": {\n      "rname": "underscore",\n      "js": [\n        "underscore/underscore"\n      ],\n      "returns": "_"\n    },\n    "backbone": {\n      "rname": "backbone",\n      "js": [\n        "backbone/backbone"\n      ],\n      "returns": "Backbone"\n    },\n    "rgrove-lazyload": {\n      "rname": "lazyload",\n      "js": [\n        "rgrove-lazyload/lazyload"\n      ],\n      "returns": "Lazyload"\n    },\n    "ractive": {\n      "rname": "ractive",\n      "js": [\n        "ractive/ractive-legacy"\n      ],\n      "returns": "Ractive"\n    },\n    "ractive-backbone": {\n      "rname": "ractive-backbone",\n      "js": [\n        "ractive-backbone/ractive-adaptors-backbone"\n      ],\n      "returns": "RactiveBackbone"\n    },\n    "ractive-events-tap": {\n      "rname": "ractive-events-tap",\n      "js": [\n        "ractive-events-tap/ractive-events-tap"\n      ],\n      "returns": "RactiveEventsTap"\n    },\n    "leaflet": {\n      "rname": "leaflet",\n      "js": [\n        "leaflet/dist/leaflet-src"\n      ],\n      "css": [\n        "leaflet/dist/leaflet"\n      ],\n      "images": [\n        "leaflet/dist/images"\n      ],\n      "returns": "L"\n    },\n    "highcharts-release": {\n      "rname": "highcharts",\n      "js": [\n        "highcharts-release/highcharts.src"\n      ],\n      "returns": "Highcharts"\n    },\n    "highcharts-release-more": {\n      "rname": "highchartsMore",\n      "js": [\n        "highcharts-release/highcharts-more.src"\n      ],\n      "returns": "HighchartsMore"\n    },\n    "chroma-js": {\n      "rname": "chroma",\n      "js": [\n        "chroma-js/chroma"\n      ],\n      "returns": "chroma"\n    },\n    "chosen": {\n      "rname": "chosen",\n      "js": [\n        "chosen/chosen.jquery"\n      ],\n      "css": [\n        "chosen/chosen"\n      ],\n      "returns": "chosen"\n    },\n    "ractive-decorators-chosen": {\n      "rname": "ractive-decorators-chosen",\n      "js": [\n        "ractive-decorators-chosen/ractive-decorators-chosen"\n      ],\n      "returns": "RactiveDecoratorsChosen"\n    },\n    "minnpost-styles": {\n      "rname": "mpStyles",\n      "css": [\n        "//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css",\n        "minnpost-styles/dist/minnpost-styles"\n      ],\n      "sass": [\n        "minnpost-styles/styles/main"\n      ]\n    },\n    "mpConfig": {\n      "rname": "mpConfig",\n      "js": [\n        "minnpost-styles/dist/minnpost-styles.config"\n      ],\n      "returns": "mpConfig"\n    },\n    "mpFormatters": {\n      "rname": "mpFormatters",\n      "js": [\n        "minnpost-styles/dist/minnpost-styles.formatters"\n      ],\n      "returns": "mpFormatters"\n    },\n    "mpHighcharts": {\n      "rname": "mpHighcharts",\n      "js": [\n        "minnpost-styles/dist/minnpost-styles.highcharts"\n      ],\n      "returns": "mpHighcharts"\n    },\n    "mpMaps": {\n      "rname": "mpMaps",\n      "js": [\n        "minnpost-styles/dist/minnpost-styles.maps"\n      ],\n      "returns": "mpMaps"\n    }\n  },\n  "resolutions": {\n    "underscore": ">=1.5.0"\n  }\n}\n';});

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


define('text!templates/application.mustache',[],function () { return '<div class="application-container">\n  <div class="message-container"></div>\n\n  <div class="content-container">\n\n    {{^isReady}}\n      <div class="loading-container">\n        <i class="loading"></i> Loading...\n      </div>\n    {{/isReady}}\n\n    {{#isReady}}\n      <div class="row">\n        <div class="column-small-100">\n          <div class="search-select-box">\n            <p class="text-center medium-show"><em>Search or select schools to see details about that school.</em></p>\n            <p class="text-center medium-hide"><em>See school details by either searching from the list below, tap on a marker in the map, or tap on a line in the chart.</em></p>\n\n            <select decorator="chosen" value="{{ searchSelectedSchoolID }}">\n              <option value="">None</value>\n\n              {{#schoolNameList}}\n                <option value="{{ id }}">{{ name }}</option>\n              {{/schoolNameList}}\n            </select>\n          </div>\n        </div>\n\n        <div class="column-small-100 column-medium-33">\n          <div class="school-details">\n            {{^selectedSchool}}\n              <div class="text-center medium-show"><em>Click or tap on a marker in the map or on a line in the chart to see details about that school.</em></div>\n            {{/selectedSchool}}\n\n            {{#selectedSchool}}\n              <div class="component-label">{{ properties.name }}</div>\n              <div class="space-bottom small school-district">\n                {{ properties.district_name }} school district\n              </div>\n\n              <div class="xlarge">{{ f.percent(properties.remMean, 0) }}</div>\n              <div class="details-label">Percent of enrollees that required remedial education&dagger; (7-year mean)</div>\n\n              <div class="details-chart-container">\n                <div class="chart details-chart" decorator="schoolChart:{{ this }}"></div>\n                <div class="details-label">Percent of enrollees that required remedial education&dagger; over time</div>\n              </div>\n\n              <div class="large">{{ f.percent(properties.grad_rate, 0) }}</div>\n              <div class="details-label">4-year graduation rate</div>\n\n            {{/selectedSchool}}\n          </div>\n        </div>\n\n        <div class="column-small-100 column-medium-66">\n          <div class="component-label medium-hide">Map of all schools in Minnesota&Dagger;</div>\n          <div class="caption medium-hide">Colored by the 7-year mean of the percent of enrollees that required remedial education&dagger;.  Tap or click the map to see details about that school above.</div>\n\n          <div id="schools-map" class="map"></div>\n        </div>\n      </div>\n\n      <div class="row">\n        <div class="column-small-100">\n          <div class="component-label medium-hide">Chart of all schools in Minnesota&Dagger;</div>\n          <div class="caption medium-hide">Colored by the 7-year mean of the percent of enrollees that required remedial education&dagger;.  Tap or click the chart to see details about that school above.</div>\n\n          <div class="schools-chart chart"></div>\n        </div>\n      </div>\n\n    </div>\n  {{/isReady}}\n\n  <div class="footnote-container">\n    <div class="footnote">\n      <p>&dagger;Percent of enrollees that required remedial education in the first 2 years of college.  This data is limited to Minnesota college insitutions.</p>\n\n      <p>&Dagger;Showing only schools in Minnesota that graduated at least 100 students from 2006-2012.</p>\n\n      <p>Some map data © OpenStreetMap contributors; licensed under the <a href="http://www.openstreetmap.org/copyright" target="_blank">Open Data Commons Open Database License</a>.  Some map design © MapBox; licensed according to the <a href="http://mapbox.com/tos/" target="_blank">MapBox Terms of Service</a>.  Some code, techniques, and data on <a href="https://github.com/minnpost/minnpost-high-school-remedial-analysis" target="_blank">Github</a>.</p>\n\n    </div>\n  </div>\n</div>\n';});


define('text!templates/tooltip-chart.underscore',[],function () { return '<%= p.name %>: <strong><%= f.percent(p.remMean, 0) %></strong>\n';});


define('text!../data/schools.geo.json',[],function () { return '{"type":"FeatureCollection","crs":{"type":"name","properties":{"name":"urn:ogc:def:crs:OGC:1.3:CRS84"}},"features":[{"type":"Feature","properties":{"id":"2895-01-113","grad_rate":"0.96","rem2006":0.2,"rem2007":0.22,"rem2008":0.2,"rem2009":null,"rem2010":0.27,"rem2011":null,"rem2012":null,"remMean":0.22,"name":"JCC High","address":"1128 North Hwy., Jackson, MN 56143","district_name":"Jackson County Central"},"geometry":{"type":"Point","coordinates":[-94.99832043473789,43.62520324794221]}},{"type":"Feature","properties":{"id":"2752-01-060","grad_rate":"0.91","rem2006":0.2,"rem2007":null,"rem2008":0.18,"rem2009":0.24,"rem2010":0.25,"rem2011":0.24,"rem2012":null,"remMean":0.22,"name":"Fairmont High","address":"900 Johnson St., Fairmont, MN 56031","district_name":"Fairmont Area"},"geometry":{"type":"Point","coordinates":[-94.4502176674904,43.63907775009862]}},{"type":"Feature","properties":{"id":"0299-01-032","grad_rate":"0.95","rem2006":null,"rem2007":0.38,"rem2008":0.31,"rem2009":null,"rem2010":0.3,"rem2011":null,"rem2012":null,"remMean":0.33,"name":"Caledonia High","address":"825 N. Warrior Ave., Caledonia, MN 55921","district_name":"Caledonia"},"geometry":{"type":"Point","coordinates":[-91.50865602071438,43.64117978819434]}},{"type":"Feature","properties":{"id":"2860-01-020","grad_rate":"0.84","rem2006":0.3,"rem2007":0.27,"rem2008":0.21,"rem2009":0.3,"rem2010":0.3,"rem2011":null,"rem2012":null,"remMean":0.28,"name":"BEA High","address":"1125 Hwy. 169 N., Blue Earth, MN 56013","district_name":"Blue Earth Area"},"geometry":{"type":"Point","coordinates":[-94.09104548199991,43.651003138315]}},{"type":"Feature","properties":{"id":"0518-01-008","grad_rate":"0.81","rem2006":0.21,"rem2007":0.27,"rem2008":0.33,"rem2009":0.4,"rem2010":0.34,"rem2011":0.37,"rem2012":0.34,"remMean":0.32,"name":"Worthington High","address":"1211 Clary St., Worthington, MN 56187","district_name":"Worthington Area"},"geometry":{"type":"Point","coordinates":[-95.59686496511785,43.6280367706019]}},{"type":"Feature","properties":{"id":"0492-01-200","grad_rate":"0.84","rem2006":0.29,"rem2007":0.29,"rem2008":0.31,"rem2009":0.25,"rem2010":0.32,"rem2011":0.37,"rem2012":0.29,"remMean":0.3,"name":"Austin High","address":"301 3rd St. NW, Austin, MN 55912","district_name":"Austin"},"geometry":{"type":"Point","coordinates":[-92.97911556367247,43.66838157668952]}},{"type":"Feature","properties":{"id":"0241-01-310","grad_rate":"0.82","rem2006":0.22,"rem2007":0.25,"rem2008":0.26,"rem2009":0.24,"rem2010":0.22,"rem2011":0.31,"rem2012":0.26,"remMean":0.25,"name":"Albert Lea High","address":"2000 Tiger Lane, Albert Lea, MN 56007","district_name":"Albert Lea"},"geometry":{"type":"Point","coordinates":[-93.35083225773275,43.674084921014824]}},{"type":"Feature","properties":{"id":"0077-01-160","grad_rate":"0.84","rem2006":0.2,"rem2007":0.29,"rem2008":0.34,"rem2009":0.29,"rem2010":0.33,"rem2011":0.38,"rem2012":0.21,"remMean":0.29,"name":"Mankato East High","address":"2600 Hoffman Road, Mankato, MN 56001","district_name":"Mankato"},"geometry":{"type":"Point","coordinates":[-93.96078173387406,44.157226428754214]}},{"type":"Feature","properties":{"id":"2899-01-040","grad_rate":"0.91","rem2006":null,"rem2007":0.28,"rem2008":0.42,"rem2009":0.44,"rem2010":0.41,"rem2011":0.24,"rem2012":0.31,"remMean":0.35,"name":"PEM 9-12 High","address":"500 W. Broadway St., Plainview, MN 55964","district_name":"Plainview-Elgin-Millville"},"geometry":{"type":"Point","coordinates":[-92.17413065095208,44.16541088542436]}},{"type":"Feature","properties":{"id":"0656-01-080","grad_rate":"0.84","rem2006":0.35,"rem2007":0.4,"rem2008":0.39,"rem2009":0.4,"rem2010":0.35,"rem2011":0.34,"rem2012":0.2,"remMean":0.35,"name":"Faribault High","address":"330 SW 9th Ave., Faribault, MN 55021","district_name":"Faribault"},"geometry":{"type":"Point","coordinates":[-93.28557374499343,44.28651610208993]}},{"type":"Feature","properties":{"id":"2805-01-002","grad_rate":"0.88","rem2006":0.29,"rem2007":0.29,"rem2008":0.32,"rem2009":0.3,"rem2010":0.35,"rem2011":0.34,"rem2012":0.33,"remMean":0.32,"name":"Zumbrota-Mazeppa High","address":"705 Mill St., Zumbrota, MN 55992","district_name":"Zumbrota-Mazeppa"},"geometry":{"type":"Point","coordinates":[-92.67320375514755,44.290754314776834]}},{"type":"Feature","properties":{"id":"0088-01-050","grad_rate":"0.93","rem2006":0.27,"rem2007":0.35,"rem2008":0.25,"rem2009":0.41,"rem2010":0.23,"rem2011":0.24,"rem2012":0.19,"remMean":0.28,"name":"New Ulm High","address":"415 Payne St. S., New Ulm, MN 56073","district_name":"New Ulm"},"geometry":{"type":"Point","coordinates":[-94.46349704094635,44.30433314474215]}},{"type":"Feature","properties":{"id":"0508-01-040","grad_rate":"0.93","rem2006":0.19,"rem2007":0.27,"rem2008":0.2,"rem2009":0.2,"rem2010":0.27,"rem2011":0.25,"rem2012":0.15,"remMean":0.22,"name":"St. Peter High","address":"100 Lincoln Drive, St. Peter, MN 56082","district_name":"St. Peter"},"geometry":{"type":"Point","coordinates":[-93.96651852817484,44.32864074790914]}},{"type":"Feature","properties":{"id":"0345-01-030","grad_rate":"0.97","rem2006":0.18,"rem2007":0.3,"rem2008":0.28,"rem2009":0.35,"rem2010":0.31,"rem2011":0.38,"rem2012":0.16,"remMean":0.28,"name":"NL-S High","address":"101 4th Ave. SW, New London, MN 56273","district_name":"New London-Spicer"},"geometry":{"type":"Point","coordinates":[-94.94558000244305,45.292711451333076]}},{"type":"Feature","properties":{"id":"0659-01-001","grad_rate":"0.96","rem2006":0.21,"rem2007":0.22,"rem2008":0.23,"rem2009":0.21,"rem2010":0.17,"rem2011":0.12,"rem2012":0.09,"remMean":0.18,"name":"Northfield High","address":"1400 S. Division St., Northfield, MN 55057","district_name":"Northfield"},"geometry":{"type":"Point","coordinates":[-93.1641457360118,44.44448643804873]}},{"type":"Feature","properties":{"id":"0813-01-040","grad_rate":"0.95","rem2006":0.31,"rem2007":0.29,"rem2008":0.34,"rem2009":0.3,"rem2010":0.37,"rem2011":0.23,"rem2012":0.38,"remMean":0.32,"name":"Lincoln High","address":"300 S. Garden St., Lake City, MN 55041","district_name":"Lake City"},"geometry":{"type":"Point","coordinates":[-92.26716463589732,44.44491375092223]}},{"type":"Feature","properties":{"id":"2397-01-020","grad_rate":"0.97","rem2006":0.22,"rem2007":0.47,"rem2008":0.2,"rem2009":0.24,"rem2010":0.28,"rem2011":0.22,"rem2012":0.2,"remMean":0.26,"name":"LSH High","address":"901 E. Ferry St., Le Sueur, MN 56058","district_name":"Le Sueur-Henderson"},"geometry":{"type":"Point","coordinates":[-93.90198263181615,44.457679974725764]}},{"type":"Feature","properties":{"id":"0717-01-127","grad_rate":"0.92","rem2006":null,"rem2007":0.22,"rem2008":0.3,"rem2009":0.28,"rem2010":0.22,"rem2011":0.33,"rem2012":null,"remMean":0.27,"name":"Jordon High","address":"600 Sunset Drive, Jordan, MN 55352","district_name":"Jordan"},"geometry":{"type":"Point","coordinates":[-93.63975168803927,44.65822311762416]}},{"type":"Feature","properties":{"id":"0194-01-028","grad_rate":"0.93","rem2006":0.28,"rem2007":0.22,"rem2008":0.2,"rem2009":0.21,"rem2010":0.17,"rem2011":0.18,"rem2012":0.15,"remMean":0.2,"name":"Lakeville High North","address":"19600 Ipava Ave., Lakeville, MN 55044","district_name":"Lakeville"},"geometry":{"type":"Point","coordinates":[-93.25749240576029,44.66517566785141]}},{"type":"Feature","properties":{"id":"0719-01-030","grad_rate":"0.88","rem2006":0.24,"rem2007":0.21,"rem2008":0.24,"rem2009":0.17,"rem2010":0.22,"rem2011":0.16,"rem2012":0.11,"remMean":0.19,"name":"Prior Lake High","address":"7575 150th St. W., Prior Lake, MN 55378","district_name":"Prior Lake-Savage Area"},"geometry":{"type":"Point","coordinates":[-93.3784034243777,44.72860311345395]}},{"type":"Feature","properties":{"id":"0196-01-097","grad_rate":"0.94","rem2006":0.23,"rem2007":0.24,"rem2008":0.27,"rem2009":0.26,"rem2010":0.3,"rem2011":0.25,"rem2012":0.23,"remMean":0.25,"name":"Apple Valley High","address":"14450 Hayes Road, Apple Valley, MN 55124","district_name":"Rosemount-Apple Valley-Eagan"},"geometry":{"type":"Point","coordinates":[-93.2302299298772,44.74213686415759]}},{"type":"Feature","properties":{"id":"0200-01-129","grad_rate":"0.94","rem2006":0.25,"rem2007":0.27,"rem2008":0.31,"rem2009":0.26,"rem2010":0.32,"rem2011":0.23,"rem2012":0.22,"remMean":0.27,"name":"Hastings High","address":"200 General Sieben Drive, Hastings, MN 55033","district_name":"Hastings"},"geometry":{"type":"Point","coordinates":[-92.89076709152135,44.744022616424594]}},{"type":"Feature","properties":{"id":"0196-01-088","grad_rate":"0.94","rem2006":0.25,"rem2007":0.23,"rem2008":0.19,"rem2009":0.21,"rem2010":0.17,"rem2011":0.23,"rem2012":0.16,"remMean":0.21,"name":"Eastview High","address":"6200 140th St. W., Apple Valley, MN 55124","district_name":"Rosemount-Apple Valley-Eagan"},"geometry":{"type":"Point","coordinates":[-93.19179560052834,44.74458449416687]}},{"type":"Feature","properties":{"id":"0196-01-038","grad_rate":"0.94","rem2006":0.28,"rem2007":0.27,"rem2008":0.3,"rem2009":0.25,"rem2010":0.23,"rem2011":0.25,"rem2012":0.18,"remMean":0.25,"name":"Rosemount High","address":"3335 142nd St. W., Rosemount, MN 55068","district_name":"Rosemount-Apple Valley-Eagan"},"geometry":{"type":"Point","coordinates":[-93.13338666349163,44.7444301312429]}},{"type":"Feature","properties":{"id":"2859-01-060","grad_rate":"0.93","rem2006":0.22,"rem2007":0.27,"rem2008":0.31,"rem2009":0.21,"rem2010":0.27,"rem2011":0.25,"rem2012":0.34,"remMean":0.27,"name":"Glencoe-Silver Lake High","address":"1825 16th St. E., Glencoe, MN 55336","district_name":"Glencoe-Silver Lake"},"geometry":{"type":"Point","coordinates":[-94.13765656416835,44.77612335534151]}},{"type":"Feature","properties":{"id":"0191-01-014","grad_rate":"0.87","rem2006":0.24,"rem2007":0.32,"rem2008":0.26,"rem2009":0.25,"rem2010":0.25,"rem2011":0.26,"rem2012":0.19,"remMean":0.25,"name":"Burnsville High","address":"600 E. Hwy. 13, Burnsville, MN 55337","district_name":"Burnsville-Eagan-Savage"},"geometry":{"type":"Point","coordinates":[-93.26562509155433,44.78507750889438]}},{"type":"Feature","properties":{"id":"0720-01-083","grad_rate":"0.87","rem2006":0.31,"rem2007":0.24,"rem2008":0.29,"rem2009":0.28,"rem2010":0.28,"rem2011":0.27,"rem2012":0.22,"remMean":0.27,"name":"Shakopee High","address":"100 17th Ave. W., Shakopee, MN 55379","district_name":"Shakopee"},"geometry":{"type":"Point","coordinates":[-93.52794015893573,44.77070223203915]}},{"type":"Feature","properties":{"id":"0278-01-030","grad_rate":"0.96","rem2006":null,"rem2007":0.2,"rem2008":0.21,"rem2009":0.22,"rem2010":0.19,"rem2011":0.13,"rem2012":null,"remMean":0.19,"name":"Orono High","address":"795 Old Crystal Bay Road, Long Lake, MN 55356","district_name":"Orono"},"geometry":{"type":"Point","coordinates":[-93.59561528190018,44.99529415033034]}},{"type":"Feature","properties":{"id":"0279-01-090","grad_rate":"0.92","rem2006":0.21,"rem2007":0.29,"rem2008":0.22,"rem2009":0.21,"rem2010":0.2,"rem2011":0.21,"rem2012":0.15,"remMean":0.21,"name":"Maple Grove High","address":"9800 Fernbrook Lane, Maple Grove, MN 55369","district_name":"Osseo"},"geometry":{"type":"Point","coordinates":[-93.45980913492751,45.132437272793865]}},{"type":"Feature","properties":{"id":"0465-01-040","grad_rate":"0.89","rem2006":0.26,"rem2007":0.29,"rem2008":0.19,"rem2009":0.25,"rem2010":0.27,"rem2011":0.22,"rem2012":0.23,"remMean":0.24,"name":"Litchfield High","address":"901 Gilman Ave. N., Litchfield, MN 55355","district_name":"Litchfield"},"geometry":{"type":"Point","coordinates":[-94.52014657135841,45.13593295275786]}},{"type":"Feature","properties":{"id":"0011-01-192","grad_rate":"0.88","rem2006":0.3,"rem2007":0.34,"rem2008":0.36,"rem2009":0.36,"rem2010":0.32,"rem2011":0.34,"rem2012":0.25,"remMean":0.32,"name":"Champlin Park High","address":"6025 109th Ave. N., Champlin, MN 55316","district_name":"Anoka-Hennepin"},"geometry":{"type":"Point","coordinates":[-93.35463939308418,45.15002353024888]}},{"type":"Feature","properties":{"id":"0012-01-164","grad_rate":"0.97","rem2006":0.28,"rem2007":0.27,"rem2008":0.26,"rem2009":0.32,"rem2010":0.21,"rem2011":0.17,"rem2012":0.17,"remMean":0.24,"name":"Centennial High","address":"4707 North Road, Circle Pines, MN 55014","district_name":"Centennial"},"geometry":{"type":"Point","coordinates":[-93.14773829645472,45.15380919645216]}},{"type":"Feature","properties":{"id":"0544-01-390","grad_rate":"0.88","rem2006":0.34,"rem2007":0.39,"rem2008":0.36,"rem2009":0.37,"rem2010":0.11,"rem2011":0.24,"rem2012":0.16,"remMean":0.28,"name":"Kennedy Secondary","address":"601 Randolph Ave., Fergus Falls, MN 56537","district_name":"Fergus Falls"},"geometry":{"type":"Point","coordinates":[-96.06568353764831,46.29023949164583]}},{"type":"Feature","properties":{"id":"2170-01-040","grad_rate":"0.79","rem2006":0.25,"rem2007":null,"rem2008":null,"rem2009":null,"rem2010":null,"rem2011":0.19,"rem2012":null,"remMean":0.22,"name":"Staples-Motley High","address":"401 Centennial Lane, Staples, MN 56479","district_name":"Staples-Motley"},"geometry":{"type":"Point","coordinates":[-94.79645338093883,46.35867813140719]}},{"type":"Feature","properties":{"id":"2155-01-001","grad_rate":"0.76","rem2006":0.21,"rem2007":null,"rem2008":0.26,"rem2009":0.22,"rem2010":0.33,"rem2011":0.25,"rem2012":0.25,"remMean":0.25,"name":"WDC High","address":"600 Colfax Ave. S., Wadena, MN 56482","district_name":"Wadena-Deer Creek"},"geometry":{"type":"Point","coordinates":[-95.14723907446843,46.44270972569769]}},{"type":"Feature","properties":{"id":"0182-01-001","grad_rate":"0.87","rem2006":0.3,"rem2007":0.26,"rem2008":0.19,"rem2009":0.18,"rem2010":0.3,"rem2011":0.2,"rem2012":null,"remMean":0.24,"name":"Crosby-Ironton High","address":"711 Poplar St., Crosby, MN 56441","district_name":"Crosby-Ironton"},"geometry":{"type":"Point","coordinates":[-93.96635749363928,46.479024632115554]}},{"type":"Feature","properties":{"id":"0001-01-001","grad_rate":"0.83","rem2006":0.23,"rem2007":0.29,"rem2008":0.26,"rem2009":0.31,"rem2010":null,"rem2011":null,"rem2012":0.22,"remMean":0.26,"name":"Aitkin High","address":"306 2nd St. NW, Aitkin, MN 56431","district_name":"Aitkin"},"geometry":{"type":"Point","coordinates":[-93.71153551247693,46.533922692825215]}},{"type":"Feature","properties":{"id":"0548-01-020","grad_rate":"0.96","rem2006":0.23,"rem2007":0.37,"rem2008":0.42,"rem2009":0.45,"rem2010":0.3,"rem2011":null,"rem2012":0.29,"remMean":0.34,"name":"Pelican Rapids High","address":"310 S. Broadway, Pelican Rapids, MN 56572","district_name":"Pelican Rapids"},"geometry":{"type":"Point","coordinates":[-96.08401648649051,46.565744730847584]}},{"type":"Feature","properties":{"id":"0186-01-020","grad_rate":"0.94","rem2006":0.21,"rem2007":0.28,"rem2008":0.21,"rem2009":0.26,"rem2010":null,"rem2011":null,"rem2012":null,"remMean":0.24,"name":"Pequot Lakes High","address":"30805 Olson St., Pequot Lakes, MN 56472","district_name":"Pequot Lakes"},"geometry":{"type":"Point","coordinates":[-94.31695986326278,46.600594341918885]}},{"type":"Feature","properties":{"id":"0549-01-030","grad_rate":"0.89","rem2006":0.27,"rem2007":0.2,"rem2008":0.19,"rem2009":0.28,"rem2010":0.14,"rem2011":0.22,"rem2012":0.17,"remMean":0.21,"name":"Perham High","address":"200 5th St. SE, Perham, MN 56573","district_name":"Perham-Dent"},"geometry":{"type":"Point","coordinates":[-95.57651766796866,46.589785532367486]}},{"type":"Feature","properties":{"id":"0534-01-030","grad_rate":"0.86","rem2006":0.36,"rem2007":0.4,"rem2008":0.39,"rem2009":0.29,"rem2010":0.25,"rem2011":0.36,"rem2012":0.28,"remMean":0.33,"name":"Stewartville High","address":"500 4th. St. SW, Stewartville, MN 55976","district_name":"Stewartville"},"geometry":{"type":"Point","coordinates":[-92.49338171255145,43.8518492963881]}},{"type":"Feature","properties":{"id":"2135-01-020","grad_rate":"0.88","rem2006":0.33,"rem2007":0.27,"rem2008":0.26,"rem2009":0.18,"rem2010":0.26,"rem2011":0.38,"rem2012":0.37,"remMean":0.29,"name":"MR High","address":"101 6th Ave. NE, Mapleton, MN 56065","district_name":"Maple River"},"geometry":{"type":"Point","coordinates":[-93.9500637774236,43.92830899473243]}},{"type":"Feature","properties":{"id":"0761-01-150","grad_rate":"0.9","rem2006":0.29,"rem2007":0.34,"rem2008":0.35,"rem2009":0.32,"rem2010":0.33,"rem2011":0.24,"rem2012":0.25,"remMean":0.3,"name":"Owatonna High","address":"333 E. School St., Owatonna, MN 55060","district_name":"Owatonna"},"geometry":{"type":"Point","coordinates":[-93.21978608443317,44.07954256324223]}},{"type":"Feature","properties":{"id":"0829-01-050","grad_rate":"0.92","rem2006":0.25,"rem2007":0.31,"rem2008":0.3,"rem2009":0.13,"rem2010":0.2,"rem2011":0.2,"rem2012":0.2,"remMean":0.23,"name":"Waseca High","address":"1717 2nd St. NW, Waseca, MN 56093","district_name":"Waseca"},"geometry":{"type":"Point","coordinates":[-93.50969831922997,44.09448265105984]}},{"type":"Feature","properties":{"id":"0196-01-041","grad_rate":"0.94","rem2006":0.24,"rem2007":0.27,"rem2008":0.22,"rem2009":0.22,"rem2010":0.18,"rem2011":0.16,"rem2012":0.14,"remMean":0.2,"name":"Eagan High","address":"4183 Braddock Trail, Eagan, MN 55123","district_name":"Rosemount-Apple Valley-Eagan"},"geometry":{"type":"Point","coordinates":[-93.13520863240426,44.80701530488656]}},{"type":"Feature","properties":{"id":"0077-01-130","grad_rate":"0.89","rem2006":0.28,"rem2007":0.3,"rem2008":0.31,"rem2009":0.28,"rem2010":0.19,"rem2011":0.27,"rem2012":0.2,"remMean":0.26,"name":"Mankato West High","address":"1351 S. Riverfront, Mankato, MN 56001","district_name":"Mankato"},"geometry":{"type":"Point","coordinates":[-94.01756154811753,44.158984438055555]}},{"type":"Feature","properties":{"id":"0272-01-064","grad_rate":"0.85","rem2006":0.17,"rem2007":0.17,"rem2008":0.2,"rem2009":0.16,"rem2010":0.12,"rem2011":0.12,"rem2012":0.08,"remMean":0.15,"name":"Eden Prairie High","address":"17185 Valley View Road, Eden Prairie, MN 55346","district_name":"Eden Prairie"},"geometry":{"type":"Point","coordinates":[-93.49317909698648,44.87187243066452]}},{"type":"Feature","properties":{"id":"0280-01-035","grad_rate":"0.72","rem2006":0.41,"rem2007":0.37,"rem2008":0.38,"rem2009":0.33,"rem2010":0.43,"rem2011":0.3,"rem2012":0.38,"remMean":0.37,"name":"Richfield High","address":"7001 Harriet Ave. S., Richfield, MN 55423","district_name":"Richfield"},"geometry":{"type":"Point","coordinates":[-93.2850683520479,44.875242708877984]}},{"type":"Feature","properties":{"id":"0273-01-021","grad_rate":"0.95","rem2006":0.15,"rem2007":0.14,"rem2008":0.15,"rem2009":0.15,"rem2010":0.17,"rem2011":0.1,"rem2012":0.11,"remMean":0.14,"name":"Edina High","address":"6754 Valley View Road, Edina, MN 55435","district_name":"Edina"},"geometry":{"type":"Point","coordinates":[-93.37518038147148,44.88070651542573]}},{"type":"Feature","properties":{"id":"0197-01-053","grad_rate":"0.88","rem2006":0.26,"rem2007":0.23,"rem2008":0.31,"rem2009":0.29,"rem2010":0.25,"rem2011":0.24,"rem2012":0.28,"remMean":0.27,"name":"Henry Sibley High","address":"1897 Delaware Ave., West St. Paul, MN 55118","district_name":"West St. Paul-Mendota Hts.-Eagan"},"geometry":{"type":"Point","coordinates":[-93.108854934332,44.887334722354616]}},{"type":"Feature","properties":{"id":"0006-03-120","grad_rate":"0.88","rem2006":0.32,"rem2007":0.3,"rem2008":0.3,"rem2009":0.32,"rem2010":0.29,"rem2011":0.27,"rem2012":0.15,"remMean":0.28,"name":"South St. Paul High","address":"700 N. 2nd St., South St. Paul, MN 55075","district_name":"South St. Paul"},"geometry":{"type":"Point","coordinates":[-93.04177673609311,44.89277481174845]}},{"type":"Feature","properties":{"id":"0094-01-202","grad_rate":"0.86","rem2006":0.26,"rem2007":0.25,"rem2008":0.26,"rem2009":0.29,"rem2010":0.33,"rem2011":0.19,"rem2012":0.2,"remMean":0.25,"name":"Cloquet High","address":"1000 18th St., Cloquet, MN 55720","district_name":"Cloquet"},"geometry":{"type":"Point","coordinates":[-92.44201237833444,46.70985751225009]}},{"type":"Feature","properties":{"id":"0704-01-001","grad_rate":"0.89","rem2006":0.28,"rem2007":0.28,"rem2008":0.38,"rem2009":0.28,"rem2010":0.26,"rem2011":0.32,"rem2012":0.25,"remMean":0.29,"name":"Proctor High","address":"131 9th Ave., Proctor, MN 55810","district_name":"Proctor"},"geometry":{"type":"Point","coordinates":[-92.23648882581084,46.743504398917366]}},{"type":"Feature","properties":{"id":"0833-01-029","grad_rate":"0.95","rem2006":0.29,"rem2007":0.18,"rem2008":0.26,"rem2009":0.24,"rem2010":0.27,"rem2011":0.29,"rem2012":0.19,"remMean":0.25,"name":"Woodbury High","address":"2665 Woodlane Drive, Woodbury, MN 55125","district_name":"South Washington County"},"geometry":{"type":"Point","coordinates":[-92.96078331174522,44.90869588928571]}},{"type":"Feature","properties":{"id":"0625-01-220","grad_rate":"0.84","rem2006":0.25,"rem2007":0.36,"rem2008":0.29,"rem2009":0.26,"rem2010":0.36,"rem2011":0.42,"rem2012":0.34,"remMean":0.33,"name":"Highland Park High","address":"1015 S. Snelling Ave., St. Paul, MN 55116","district_name":"St. Paul"},"geometry":{"type":"Point","coordinates":[-93.16804155868478,44.91011836891787]}},{"type":"Feature","properties":{"id":"0276-01-074","grad_rate":"0.96","rem2006":0.16,"rem2007":0.14,"rem2008":0.2,"rem2009":0.12,"rem2010":0.17,"rem2011":0.18,"rem2012":0.1,"remMean":0.15,"name":"Minnetonka High","address":"18301 Hwy. 7, Minnetonka, MN 55345","district_name":"Minnetonka"},"geometry":{"type":"Point","coordinates":[-93.51138245555717,44.909151039126485]}},{"type":"Feature","properties":{"id":"0001-03-368","grad_rate":"0.53","rem2006":0.38,"rem2007":0.5,"rem2008":0.35,"rem2009":0.38,"rem2010":0.42,"rem2011":0.44,"rem2012":0.36,"remMean":0.4,"name":"Washburn High","address":"201 W. 49th St., Minneapolis, MN 55409","district_name":"Minneapolis"},"geometry":{"type":"Point","coordinates":[-93.28279057628097,44.91329014656214]}},{"type":"Feature","properties":{"id":"0001-03-364","grad_rate":"0.8","rem2006":0.24,"rem2007":0.23,"rem2008":0.26,"rem2009":0.29,"rem2010":0.19,"rem2011":0.21,"rem2012":0.19,"remMean":0.23,"name":"Southwest High","address":"3414 W. 47th St., Minneapolis, MN 55410","district_name":"Minneapolis"},"geometry":{"type":"Point","coordinates":[-93.32472701129313,44.91890839003768]}},{"type":"Feature","properties":{"id":"0270-01-282","grad_rate":"0.82","rem2006":0.21,"rem2007":0.24,"rem2008":0.27,"rem2009":0.24,"rem2010":0.27,"rem2011":0.2,"rem2012":0.24,"remMean":0.24,"name":"Hopkins High","address":"2400 Lindbergh Drive, Minnetonka, MN 55305","district_name":"Hopkins"},"geometry":{"type":"Point","coordinates":[-93.41196154411433,44.95765533202172]}},{"type":"Feature","properties":{"id":"0625-01-215","grad_rate":"0.77","rem2006":0.44,"rem2007":0.51,"rem2008":0.44,"rem2009":0.43,"rem2010":0.51,"rem2011":0.51,"rem2012":0.45,"remMean":0.47,"name":"Harding High","address":"1540 E. 6th St., St. Paul, MN 55106","district_name":"St. Paul"},"geometry":{"type":"Point","coordinates":[-93.03541747577106,44.95941906180471]}},{"type":"Feature","properties":{"id":"0622-01-058","grad_rate":"0.87","rem2006":0.39,"rem2007":0.29,"rem2008":0.35,"rem2009":0.34,"rem2010":0.34,"rem2011":0.32,"rem2012":0.24,"remMean":0.32,"name":"Tartan High","address":"828 Greenway Ave. N., Oakdale, MN 55128","district_name":"North St. Paul-Maplewood-Oakdale"},"geometry":{"type":"Point","coordinates":[-92.9719193873163,44.96005123809195]}},{"type":"Feature","properties":{"id":"0129-01-040","grad_rate":"0.98","rem2006":0.15,"rem2007":0.19,"rem2008":0.4,"rem2009":0.32,"rem2010":0.17,"rem2011":0.38,"rem2012":null,"remMean":0.27,"name":"Montevideo High","address":"1501 William Ave., Montevideo, MN 56265","district_name":"Montevideo"},"geometry":{"type":"Point","coordinates":[-95.70765244651297,44.939099059233804]}},{"type":"Feature","properties":{"id":"0111-01-842","grad_rate":"0.95","rem2006":0.26,"rem2007":0.28,"rem2008":0.3,"rem2009":0.34,"rem2010":0.24,"rem2011":0.22,"rem2012":0.25,"remMean":0.27,"name":"Watertown High","address":"1001 Hwy. 25 NW, Watertown, MN 55388","district_name":"Watertown-Mayer"},"geometry":{"type":"Point","coordinates":[-93.85675538045626,44.97235137773958]}},{"type":"Feature","properties":{"id":"0709-01-215","grad_rate":"0.84","rem2006":0.32,"rem2007":0.33,"rem2008":0.41,"rem2009":0.33,"rem2010":0.43,"rem2011":null,"rem2012":0.33,"remMean":0.36,"name":"Denfeld High","address":"4405 W. 4TH ST., Duluth, MN 55807","district_name":"Duluth"},"geometry":{"type":"Point","coordinates":[-92.1596731929281,46.748483944501814]}},{"type":"Feature","properties":{"id":"0700-01-020","grad_rate":"0.93","rem2006":0.31,"rem2007":0.29,"rem2008":0.31,"rem2009":0.29,"rem2010":0.38,"rem2011":0.28,"rem2012":0.26,"remMean":0.3,"name":"Hermantown High","address":"4335 Hawk Circle Drive, Hermantown, MN 55811","district_name":"Hermantown"},"geometry":{"type":"Point","coordinates":[-92.24308841017644,46.8254373714364]}},{"type":"Feature","properties":{"id":"0022-01-003","grad_rate":"0.92","rem2006":0.21,"rem2007":0.21,"rem2008":0.25,"rem2009":0.15,"rem2010":0.11,"rem2011":0.23,"rem2012":0.16,"remMean":0.19,"name":"Detroit Lakes High","address":"1301 Roosevelt Ave., Detroit Lakes, MN 56501","district_name":"Detroit Lakes"},"geometry":{"type":"Point","coordinates":[-95.83751614587884,46.80798583049297]}},{"type":"Feature","properties":{"id":"0152-01-382","grad_rate":"0.81","rem2006":0.17,"rem2007":0.19,"rem2008":0.31,"rem2009":0.17,"rem2010":0.19,"rem2011":0.23,"rem2012":0.15,"remMean":0.2,"name":"Moorhead High","address":"2300 4th Ave. S., Moorhead, MN 56560","district_name":"Moorhead"},"geometry":{"type":"Point","coordinates":[-96.74421875625539,46.87205561852505]}},{"type":"Feature","properties":{"id":"0309-01-060","grad_rate":"0.79","rem2006":0.2,"rem2007":0.25,"rem2008":0.24,"rem2009":null,"rem2010":0.21,"rem2011":0.26,"rem2012":null,"remMean":0.23,"name":"Park Rapids High","address":"401 Huntsinger Ave., Park Rapids, MN 56470","district_name":"Park Rapids"},"geometry":{"type":"Point","coordinates":[-95.06473748056096,46.92672338266888]}},{"type":"Feature","properties":{"id":"0625-01-225","grad_rate":"0.68","rem2006":0.42,"rem2007":0.45,"rem2008":0.53,"rem2009":0.37,"rem2010":0.47,"rem2011":0.45,"rem2012":0.55,"remMean":0.46,"name":"Humboldt High","address":"30 E. Baker St., St. Paul, MN 55107","district_name":"St. Paul"},"geometry":{"type":"Point","coordinates":[-93.08313359473715,44.92577459373696]}},{"type":"Feature","properties":{"id":"0001-03-358","grad_rate":"0.44","rem2006":0.3,"rem2007":0.38,"rem2008":0.46,"rem2009":0.43,"rem2010":0.43,"rem2011":0.57,"rem2012":0.74,"remMean":0.47,"name":"North High","address":"1500 James Ave. N., Minneapolis, MN 55411","district_name":"Minneapolis"},"geometry":{"type":"Point","coordinates":[-93.3001193572437,44.9940680103081]}},{"type":"Feature","properties":{"id":"0381-01-200","grad_rate":"0.89","rem2006":0.29,"rem2007":0.27,"rem2008":0.28,"rem2009":0.31,"rem2010":0.28,"rem2011":null,"rem2012":null,"remMean":0.29,"name":"Two Harbors High","address":"1640 Hwy 2, Two Harbors, MN 55616","district_name":"Lake Superior"},"geometry":{"type":"Point","coordinates":[-91.66542317185969,47.04950322263692]}},{"type":"Feature","properties":{"id":"0318-01-360","grad_rate":"0.94","rem2006":0.28,"rem2007":0.36,"rem2008":0.33,"rem2009":0.36,"rem2010":0.39,"rem2011":0.5,"rem2012":0.36,"remMean":0.37,"name":"Grand Rapids High","address":"800 Conifer Drive NW, Grand Rapids, MN 55744","district_name":"Grand Rapids"},"geometry":{"type":"Point","coordinates":[-93.54181313024074,47.246858060176955]}},{"type":"Feature","properties":{"id":"0413-01-001","grad_rate":"0.88","rem2006":0.32,"rem2007":0.4,"rem2008":0.28,"rem2009":0.32,"rem2010":0.26,"rem2011":0.24,"rem2012":0.25,"remMean":0.3,"name":"Marshall High","address":"400 Tiger Drive, Marshall, MN 56258","district_name":"Marshall"},"geometry":{"type":"Point","coordinates":[-95.75180638875521,44.455927359129724]}},{"type":"Feature","properties":{"id":"0252-01-002","grad_rate":"0.97","rem2006":0.29,"rem2007":0.28,"rem2008":0.26,"rem2009":0.17,"rem2010":null,"rem2011":null,"rem2012":0.24,"remMean":0.25,"name":"Cannon Falls High","address":"820 E. Minnesota St., Cannon Falls, MN 55009","district_name":"Cannon Falls"},"geometry":{"type":"Point","coordinates":[-92.8897289068208,44.511828740257144]}},{"type":"Feature","properties":{"id":"0256-01-108","grad_rate":"0.9","rem2006":0.16,"rem2007":0.17,"rem2008":0.23,"rem2009":0.22,"rem2010":0.31,"rem2011":0.31,"rem2012":0.34,"remMean":0.25,"name":"Red Wing High","address":"2451 Eagle Ridge Drive, Red Wing, MN 55066","district_name":"Red Wing"},"geometry":{"type":"Point","coordinates":[-92.51465741749004,44.5355676278623]}},{"type":"Feature","properties":{"id":"0701-01-350","grad_rate":"0.82","rem2006":0.23,"rem2007":0.31,"rem2008":0.31,"rem2009":0.33,"rem2010":0.3,"rem2011":0.32,"rem2012":0.33,"remMean":0.3,"name":"Hibbing High","address":"800 21st St. E., Hibbing, MN 55746","district_name":"Hibbing"},"geometry":{"type":"Point","coordinates":[-92.93249054269599,47.42569001076033]}},{"type":"Feature","properties":{"id":"0031-01-020","grad_rate":"0.87","rem2006":0.19,"rem2007":0.18,"rem2008":0.18,"rem2009":0.14,"rem2010":0.17,"rem2011":0.14,"rem2012":0.09,"remMean":0.16,"name":"Bemidji High","address":"2900 Division St. W., Bemidji, MN 56601","district_name":"Bemidji"},"geometry":{"type":"Point","coordinates":[-94.92397227670494,47.46622767511916]}},{"type":"Feature","properties":{"id":"0706-01-090","grad_rate":"0.9","rem2006":0.21,"rem2007":0.16,"rem2008":0.2,"rem2009":0.2,"rem2010":0.31,"rem2011":0.19,"rem2012":0.34,"remMean":0.23,"name":"Virginia High","address":"411 5th Ave. S., Virginia, MN 55792","district_name":"Virginia"},"geometry":{"type":"Point","coordinates":[-92.53976988822954,47.51999468925863]}},{"type":"Feature","properties":{"id":"0535-01-315","grad_rate":"0.88","rem2006":0.23,"rem2007":0.29,"rem2008":0.24,"rem2009":0.35,"rem2010":0.28,"rem2011":0.3,"rem2012":0.37,"remMean":0.29,"name":"Mayo High","address":"1420 SE 11th Ave., Rochester, MN 55904","district_name":"Rochester"},"geometry":{"type":"Point","coordinates":[-92.44658495503543,44.002964897487]}},{"type":"Feature","properties":{"id":"0535-01-310","grad_rate":"0.9","rem2006":0.35,"rem2007":0.31,"rem2008":0.39,"rem2009":0.38,"rem2010":0.49,"rem2011":0.43,"rem2012":0.32,"remMean":0.38,"name":"John Marshall High","address":"1510 NW 14th St., Rochester, MN 55901","district_name":"Rochester"},"geometry":{"type":"Point","coordinates":[-92.48471057569886,44.034061112031914]}},{"type":"Feature","properties":{"id":"0204-01-030","grad_rate":"0.96","rem2006":0.33,"rem2007":0.26,"rem2008":0.32,"rem2009":0.28,"rem2010":0.29,"rem2011":0.29,"rem2012":0.28,"remMean":0.29,"name":"K-M High","address":"101 16th St. NE, Kasson, MN 55944","district_name":"Kasson-Mantorville"},"geometry":{"type":"Point","coordinates":[-92.74649962707356,44.04479266815672]}},{"type":"Feature","properties":{"id":"2689-01-008","grad_rate":"0.87","rem2006":null,"rem2007":0.22,"rem2008":null,"rem2009":null,"rem2010":null,"rem2011":null,"rem2012":null,"remMean":0.22,"name":"Pipestone Area High","address":"1401 7th St. SW, Pipestone, MN 56164","district_name":"Pipestone Area"},"geometry":{"type":"Point","coordinates":[-96.33986631478744,43.99814098949852]}},{"type":"Feature","properties":{"id":"0535-01-305","grad_rate":"0.9","rem2006":0.28,"rem2007":0.29,"rem2008":0.22,"rem2009":0.33,"rem2010":0.25,"rem2011":0.24,"rem2012":0.22,"remMean":0.26,"name":"Century High","address":"2525 Viola Road NE, Rochester, MN 55906","district_name":"Rochester"},"geometry":{"type":"Point","coordinates":[-92.42620070043372,44.050072276000265]}},{"type":"Feature","properties":{"id":"0861-01-007","grad_rate":"0.92","rem2006":0.11,"rem2007":0.25,"rem2008":0.35,"rem2009":0.26,"rem2010":0.37,"rem2011":0.39,"rem2012":0.38,"remMean":0.3,"name":"Winona High","address":"901 Gilmore Ave., Winona, MN 55987","district_name":"Winona Area"},"geometry":{"type":"Point","coordinates":[-91.6612715923566,44.046399100506505]}},{"type":"Feature","properties":{"id":"0531-01-020","grad_rate":"0.92","rem2006":0.34,"rem2007":0.32,"rem2008":0.25,"rem2009":0.33,"rem2010":0.29,"rem2011":0.2,"rem2012":0.34,"remMean":0.3,"name":"Byron High","address":"1887 2nd Ave. NW, Byron, MN 55920","district_name":"Byron"},"geometry":{"type":"Point","coordinates":[-92.65072309094819,44.05230332857601]}},{"type":"Feature","properties":{"id":"2897-01-001","grad_rate":"0.85","rem2006":0.26,"rem2007":0.28,"rem2008":0.2,"rem2009":0.25,"rem2010":0.27,"rem2011":0.35,"rem2012":0.34,"remMean":0.28,"name":"Redwood Valley High","address":"100 George Ramseth Drive, Redwood Falls, MN 56283","district_name":"Redwood Area"},"geometry":{"type":"Point","coordinates":[-95.09127520159264,44.53750231398387]}},{"type":"Feature","properties":{"id":"0721-01-029","grad_rate":"0.92","rem2006":0.21,"rem2007":0.26,"rem2008":0.18,"rem2009":0.16,"rem2010":0.17,"rem2011":0.18,"rem2012":0.18,"remMean":0.19,"name":"New Prague High","address":"221 12th St. NE, New Prague, MN 56071","district_name":"New Prague Area"},"geometry":{"type":"Point","coordinates":[-93.57633067504072,44.55975343119629]}},{"type":"Feature","properties":{"id":"0716-01-020","grad_rate":"0.93","rem2006":0.32,"rem2007":0.29,"rem2008":null,"rem2009":0.21,"rem2010":0.35,"rem2011":0.41,"rem2012":0.23,"remMean":0.3,"name":"Belle Plaine High","address":"220 S. Market St., Belle Plaine, MN 56011","district_name":"Belle Plaine"},"geometry":{"type":"Point","coordinates":[-93.77203304619823,44.62044966853112]}},{"type":"Feature","properties":{"id":"0194-01-040","grad_rate":"0.94","rem2006":null,"rem2007":0.28,"rem2008":0.2,"rem2009":0.21,"rem2010":0.21,"rem2011":0.17,"rem2012":0.16,"remMean":0.2,"name":"Lakeville High South","address":"21135 Jacquard Ave., Lakeville, MN 55044","district_name":"Lakeville"},"geometry":{"type":"Point","coordinates":[-93.2711648273929,44.64321568027035]}},{"type":"Feature","properties":{"id":"0271-01-009","grad_rate":"0.92","rem2006":0.17,"rem2007":0.24,"rem2008":0.28,"rem2009":0.23,"rem2010":0.2,"rem2011":0.26,"rem2012":0.15,"remMean":0.22,"name":"Thomas Jefferson High","address":"4001 W. 102nd St., Bloomington, MN 55437","district_name":"Bloomington"},"geometry":{"type":"Point","coordinates":[-93.33219199511758,44.817522897937216]}},{"type":"Feature","properties":{"id":"0112-01-060","grad_rate":"0.9","rem2006":0.21,"rem2007":0.27,"rem2008":0.23,"rem2009":0.19,"rem2010":0.18,"rem2011":0.28,"rem2012":0.19,"remMean":0.22,"name":"Chaska High","address":"545 Pioneer Trail, Chaska, MN 55318","district_name":"Eastern Carver County"},"geometry":{"type":"Point","coordinates":[-93.58946565612425,44.82425816089942]}},{"type":"Feature","properties":{"id":"0271-01-007","grad_rate":"0.83","rem2006":0.3,"rem2007":0.37,"rem2008":0.32,"rem2009":0.36,"rem2010":0.45,"rem2011":0.4,"rem2012":0.37,"remMean":0.37,"name":"John F. Kennedy High","address":"9701 Nicollet Ave. S., Bloomington, MN 55420","district_name":"Bloomington"},"geometry":{"type":"Point","coordinates":[-93.27699610920357,44.82795506204132]}},{"type":"Feature","properties":{"id":"0199-01-026","grad_rate":"0.9","rem2006":0.37,"rem2007":0.28,"rem2008":0.32,"rem2009":0.33,"rem2010":0.38,"rem2011":0.3,"rem2012":0.22,"remMean":0.31,"name":"Simley High","address":"2920 80th St. E., Inver Grove Heights, MN 55076","district_name":"Inver Grove Heights"},"geometry":{"type":"Point","coordinates":[-93.04731560160306,44.83283887378817]}},{"type":"Feature","properties":{"id":"0833-01-024","grad_rate":"0.95","rem2006":0.28,"rem2007":0.36,"rem2008":0.37,"rem2009":0.34,"rem2010":0.3,"rem2011":0.25,"rem2012":0.28,"remMean":0.31,"name":"Park High","address":"8040 80th St. S., Cottage Grove, MN 55016","district_name":"South Washington County"},"geometry":{"type":"Point","coordinates":[-92.9416683091297,44.83516281069358]}},{"type":"Feature","properties":{"id":"0110-01-310","grad_rate":"0.91","rem2006":0.19,"rem2007":0.29,"rem2008":0.26,"rem2009":0.11,"rem2010":0.31,"rem2011":0.2,"rem2012":0.16,"remMean":0.22,"name":"Waconia High","address":"1400 Community Drive, Waconia, MN 55387","district_name":"Waconia"},"geometry":{"type":"Point","coordinates":[-93.81085539062728,44.835715459234414]}},{"type":"Feature","properties":{"id":"0001-03-360","grad_rate":"0.49","rem2006":0.43,"rem2007":0.47,"rem2008":0.5,"rem2009":0.33,"rem2010":0.51,"rem2011":0.51,"rem2012":0.38,"remMean":0.45,"name":"Roosevelt High","address":"4029 28th Ave. S., Minneapolis, MN 55406","district_name":"Minneapolis"},"geometry":{"type":"Point","coordinates":[-93.23048735242095,44.92961587649561]}},{"type":"Feature","properties":{"id":"0283-01-040","grad_rate":"0.85","rem2006":0.23,"rem2007":0.21,"rem2008":0.28,"rem2009":0.25,"rem2010":0.26,"rem2011":0.29,"rem2012":0.19,"remMean":0.24,"name":"St. Louis Park High","address":"6425 W. 33rd St., St. Louis Park, MN 55426","district_name":"St. Louis Park"},"geometry":{"type":"Point","coordinates":[-93.3611985885454,44.943538722876895]}},{"type":"Feature","properties":{"id":"0001-03-362","grad_rate":"0.75","rem2006":0.24,"rem2007":0.26,"rem2008":0.28,"rem2009":0.26,"rem2010":0.23,"rem2011":0.21,"rem2012":0.23,"remMean":0.24,"name":"South High","address":"3131 19th Ave. S., Minneapolis, MN 55407","district_name":"Minneapolis"},"geometry":{"type":"Point","coordinates":[-93.24413452799908,44.945642607781735]}},{"type":"Feature","properties":{"id":"0625-01-210","grad_rate":"0.89","rem2006":0.31,"rem2007":0.32,"rem2008":0.35,"rem2009":0.32,"rem2010":0.29,"rem2011":0.38,"rem2012":0.29,"remMean":0.32,"name":"Central High","address":"275 N. Lexington Pkwy., St. Paul, MN 55104","district_name":"St. Paul"},"geometry":{"type":"Point","coordinates":[-93.14791370799544,44.949359067941316]}},{"type":"Feature","properties":{"id":"0277-01-062","grad_rate":"0.89","rem2006":0.25,"rem2007":0.29,"rem2008":0.23,"rem2009":0.19,"rem2010":0.18,"rem2011":0.18,"rem2012":0.15,"remMean":0.21,"name":"Mound-Westonka High","address":"5909 Sunnyfield Road E., Minnetrista, MN 55364","district_name":"Westonka"},"geometry":{"type":"Point","coordinates":[-93.67190345079825,44.95495943763464]}},{"type":"Feature","properties":{"id":"0625-01-212","grad_rate":"0.81","rem2006":0.31,"rem2007":0.31,"rem2008":0.38,"rem2009":0.36,"rem2010":0.37,"rem2011":0.44,"rem2012":0.39,"remMean":0.37,"name":"Como Park High","address":"740 W. Rose Ave., St. Paul, MN 55117","district_name":"St. Paul"},"geometry":{"type":"Point","coordinates":[-93.13127349009197,44.97593525467396]}},{"type":"Feature","properties":{"id":"0625-01-230","grad_rate":"0.77","rem2006":0.41,"rem2007":0.4,"rem2008":0.35,"rem2009":0.42,"rem2010":0.41,"rem2011":0.5,"rem2012":0.45,"remMean":0.42,"name":"Johnson High","address":"1349 Arcade St., St. Paul, MN 55106","district_name":"St. Paul"},"geometry":{"type":"Point","coordinates":[-93.06783019762182,44.98143674257659]}},{"type":"Feature","properties":{"id":"0001-03-352","grad_rate":"0.52","rem2006":0.42,"rem2007":0.43,"rem2008":0.47,"rem2009":0.38,"rem2010":0.45,"rem2011":0.51,"rem2012":0.49,"remMean":0.45,"name":"Edison High","address":"700 22nd Ave. NE, Minneapolis, MN 55418","district_name":"Minneapolis"},"geometry":{"type":"Point","coordinates":[-93.25176357693164,45.00944098070713]}},{"type":"Feature","properties":{"id":"0623-01-069","grad_rate":"0.88","rem2006":0.27,"rem2007":0.29,"rem2008":0.34,"rem2009":0.29,"rem2010":0.24,"rem2011":0.25,"rem2012":0.2,"remMean":0.27,"name":"Roseville Area High","address":"1240 W. Cty. Road B2, Roseville, MN 55113","district_name":"Roseville"},"geometry":{"type":"Point","coordinates":[-93.15153107901638,45.0121700083902]}},{"type":"Feature","properties":{"id":"0622-01-057","grad_rate":"0.84","rem2006":0.44,"rem2007":0.41,"rem2008":0.32,"rem2009":0.37,"rem2010":0.4,"rem2011":0.33,"rem2012":0.24,"remMean":0.36,"name":"North High","address":"2416 E. 11th Ave., North St. Paul, MN 55109","district_name":"North St. Paul-Maplewood-Oakdale"},"geometry":{"type":"Point","coordinates":[-92.99780324120151,45.01487203773763]}},{"type":"Feature","properties":{"id":"0281-01-053","grad_rate":"0.79","rem2006":0.28,"rem2007":0.27,"rem2008":0.3,"rem2009":0.33,"rem2010":0.25,"rem2011":0.26,"rem2012":0.18,"remMean":0.27,"name":"Robbinsdale Armstrong High","address":"10635 36th Ave. N., Plymouth, MN 55441","district_name":"Robbinsdale"},"geometry":{"type":"Point","coordinates":[-93.41824022569604,45.01995473320775]}},{"type":"Feature","properties":{"id":"0282-01-020","grad_rate":"0.85","rem2006":0.16,"rem2007":0.2,"rem2008":0.21,"rem2009":0.18,"rem2010":0.19,"rem2011":0.21,"rem2012":0.15,"remMean":0.19,"name":"St. Anthony Village High","address":"3303 33rd Ave. NE, St. Anthony, MN 55418","district_name":"St. Anthony-New Brighton"},"geometry":{"type":"Point","coordinates":[-93.21425316182018,45.028781581769394]}},{"type":"Feature","properties":{"id":"0834-01-047","grad_rate":"0.92","rem2006":0.28,"rem2007":0.28,"rem2008":0.27,"rem2009":0.27,"rem2010":0.23,"rem2011":0.18,"rem2012":0.18,"remMean":0.24,"name":"Stillwater High","address":"5701 Stillwater Blvd. N., Stillwater, MN 55082","district_name":"Stillwater Area"},"geometry":{"type":"Point","coordinates":[-92.8466609739454,45.02969878012449]}},{"type":"Feature","properties":{"id":"0001-03-354","grad_rate":"0.68","rem2006":0.36,"rem2007":0.45,"rem2008":0.34,"rem2009":0.35,"rem2010":0.39,"rem2011":0.36,"rem2012":0.4,"remMean":0.38,"name":"Patrick Henry High","address":"4320 Newton Ave. N., Minneapolis, MN 55412","district_name":"Minneapolis"},"geometry":{"type":"Point","coordinates":[-93.30533887817293,45.034034008324795]}},{"type":"Feature","properties":{"id":"0877-01-040","grad_rate":"0.92","rem2006":0.29,"rem2007":0.28,"rem2008":0.26,"rem2009":0.28,"rem2010":0.33,"rem2011":0.26,"rem2012":0.2,"remMean":0.27,"name":"Buffalo High","address":"877 Bison Blvd., Buffalo, MN 55313","district_name":"Buffalo-Hanover-Montrose"},"geometry":{"type":"Point","coordinates":[-93.83003836207048,45.18251128632731]}},{"type":"Feature","properties":{"id":"0011-01-091","grad_rate":"0.86","rem2006":0.37,"rem2007":0.35,"rem2008":0.35,"rem2009":0.33,"rem2010":0.32,"rem2011":0.28,"rem2012":0.23,"remMean":0.32,"name":"Blaine High","address":"12555 University Ave. NE, Blaine, MN 55434","district_name":"Anoka-Hennepin"},"geometry":{"type":"Point","coordinates":[-93.2635503431771,45.199567612609165]}},{"type":"Feature","properties":{"id":"0728-01-510","grad_rate":"0.95","rem2006":0.32,"rem2007":0.33,"rem2008":0.39,"rem2009":0.26,"rem2010":0.33,"rem2011":0.32,"rem2012":0.22,"remMean":0.31,"name":"Rogers High","address":"21000 141st Ave., Rogers, MN 55374","district_name":"Elk River Area"},"geometry":{"type":"Point","coordinates":[-93.5443576416273,45.21167623415046]}},{"type":"Feature","properties":{"id":"0011-01-001","grad_rate":"0.85","rem2006":0.32,"rem2007":0.3,"rem2008":0.34,"rem2009":0.3,"rem2010":0.29,"rem2011":0.24,"rem2012":0.2,"remMean":0.28,"name":"Anoka High","address":"3939 N. 7th Ave., Anoka, MN 55303","district_name":"Anoka-Hennepin"},"geometry":{"type":"Point","coordinates":[-93.38336842450964,45.22421668466685]}},{"type":"Feature","properties":{"id":"0011-01-094","grad_rate":"0.9","rem2006":0.34,"rem2007":0.25,"rem2008":0.32,"rem2009":0.25,"rem2010":0.25,"rem2011":0.25,"rem2012":0.15,"remMean":0.26,"name":"Andover High","address":"2115 Andover Blvd. NW, Andover, MN 55304","district_name":"Anoka-Hennepin"},"geometry":{"type":"Point","coordinates":[-93.31912398218898,45.23915429366911]}},{"type":"Feature","properties":{"id":"0831-01-114","grad_rate":"0.89","rem2006":0.39,"rem2007":0.36,"rem2008":0.34,"rem2009":0.29,"rem2010":0.31,"rem2011":0.28,"rem2012":0.26,"remMean":0.32,"name":"Forest Lake High","address":"6101 Scandia Trail N., Forest Lake, MN 55025","district_name":"Forest Lake Area"},"geometry":{"type":"Point","coordinates":[-92.97947349898129,45.25807278137128]}},{"type":"Feature","properties":{"id":"0876-01-003","grad_rate":"0.9","rem2006":0.3,"rem2007":0.15,"rem2008":0.14,"rem2009":0.19,"rem2010":0.18,"rem2011":0.22,"rem2012":0.2,"remMean":0.2,"name":"Annandale High","address":"855 Hemlock St. E., Annandale, MN 55302","district_name":"Annandale"},"geometry":{"type":"Point","coordinates":[-94.10856353581232,45.266476969139326]}},{"type":"Feature","properties":{"id":"0882-01-020","grad_rate":"0.96","rem2006":0.24,"rem2007":0.24,"rem2008":0.36,"rem2009":0.33,"rem2010":0.21,"rem2011":0.22,"rem2012":0.17,"remMean":0.25,"name":"Monticello High","address":"5225 School Blvd., Monticello, MN 55362","district_name":"Monticello"},"geometry":{"type":"Point","coordinates":[-93.77825168941416,45.286979021424656]}},{"type":"Feature","properties":{"id":"0728-01-500","grad_rate":"0.93","rem2006":0.33,"rem2007":0.29,"rem2008":0.27,"rem2009":0.27,"rem2010":0.28,"rem2011":0.22,"rem2012":0.21,"remMean":0.27,"name":"Elk River High","address":"900 School St. NW, Elk River, MN 55330","district_name":"Elk River Area"},"geometry":{"type":"Point","coordinates":[-93.56913524218521,45.31243037173638]}},{"type":"Feature","properties":{"id":"0727-01-020","grad_rate":"0.88","rem2006":0.3,"rem2007":0.36,"rem2008":0.34,"rem2009":0.33,"rem2010":0.3,"rem2011":0.28,"rem2012":0.18,"remMean":0.3,"name":"Big Lake High","address":"501 Minnesota Ave., Big Lake, MN 55309","district_name":"Big Lake"},"geometry":{"type":"Point","coordinates":[-93.73839646640789,45.339676991200434]}},{"type":"Feature","properties":{"id":"0015-01-122","grad_rate":"0.91","rem2006":0.35,"rem2007":0.33,"rem2008":0.36,"rem2009":0.29,"rem2010":0.28,"rem2011":0.25,"rem2012":0.22,"remMean":0.3,"name":"St. Francis High","address":"3325 Bridge St., St. Francis, MN 55070","district_name":"St. Francis"},"geometry":{"type":"Point","coordinates":[-93.34957571528884,45.38802535784693]}},{"type":"Feature","properties":{"id":"0726-01-020","grad_rate":"0.94","rem2006":0.15,"rem2007":0.2,"rem2008":0.22,"rem2009":0.14,"rem2010":0.22,"rem2011":0.18,"rem2012":0.1,"remMean":0.17,"name":"Becker High","address":"12000 Hancock St., Becker, MN 55308","district_name":"Becker"},"geometry":{"type":"Point","coordinates":[-93.87203578689589,45.39923743034897]}},{"type":"Feature","properties":{"id":"0728-01-530","grad_rate":"0.9","rem2006":0.3,"rem2007":0.49,"rem2008":0.3,"rem2009":0.2,"rem2010":0.25,"rem2011":0.3,"rem2012":0.19,"remMean":0.29,"name":"Zimmerman High","address":"25900 4th St. W., Zimmerman, MN 55398","district_name":"Elk River Area"},"geometry":{"type":"Point","coordinates":[-93.5954541064593,45.438619056172996]}},{"type":"Feature","properties":{"id":"0281-01-050","grad_rate":"0.73","rem2006":0.34,"rem2007":0.31,"rem2008":0.36,"rem2009":0.37,"rem2010":0.42,"rem2011":0.37,"rem2012":0.37,"remMean":0.36,"name":"Robbinsdale Cooper High","address":"8230 47th Ave. N., New Hope, MN 55428","district_name":"Robbinsdale"},"geometry":{"type":"Point","coordinates":[-93.38482371144256,45.041316503592675]}},{"type":"Feature","properties":{"id":"0284-01-050","grad_rate":"0.9","rem2006":0.19,"rem2007":0.16,"rem2008":0.2,"rem2009":0.17,"rem2010":0.17,"rem2011":0.11,"rem2012":0.12,"remMean":0.16,"name":"Wayzata High","address":"4955 Peony Lane N., Plymouth, MN 55446","district_name":"Wayzata"},"geometry":{"type":"Point","coordinates":[-93.511171874258,45.0447620751095]}},{"type":"Feature","properties":{"id":"0879-01-020","grad_rate":"0.94","rem2006":0.19,"rem2007":0.18,"rem2008":0.2,"rem2009":0.21,"rem2010":0.18,"rem2011":0.19,"rem2012":0.12,"remMean":0.18,"name":"Delano High","address":"700 Elm Ave. E., Delano, MN 55328","district_name":"Delano"},"geometry":{"type":"Point","coordinates":[-93.77906602557351,45.044869104848765]}},{"type":"Feature","properties":{"id":"0624-01-095","grad_rate":"0.97","rem2006":0.36,"rem2007":0.36,"rem2008":0.38,"rem2009":0.35,"rem2010":0.29,"rem2011":0.32,"rem2012":0.29,"remMean":0.34,"name":"WBL High South","address":"3551 McKnight Road N., White Bear Lake, MN 55110","district_name":"White Bear Lake"},"geometry":{"type":"Point","coordinates":[-93.00712983107081,45.04828231406716]}},{"type":"Feature","properties":{"id":"0013-01-016","grad_rate":"0.81","rem2006":0.52,"rem2007":0.45,"rem2008":0.37,"rem2009":0.34,"rem2010":0.4,"rem2011":0.41,"rem2012":0.28,"remMean":0.4,"name":"Columbia Heights High","address":"1400 49th Ave. NE, Columbia Heights, MN 55421","district_name":"Columbia Heights"},"geometry":{"type":"Point","coordinates":[-93.23987135591221,45.055002023789235]}},{"type":"Feature","properties":{"id":"0832-01-040","grad_rate":"0.97","rem2006":0.24,"rem2007":0.25,"rem2008":0.24,"rem2009":0.17,"rem2010":0.15,"rem2011":0.16,"rem2012":0.1,"remMean":0.19,"name":"Mahtomedi High","address":"8000 75th St. N., Mahtomedi, MN 55115","district_name":"Mahtomedi"},"geometry":{"type":"Point","coordinates":[-92.94322277060559,45.05830995926881]}},{"type":"Feature","properties":{"id":"0621-01-064","grad_rate":"0.95","rem2006":0.18,"rem2007":0.22,"rem2008":0.2,"rem2009":0.13,"rem2010":0.19,"rem2011":0.12,"rem2012":0.05,"remMean":0.16,"name":"Mounds View High","address":"1900 Lake Valentine Road, Arden Hills, MN 55112","district_name":"Mounds View"},"geometry":{"type":"Point","coordinates":[-93.18056126205425,45.0644376130919]}},{"type":"Feature","properties":{"id":"0014-01-022","grad_rate":"0.85","rem2006":0.25,"rem2007":0.34,"rem2008":0.39,"rem2009":0.32,"rem2010":0.36,"rem2011":0.43,"rem2012":0.29,"remMean":0.34,"name":"Fridley High","address":"6000 W. Moore Lake Drive, Fridley, MN 55432","district_name":"Fridley"},"geometry":{"type":"Point","coordinates":[-93.25237270954744,45.0763202059959]}},{"type":"Feature","properties":{"id":"0279-01-088","grad_rate":"0.8","rem2006":0.38,"rem2007":0.42,"rem2008":0.44,"rem2009":0.45,"rem2010":0.42,"rem2011":0.44,"rem2012":0.41,"remMean":0.42,"name":"Park Center IB","address":"7300 Brooklyn Blvd., Brooklyn Park, MN 55443","district_name":"Osseo"},"geometry":{"type":"Point","coordinates":[-93.34383233533822,45.088363140966756]}},{"type":"Feature","properties":{"id":"0466-01-002","grad_rate":"0.95","rem2006":0.21,"rem2007":0.31,"rem2008":0.22,"rem2009":0.22,"rem2010":0.21,"rem2011":0.32,"rem2012":0.2,"remMean":0.24,"name":"Dassel-Cokato High","address":"4852 Reardon Ave. SW, Cokato, MN 55321","district_name":"Dassel-Cokato"},"geometry":{"type":"Point","coordinates":[-94.23349636333006,45.08307425145731]}},{"type":"Feature","properties":{"id":"0621-01-065","grad_rate":"0.94","rem2006":0.27,"rem2007":0.29,"rem2008":0.34,"rem2009":0.3,"rem2010":0.27,"rem2011":0.21,"rem2012":0.27,"remMean":0.28,"name":"Irondale High","address":"2425 LONG Lake Road, New Brighton, MN 55112","district_name":"Mounds View"},"geometry":{"type":"Point","coordinates":[-93.20726984973818,45.09044797480104]}},{"type":"Feature","properties":{"id":"0883-01-001","grad_rate":"0.77","rem2006":0.17,"rem2007":0.28,"rem2008":0.25,"rem2009":0.32,"rem2010":0.35,"rem2011":0.4,"rem2012":0.18,"remMean":0.28,"name":"Rockford High","address":"7600 Cty. Road 50, Rockford, MN 55373","district_name":"Rockford Area"},"geometry":{"type":"Point","coordinates":[-93.71987154734921,45.08749220577358]}},{"type":"Feature","properties":{"id":"0138-01-030","grad_rate":"0.89","rem2006":0.28,"rem2007":0.44,"rem2008":0.33,"rem2009":0.28,"rem2010":0.27,"rem2011":0.25,"rem2012":0.3,"remMean":0.31,"name":"North Branch High","address":"38175 Grand Ave., North Branch, MN 55056","district_name":"North Branch"},"geometry":{"type":"Point","coordinates":[-92.96894135551271,45.50244020735142]}},{"type":"Feature","properties":{"id":"0742-01-059","grad_rate":"0.87","rem2006":0.16,"rem2007":0.19,"rem2008":0.21,"rem2009":0.18,"rem2010":0.24,"rem2011":0.18,"rem2012":0.15,"remMean":0.19,"name":"Technical High","address":"233 12th Ave. S., St. Cloud, MN 56301","district_name":"St. Cloud"},"geometry":{"type":"Point","coordinates":[-94.16553166364993,45.55432946779036]}},{"type":"Feature","properties":{"id":"0477-01-030","grad_rate":"0.92","rem2006":0.3,"rem2007":0.37,"rem2008":0.3,"rem2009":0.27,"rem2010":0.35,"rem2011":0.32,"rem2012":0.23,"remMean":0.31,"name":"Princeton High","address":"807 S. 8th Ave., Princeton, MN 55371","district_name":"Princeton"},"geometry":{"type":"Point","coordinates":[-93.5853559063134,45.559842644874465]}},{"type":"Feature","properties":{"id":"0742-01-057","grad_rate":"0.84","rem2006":0.19,"rem2007":0.27,"rem2008":0.24,"rem2009":0.34,"rem2010":0.22,"rem2011":0.3,"rem2012":0.2,"remMean":0.25,"name":"Apollo High","address":"1000 44th Ave. N., St. Cloud, MN 56303","district_name":"St. Cloud"},"geometry":{"type":"Point","coordinates":[-94.21069774642032,45.5700210645639]}},{"type":"Feature","properties":{"id":"0911-01-350","grad_rate":"0.89","rem2006":0.32,"rem2007":0.3,"rem2008":0.3,"rem2009":0.32,"rem2010":0.3,"rem2011":0.28,"rem2012":0.15,"remMean":0.28,"name":"Cambridge-Isanti High","address":"430 NW 8th Ave., Cambridge, MN 55008","district_name":"Cambridge-Isanti"},"geometry":{"type":"Point","coordinates":[-93.23002933956533,45.58035045269654]}},{"type":"Feature","properties":{"id":"0016-01-045","grad_rate":"0.92","rem2006":0.3,"rem2007":0.43,"rem2008":0.31,"rem2009":0.29,"rem2010":0.3,"rem2011":0.34,"rem2012":0.28,"remMean":0.32,"name":"Spring Lake Park High","address":"8001 Able St. NE, Spring Lake Park, MN 55432","district_name":"Spring Lake Park"},"geometry":{"type":"Point","coordinates":[-93.24524366352094,45.1126791531728]}},{"type":"Feature","properties":{"id":"0279-01-032","grad_rate":"0.83","rem2006":0.3,"rem2007":0.36,"rem2008":0.43,"rem2009":0.38,"rem2010":0.38,"rem2011":0.35,"rem2012":0.27,"remMean":0.35,"name":"Osseo High","address":"317 2nd Ave. NW, Osseo, MN 55369","district_name":"Osseo"},"geometry":{"type":"Point","coordinates":[-93.40747026477871,45.12050616308613]}},{"type":"Feature","properties":{"id":"0347-01-300","grad_rate":"0.83","rem2006":0.28,"rem2007":0.3,"rem2008":0.34,"rem2009":0.31,"rem2010":0.34,"rem2011":0.31,"rem2012":0.33,"remMean":0.32,"name":"Willmar High","address":"2701 30th St. NE, Willmar, MN 56201","district_name":"Willmar"},"geometry":{"type":"Point","coordinates":[-95.00513472152338,45.15280868701783]}},{"type":"Feature","properties":{"id":"0011-01-002","grad_rate":"0.79","rem2006":0.35,"rem2007":0.38,"rem2008":0.38,"rem2009":0.35,"rem2010":0.28,"rem2011":0.3,"rem2012":0.24,"remMean":0.33,"name":"Coon Rapids High","address":"2340 Northdale Blvd., Coon Rapids, MN 55433","district_name":"Anoka-Hennepin"},"geometry":{"type":"Point","coordinates":[-93.3258867266362,45.18166902117229]}},{"type":"Feature","properties":{"id":"0750-01-050","grad_rate":"0.93","rem2006":0.2,"rem2007":0.1,"rem2008":0.24,"rem2009":0.15,"rem2010":0.22,"rem2011":0.18,"rem2012":0.16,"remMean":0.18,"name":"Rocori High","address":"534 5th Ave. N., Cold Spring, MN 56320","district_name":"ROCORI"},"geometry":{"type":"Point","coordinates":[-94.42844957603796,45.46378046035079]}},{"type":"Feature","properties":{"id":"0047-01-001","grad_rate":"0.92","rem2006":0.2,"rem2007":0.27,"rem2008":0.29,"rem2009":0.26,"rem2010":0.31,"rem2011":0.27,"rem2012":0.18,"remMean":0.25,"name":"Sauk Rapids-Rice High","address":"1833 Osauka Road NE, Sauk Rapids, MN 56379","district_name":"Sauk Rapids-Rice"},"geometry":{"type":"Point","coordinates":[-94.12628768725605,45.609651008625754]}},{"type":"Feature","properties":{"id":"0748-01-020","grad_rate":"0.93","rem2006":0.15,"rem2007":0.17,"rem2008":0.22,"rem2009":0.15,"rem2010":0.11,"rem2011":0.12,"rem2012":0.09,"remMean":0.14,"name":"Sartell High","address":"748 6th St. N., Sartell, MN 56377","district_name":"Sartell-St. Stephen"},"geometry":{"type":"Point","coordinates":[-94.21906821075594,45.62882317447009]}},{"type":"Feature","properties":{"id":"0745-01-060","grad_rate":"0.88","rem2006":0.18,"rem2007":null,"rem2008":0.22,"rem2009":0.25,"rem2010":0.17,"rem2011":0.11,"rem2012":null,"remMean":0.19,"name":"Albany High","address":"30 Forest Ave., Albany, MN 56307","district_name":"Albany Area"},"geometry":{"type":"Point","coordinates":[-94.56081076449078,45.63150327608117]}},{"type":"Feature","properties":{"id":"2149-01-050","grad_rate":"0.84","rem2006":null,"rem2007":0.19,"rem2008":0.17,"rem2009":null,"rem2010":0.21,"rem2011":0.22,"rem2012":null,"remMean":0.2,"name":"Minnewaska Area High","address":"25122 State Hwy. 28, Glenwood, MN 56334","district_name":"Minnewaska"},"geometry":{"type":"Point","coordinates":[-95.4550552377429,45.62487024981979]}},{"type":"Feature","properties":{"id":"0051-01-020","grad_rate":"0.94","rem2006":0.15,"rem2007":0.18,"rem2008":0.2,"rem2009":0.18,"rem2010":0.24,"rem2011":null,"rem2012":0.12,"remMean":0.18,"name":"Foley High","address":"621 Penn St., Foley, MN 56329","district_name":"Foley"},"geometry":{"type":"Point","coordinates":[-93.90963470532233,45.67060185373403]}},{"type":"Feature","properties":{"id":"0740-01-030","grad_rate":"0.97","rem2006":0.18,"rem2007":0.15,"rem2008":0.2,"rem2009":0.25,"rem2010":0.33,"rem2011":0.28,"rem2012":0.26,"remMean":0.24,"name":"Melrose High","address":"546 N. 5th Ave. E., Melrose, MN 56352","district_name":"Melrose"},"geometry":{"type":"Point","coordinates":[-94.8060908618518,45.68190165288176]}},{"type":"Feature","properties":{"id":"0743-01-030","grad_rate":"0.91","rem2006":0.15,"rem2007":null,"rem2008":null,"rem2009":0.19,"rem2010":0.16,"rem2011":0.18,"rem2012":0.17,"remMean":0.17,"name":"Sauk Centre High","address":"903 State Road, Sauk Centre, MN 56378","district_name":"Sauk Centre"},"geometry":{"type":"Point","coordinates":[-94.9433243659452,45.72897895959427]}},{"type":"Feature","properties":{"id":"0912-01-030","grad_rate":"0.92","rem2006":0.16,"rem2007":0.21,"rem2008":0.18,"rem2009":0.22,"rem2010":0.21,"rem2011":0.19,"rem2012":0.16,"remMean":0.19,"name":"Milaca High","address":"500 Hwy. 23 SW, Milaca, MN 56353","district_name":"Milaca"},"geometry":{"type":"Point","coordinates":[-93.65696963243057,45.751052601431894]}},{"type":"Feature","properties":{"id":"0578-01-020","grad_rate":"0.94","rem2006":0.34,"rem2007":0.31,"rem2008":0.35,"rem2009":0.24,"rem2010":0.41,"rem2011":0.22,"rem2012":0.27,"remMean":0.31,"name":"Pine City High","address":"1400 Main St. S., Pine City, MN 55063","district_name":"Pine City"},"geometry":{"type":"Point","coordinates":[-92.96867819186298,45.810235454069876]}},{"type":"Feature","properties":{"id":"0332-01-040","grad_rate":"0.96","rem2006":0.31,"rem2007":0.29,"rem2008":0.26,"rem2009":0.23,"rem2010":0.27,"rem2011":0.25,"rem2012":0.24,"remMean":0.26,"name":"Mora High","address":"400 Maple Ave. E., Mora, MN 55051","district_name":"Mora"},"geometry":{"type":"Point","coordinates":[-93.29242743714208,45.87838565726739]}},{"type":"Feature","properties":{"id":"0206-01-320","grad_rate":"0.91","rem2006":0.14,"rem2007":0.17,"rem2008":0.19,"rem2009":0.08,"rem2010":0.12,"rem2011":0.15,"rem2012":0.14,"remMean":0.14,"name":"Jefferson High","address":"1401 Jefferson St., Alexandria, MN 56308","district_name":"Alexandria"},"geometry":{"type":"Point","coordinates":[-95.37183806079739,45.87578511838663]}},{"type":"Feature","properties":{"id":"0482-01-300","grad_rate":"0.9","rem2006":0.22,"rem2007":0.2,"rem2008":0.18,"rem2009":0.21,"rem2010":0.21,"rem2011":0.13,"rem2012":0.13,"remMean":0.18,"name":"Little Falls High","address":"1001 5th Ave. SE, Little Falls, MN 56345","district_name":"Little Falls"},"geometry":{"type":"Point","coordinates":[-94.3475753389851,45.97188361380272]}},{"type":"Feature","properties":{"id":"0484-01-030","grad_rate":"0.89","rem2006":null,"rem2007":null,"rem2008":null,"rem2009":0.22,"rem2010":0.25,"rem2011":null,"rem2012":null,"remMean":0.24,"name":"Healy High","address":"112 Kamnic St., Pierz, MN 56364","district_name":"Pierz"},"geometry":{"type":"Point","coordinates":[-94.09698535369962,45.97924690637896]}},{"type":"Feature","properties":{"id":"2753-01-020","grad_rate":"0.75","rem2006":0.21,"rem2007":0.17,"rem2008":null,"rem2009":null,"rem2010":null,"rem2011":null,"rem2012":null,"remMean":0.19,"name":"LPGE High","address":"510 9th St. NE, Long Prairie, MN 56347","district_name":"Long Prairie-Grey Eagle"},"geometry":{"type":"Point","coordinates":[-94.84751229286164,45.98091988827499]}},{"type":"Feature","properties":{"id":"0593-01-090","grad_rate":"0.87","rem2006":0.33,"rem2007":0.4,"rem2008":0.47,"rem2009":0.38,"rem2010":0.25,"rem2011":0.3,"rem2012":null,"remMean":0.36,"name":"Crookston High","address":"402 Fisher Ave., Crookston, MN 56716","district_name":"Crookston"},"geometry":{"type":"Point","coordinates":[-96.60261173617558,47.7911036463666]}},{"type":"Feature","properties":{"id":"0595-01-320","grad_rate":"0.84","rem2006":0.28,"rem2007":0.44,"rem2008":0.38,"rem2009":0.46,"rem2010":0.44,"rem2011":0.37,"rem2012":0.4,"remMean":0.4,"name":"East Grand Forks High","address":"1420 4th Ave. NW, East Grand Forks, MN 56721","district_name":"East Grand Forks"},"geometry":{"type":"Point","coordinates":[-97.02288875836939,47.939223979334976]}},{"type":"Feature","properties":{"id":"2144-01-004","grad_rate":"0.92","rem2006":0.23,"rem2007":0.29,"rem2008":0.24,"rem2009":0.27,"rem2010":0.2,"rem2011":0.28,"rem2012":0.18,"remMean":0.24,"name":"Chisago Lakes High","address":"29400 Olinda Trail, Lindstrom, MN 55045","district_name":"Chisago Lakes"},"geometry":{"type":"Point","coordinates":[-92.84332465725709,45.37386619894388]}},{"type":"Feature","properties":{"id":"0564-01-070","grad_rate":"0.95","rem2006":0.3,"rem2007":0.4,"rem2008":0.34,"rem2009":0.41,"rem2010":0.37,"rem2011":0.32,"rem2012":0.3,"remMean":0.35,"name":"Lincoln High","address":"101 Knight Ave. S., Thief River Falls, MN 56701","district_name":"Thief River Falls"},"geometry":{"type":"Point","coordinates":[-96.18482875443344,48.116304235101445]}},{"type":"Feature","properties":{"id":"0682-01-020","grad_rate":"0.92","rem2006":null,"rem2007":0.3,"rem2008":0.47,"rem2009":0.2,"rem2010":0.27,"rem2011":0.41,"rem2012":0.29,"remMean":0.32,"name":"Roseau High","address":"509 3rd St. NE, Roseau, MN 56751","district_name":"Roseau"},"geometry":{"type":"Point","coordinates":[-95.7558832911896,48.84972026933716]}},{"type":"Feature","properties":{"id":"0690-01-030","grad_rate":"0.82","rem2006":0.3,"rem2007":0.38,"rem2008":0.52,"rem2009":0.48,"rem2010":0.48,"rem2011":0.38,"rem2012":0.26,"remMean":0.4,"name":"Warroad High","address":"510 Cedar St., Warroad, MN 56763","district_name":"Warroad"},"geometry":{"type":"Point","coordinates":[-95.32976892545007,48.91066667119843]}},{"type":"Feature","properties":{"id":"0181-01-014","grad_rate":"0.83","rem2006":0.25,"rem2007":0.22,"rem2008":0.17,"rem2009":0.11,"rem2010":0.19,"rem2011":0.19,"rem2012":0.08,"remMean":0.17,"name":"Brainerd High","address":"702 5th St. S., Brainerd, MN 56401","district_name":"Brainerd"},"geometry":{"type":"Point","coordinates":[-94.20295470238763,46.35174888184829]}},{"type":"Feature","properties":{"id":"0196-01-058","grad_rate":"0.43","rem2006":null,"rem2007":null,"rem2008":0.37,"rem2009":0.52,"rem2010":0.55,"rem2011":0.42,"rem2012":0.42,"remMean":0.46,"name":"Rosemount High ALC","address":"5840 149th St. W., Apple Valley, MN 55124","district_name":"Rosemount-Apple Valley-Eagan"},"geometry":{"type":"Point","coordinates":[-93.18347466074061,44.732475470064884]}},{"type":"Feature","properties":{"id":"0196-01-060","grad_rate":"0.96","rem2006":null,"rem2007":null,"rem2008":null,"rem2009":null,"rem2010":0.3,"rem2011":0.26,"rem2012":0.26,"remMean":0.27,"name":"School of Environmental Studies","address":"12900 Johnny Cake Ridge Road, Apple Valley, MN 55124","district_name":"Rosemount-Apple Valley-Eagan"},"geometry":{"type":"Point","coordinates":[-93.18528212772434,44.76133337858577]}},{"type":"Feature","properties":{"id":"0625-01-710","grad_rate":"0.37","rem2006":0.38,"rem2007":0.68,"rem2008":0.72,"rem2009":0.6,"rem2010":0.51,"rem2011":0.58,"rem2012":0.44,"remMean":0.56,"name":"Gordon Parks High","address":"1212 University Ave. W., St. Paul, MN 55117","district_name":"St. Paul"},"geometry":{"type":"Point","coordinates":[-93.15098151139136,44.95482106780531]}},{"type":"Feature","properties":{"id":"0361-01-001","grad_rate":"0.8","rem2006":null,"rem2007":0.44,"rem2008":0.25,"rem2009":0.26,"rem2010":0.17,"rem2011":0.32,"rem2012":0.22,"remMean":0.28,"name":"Falls High","address":"1515 11th St. W., International Falls, MN 56649","district_name":"International Falls"},"geometry":{"type":"Point","coordinates":[-93.4268562611019,48.594412819111255]}},{"type":"Feature","properties":{"id":"0423-01-030","grad_rate":"0.92","rem2006":0.19,"rem2007":0.32,"rem2008":0.24,"rem2009":0.23,"rem2010":0.28,"rem2011":0.31,"rem2012":0.2,"remMean":0.25,"name":"Hutchinson High","address":"1200 Roberts Road, Hutchinson, MN 55350","district_name":"Hutchinson"},"geometry":{"type":"Point","coordinates":[-94.39324753658275,44.88444948169263]}},{"type":"Feature","properties":{"id":"0112-01-064","grad_rate":"0.93","rem2006":null,"rem2007":null,"rem2008":null,"rem2009":null,"rem2010":null,"rem2011":0.14,"rem2012":0.15,"remMean":0.15,"name":"Chanhassen High","address":"2200 Lyman Blvd., Chanhassen, MN 55317","district_name":"Eastern Carver County"},"geometry":{"type":"Point","coordinates":[-93.57454967455033,44.84524100674674]}},{"type":"Feature","properties":{"id":"0624-01-837","grad_rate":"0.54","rem2006":null,"rem2007":0.84,"rem2008":null,"rem2009":0.55,"rem2010":0.44,"rem2011":null,"rem2012":null,"remMean":0.61,"name":"WBL ALC","address":"2449 Orchard Lane, White Bear Lake, MN 55110","district_name":"White Bear Lake"},"geometry":{"type":"Point","coordinates":[-92.99923160361439,45.04363885995108]}},{"type":"Feature","properties":{"id":"0625-01-608","grad_rate":"0.25","rem2006":null,"rem2007":null,"rem2008":0.43,"rem2009":null,"rem2010":0.55,"rem2011":null,"rem2012":null,"remMean":0.49,"name":"Focus Beyond","address":"251 Starkey St., St. Paul, MN 55107","district_name":"St. Paul"},"geometry":{"type":"Point","coordinates":[-93.08541932729295,44.93600963129997]}},{"type":"Feature","properties":{"id":"0742-01-065","grad_rate":"0.33","rem2006":0.33,"rem2007":0.32,"rem2008":0.25,"rem2009":0.35,"rem2010":0.39,"rem2011":0.56,"rem2012":0.48,"remMean":0.38,"name":"St Cloud ALC","address":"809 N. 12th St., St. Cloud, MN 56303","district_name":"St. Cloud"},"geometry":{"type":"Point","coordinates":[-94.1721824398539,45.57091862084273]}},{"type":"Feature","properties":{"id":"0001-03-380","grad_rate":"0.18","rem2006":null,"rem2007":null,"rem2008":0.43,"rem2009":null,"rem2010":null,"rem2011":null,"rem2012":0.41,"remMean":0.42,"name":"Transition Plus ALC","address":"256 1st Ave. N., Minneapolis, MN 55401","district_name":"Minneapolis"},"geometry":{"type":"Point","coordinates":[-93.27090178908013,44.98291456827768]}},{"type":"Feature","properties":{"id":"2310-01-003","grad_rate":"0.95","rem2006":0.21,"rem2007":0.27,"rem2008":0.25,"rem2009":0.18,"rem2010":0.3,"rem2011":0.21,"rem2012":null,"remMean":0.24,"name":"Arlington High","address":"202 3rd Ave. NW, Arlington, MN 55307","district_name":"Sibley East"},"geometry":{"type":"Point","coordinates":[-94.07938382634924,44.608856944168224]}},{"type":"Feature","properties":{"id":"2853-01-040","grad_rate":"0.9","rem2006":0.2,"rem2007":0.24,"rem2008":0.31,"rem2009":0.26,"rem2010":0.29,"rem2011":0.37,"rem2012":null,"remMean":0.28,"name":"Lac Qui Parle Valley High","address":"2860 29th Ave., Madison, MN 56256","district_name":"Lac Qui Parle Valley"},"geometry":{"type":"Point","coordinates":[-96.06014697065929,45.07318574304642]}},{"type":"Feature","properties":{"id":"4017-07-014","grad_rate":"0.19","rem2006":null,"rem2007":null,"rem2008":null,"rem2009":0.35,"rem2010":0.4,"rem2011":0.43,"rem2012":0.32,"remMean":0.38,"name":"MTS Virtual High","address":"2872 26th Ave. S., Minneapolis, MN 55406","district_name":"Minneapolis"},"geometry":{"type":"Point","coordinates":[-93.2341938346838,44.95061030812264]}},{"type":"Feature","properties":{"id":"4017-07-015","grad_rate":"0.12","rem2006":null,"rem2007":0.67,"rem2008":0.42,"rem2009":0.57,"rem2010":0.58,"rem2011":0.59,"rem2012":0.55,"remMean":0.56,"name":"MTS Alt. Learning","address":"2872 26th Ave. S., Minneapolis, MN 55406","district_name":"Minneapolis"},"geometry":{"type":"Point","coordinates":[-93.2341938346838,44.95061030812264]}},{"type":"Feature","properties":{"id":"4082-07-010","grad_rate":"0.18","rem2006":null,"rem2007":0.57,"rem2008":0.39,"rem2009":0.48,"rem2010":0.41,"rem2011":0.46,"rem2012":null,"remMean":0.46,"name":"Bluesky Charter","address":"33 Wentworth Ave. E., South St. Paul, MN 55118","district_name":"West St. Paul-Mendota Hts.-Eagan"},"geometry":{"type":"Point","coordinates":[-93.08359774708214,44.89828494297211]}},{"type":"Feature","properties":{"id":"0885-01-020","grad_rate":"0.96","rem2006":0.29,"rem2007":0.31,"rem2008":0.34,"rem2009":0.31,"rem2010":0.26,"rem2011":0.24,"rem2012":0.13,"remMean":0.27,"name":"STMA High","address":"5800 Jamison Ave. NE, St. Michael, MN 55376","district_name":"St. Michael-Albertville"},"geometry":{"type":"Point","coordinates":[-93.69100272696859,45.23484257988]}},{"type":"Feature","properties":{"id":"0300-01-020","grad_rate":"0.97","rem2006":null,"rem2007":null,"rem2008":null,"rem2009":null,"rem2010":null,"rem2011":null,"rem2012":null,"remMean":null,"name":"La Crescent-Hokah High","address":"1301 Lancer Blvd., La Crescent, MN 55947","district_name":"La Crescent-Hokah"},"geometry":{"type":"Point","coordinates":[-91.3128828318132,43.81558969165296]}},{"type":"Feature","properties":{"id":"0917-06-071","grad_rate":"0.29","rem2006":0.45,"rem2007":0.69,"rem2008":0.48,"rem2009":0.38,"rem2010":null,"rem2011":null,"rem2012":null,"remMean":0.5,"name":"Dakota Cty. ALC","address":"1300 145th St. E., Rosemount, MN 55068","district_name":"Rosemount-Apple Valley-Eagan"},"geometry":{"type":"Point","coordinates":[-93.07789272441305,44.73808195206285]}},{"type":"Feature","properties":{"id":"1000-70-010","grad_rate":"1","rem2006":null,"rem2007":0.17,"rem2008":null,"rem2009":null,"rem2010":null,"rem2011":0.17,"rem2012":null,"remMean":0.17,"name":"Perpich Center for the Arts","address":"6125  Olson Memorial Hwy., Golden Valley, MN 55422","district_name":"Hopkins"},"geometry":{"type":"Point","coordinates":[-93.35926398323016,44.9834876909837]}},{"type":"Feature","properties":{"id":"0192-01-020","grad_rate":"0.93","rem2006":0.3,"rem2007":0.28,"rem2008":0.33,"rem2009":0.31,"rem2010":0.38,"rem2011":0.25,"rem2012":0.27,"remMean":0.3,"name":"Farmington","address":"20655 Flagstaff Ave., Farmington, MN 55024","district_name":"Farmington Area"},"geometry":{"type":"Point","coordinates":[-93.20466232130445,44.65085185882989]}},{"type":"Feature","properties":{"id":"0833-01-025","grad_rate":"0.95","rem2006":null,"rem2007":null,"rem2008":null,"rem2009":null,"rem2010":null,"rem2011":0.23,"rem2012":0.21,"remMean":0.22,"name":"East Ridge High","address":"4200 Pioneer Drive, Woodbury, MN 55129","district_name":"South Washington County"},"geometry":{"type":"Point","coordinates":[-92.93356970067701,44.88538717052507]}},{"type":"Feature","properties":{"id":"4000-07-010","grad_rate":"0.64","rem2006":null,"rem2007":null,"rem2008":0.76,"rem2009":0.7,"rem2010":0.84,"rem2011":0.72,"rem2012":0.58,"remMean":0.72,"name":"City Academy","address":"958 Jessie St., St. Paul, MN 55101","district_name":"St. Paul"},"geometry":{"type":"Point","coordinates":[-93.07696297100769,44.96993595988406]}}]}';});

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
  'chosen', 'ractive-decorators-chosen',
  'leaflet', 'highcharts', 'highchartsMore', 'chroma',
  'mpConfig', 'mpFormatters', 'mpHighcharts', 'mpMaps',
  'base',
  'text!templates/application.mustache',
  'text!templates/tooltip-chart.underscore',
  'text!../data/schools.geo.json'
], function(
  $, _, Backbone, Lazyload, Ractive, RactiveBackbone, RactiveEventsTap,
  chosen, RactiveDecoratorsChosen,
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
      // Remove zero data (though this should not be in here)
      this.schools.features = _.filter(this.schools.features, function(f, fi) {
        return f.properties.remMean;
      });
      // Make collection for select
      this.schoolNameList = _.sortBy(_.map(this.schools.features, function(f, fi) {
        return { id: f.properties.id, name: f.properties.name };
      }), 'name');

      // Make color scale, using diverging
      this.colorScale = chroma.scale([
        '#ff6633', '#ff9975', '#ffc8b6', '#efe3c8', '#7abecc', '#0793ab'
      ].reverse()).mode('hsl').domain(_.map(this.schools.features, function(f, fi) {
        return f.properties.remMean;
      }), 6);

      // Make view
      this.renderView();

      // Make
      this.on('viewRendered', function() {
        thisApp.drawCharts();
        thisApp.drawMaps();
        thisApp.makeRouter();
        thisApp.eventHandling();
      });
    },

    // Make view
    renderView: function() {
      var thisApp = this;
      this.mainView = new Ractive({
        el: this.$el,
        template: tApplication,
        data: {
          f: mpFormatters,
          isReady: false,
          schoolNameList: this.schoolNameList,
          searchSelectedSchoolID: null
        },
        partials: {
        },
        decorators: {
          chosen: Ractive.decorators.chosen,
          schoolChart: this.schoolChartDecorator
        },
        app: this
      });

      // (maybe, actually this is not really necessary)
      // the view is not fully loaded in the DOM
      // before a map gets made, but there's not a way
      // to see when this is with Ractive
      _.delay(function() {
        thisApp.mainView.set('isReady', true);
        thisApp.trigger('viewRendered');
      }, 500);
    },

    // Make router
    makeRouter: function() {
      var thisApp = this;
      var Router = Backbone.Router.extend({
        routes: {
          'school/:school': 'routeSchool',
          '*defaultR': 'routeDefault'
        },
        app: thisApp,

        routeSchool: function(school) {
          var found = _.find(this.app.schools.features, function(f, fi) {
            return f.properties.id === school;
          });
          if (school && found) {
            this.app.mainView.set('selectedSchoolID', school);
          }
        },

        routeDefault: function() {
          this.app.resetSelected();
        }
      });
      this.router = new Router();
      Backbone.history.start();
    },

    // Handle some events
    eventHandling: function() {
      var thisApp = this;
      // Handle events
      this.mainView.observe('selectedSchoolID', function(n, o) {
        var found = _.find(thisApp.schools.features, function(f, fi) {
          return (!!n && f.properties.id === n);
        });
        var points;

        if (!!n && found && n !== o) {
          // Get data for school
          this.set('selectedSchool', found);

          // Highlight chart and map
          thisApp.highlight(found);

          // Re focus app if small
          points = thisApp.responsivePoints();
          if (points.indexOf('small') !== -1 && points.indexOf('medium') === -1) {
            thisApp.gotoElement(thisApp.$('.school-details'));
          }

          // Set search box
          this.set('searchSelectedSchoolID', n);
        }
      });

      // Handle search/select input
      this.mainView.observe('searchSelectedSchoolID', function(n, o) {
        var found = _.find(thisApp.schools.features, function(f, fi) {
          return (!!n && f.properties.id === n);
        });
        if (found && n !== o) {
          thisApp.router.navigate('/school/' + n, { trigger: true });
        }
        else if (!found || n === 'None') {
          thisApp.router.navigate('/', { trigger: true });
        }
      });

    },

    // Reset select
    resetSelected: function() {
      this.mainView.set('searchSelectedSchoolID', null);
      this.mainView.set('selectedSchoolID', null);
      this.mainView.set('selectedSchool', null);
      this.unhighlight();
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
            },
            title: {
              enabled: true,
              text: 'Minnesota high schools'
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
                    thisApp.router.navigate('/school/' + this.id, { trigger: true });
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

      // Add tooltip control
      this.tooltipControl = new mpMaps.TooltipControl();
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
            color: chroma(color).darken(20).hex(),
            weight: 2,
            opacity: 0.8
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
            thisApp.router.navigate('/school/' + feature.properties.id, { trigger: true });
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
      var latLon = [current.geometry.coordinates[1], current.geometry.coordinates[0]];

      // Map
      this.schoolMapLayer.eachLayer(function(layer) {
        if (layer.feature.properties.id === currentP.id) {
          layer.setStyle(_.extend(_.clone(layer.originalOptions), {
            opacity: 0.75,
            color: '#222222',
            weight: 3
          }));
          layer.setRadius(9);
          layer.bringToFront();
          thisApp.map.setView(latLon, 10);
        }
        else {
          layer.setStyle(_.clone(layer.originalOptions));
          layer.setRadius(5);
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

    // Unhighlight for reset
    unhighlight: function() {
      var thisApp = this;

      // Map
      this.schoolMapLayer.eachLayer(function(layer) {
        layer.setStyle(_.clone(layer.originalOptions));
        layer.setRadius(5);
      });
      this.map.fitBounds(this.schoolMapLayer.getBounds(), {
        reset: true
      });

      // Chart
      _.each(this.schoolsChart.series[0].data, function(d, di) {
        // Only redraw if previously highlighted
        d.update({ color: d.options.originalColor }, (d.color === '#222222'), false);
      });

    },

    // Ractive decorator for making a chart for each school
    schoolChartDecorator: function(node, currentSchool) {
      var p = (currentSchool) ? currentSchool.properties : undefined;
      var chart, chartData;
      var app = this._config.options.app;

      // Add chart
      if (p && !_.isObject(chart) && _.isObject(currentSchool)) {
        chartData = [{
          name: 'Remedial score over time',
          color: mpConfig['colors-data'].green1,
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
    },

    // Find responsive points that apply
    responsivePoints: function() {
      var points = [];
      var width = $(window).width();
      var widths = _.sortBy(_.map(mpConfig['responsive-points'], function(r, ri) {
        return [ri, parseInt(r.replace('px', ''), 10)];
      }), function(w, wi) {
        return w[1];
      });

      _.each(widths, function(w, wi) {
        if (width > w[1]) {
          points.push(w[0]);
        }
      });
      return points;
    },

    // Go to element
    gotoElement: function(element, speed, offset) {
      speed = speed || 700;
      offset = offset || 20;
      var $target = $(element);
      var top = $target.offset().top;

      $('html, body').animate({
        scrollTop: (top - offset)
      }, speed);
    }
  });

  // Create instance and return
  return new App({});
});

define("app", function(){});

