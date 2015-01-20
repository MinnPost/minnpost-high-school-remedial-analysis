/**
 * RequireJS config which maps out where files are and shims
 * any non-compliant libraries.
 */
require.config({
  // Hack around jQuery.  This does not seem to work with Highcharts
  // (or possibly with other jquery plugins)
  /*
  map: {
    '*': {
      'jquery': 'jquery-noconflict'
    },
    'jquery-noconflict': {
      'jquery': 'jquery'
    }
  },
  */
  waitSeconds: 10,
  shim: {
    'highcharts': {
      exports: 'Highcharts',
      deps: ['jquery']
    },
    'highchartsMore': {
      deps: ['highcharts']
    },
    'datatables': {
      deps: ['jquery']
    },
    'lazyload': {
      exports: 'LazyLoad'
    }
  },
  baseUrl: 'js',
  paths: {
    'requirejs': '../bower_components/requirejs/require',
    'almond': '../bower_components/almond/almond',
    'text': '../bower_components/text/text',
    'jquery': '../bower_components/jquery/dist/jquery',
    'underscore': '../bower_components/underscore/underscore',
    'backbone': '../bower_components/backbone/backbone',
    'lazyload': '../bower_components/rgrove-lazyload/lazyload',
    'ractive': '../bower_components/ractive/ractive-legacy',
    'ractive-backbone': '../bower_components/ractive-backbone/ractive-adaptors-backbone',
    'ractive-events-tap': '../bower_components/ractive-events-tap/ractive-events-tap',
    'ractive-decorators-chosen': '../bower_components/ractive-decorators-chosen/ractive-decorators-chosen',
    'chosen': '../bower_components/chosen/chosen.jquery',
    'leaflet': '../bower_components/leaflet/dist/leaflet-src',
    'highcharts': '../bower_components/highcharts-release/highcharts.src',
    'highchartsMore': '../bower_components/highcharts-release/highcharts-more.src',
    'chroma': '../bower_components/chroma-js/chroma',
    'mpConfig': '../bower_components/minnpost-styles/dist/minnpost-styles.config',
    'mpFormatters': '../bower_components/minnpost-styles/dist/minnpost-styles.formatters',
    'mpHighcharts': '../bower_components/minnpost-styles/dist/minnpost-styles.highcharts',
    'mpMaps': '../bower_components/minnpost-styles/dist/minnpost-styles.maps',
    'jquery-noconflict': 'build/jquery-noconflict'
  }
});
