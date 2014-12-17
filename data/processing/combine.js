/**
* Combines data sources.
*/

var path = require('path');
var os = require('os');
var fs = require('fs');
var _ = require('lodash');

// Get data
var remedialAnalysis = require('../build/school-remedial-and-grad-rates.json');
var schoolGeo = require('../build/schools-locations.geo.json');

// Define some vars
var outputFile = path.join(__dirname, '../schools.geo.json');


// Go through and match up geo json
schoolGeo.features = _.map(schoolGeo.features, function(f, fi) {
  var p = f.properties;
  var id = p.UNI_MAJ + '-' + p.UNI_TYPE + '-' + p.UNI_IMD;
  var r = remedialAnalysis[id];

  if (r) {
    f.properties = {
      id: id,
      grad_rate: r['grad.rate'],
      rem2006: (r['2006']) ? parseFloat(r['2006']) : null,
      rem2007: (r['2007']) ? parseFloat(r['2007']) : null,
      rem2008: (r['2008']) ? parseFloat(r['2008']) : null,
      rem2009: (r['2009']) ? parseFloat(r['2009']) : null,
      rem2010: (r['2010']) ? parseFloat(r['2010']) : null,
      rem2011: (r['2011']) ? parseFloat(r['2011']) : null,
      rem2012: (r['2012']) ? parseFloat(r['2012']) : null,
      remMean: (r.mean) ? parseFloat(r.mean) : null,
      name: p.SCHNAME.trim(),
      address: p.ADDRESS + ', ' + p.CITY + ', ' + p.STATE + ' ' + p.ZIP,
      district_name: p.SDNAME
    };
  }
  else {
    f = undefined;
  }

  return f;
});

// Filter out the stuff we don't want
schoolGeo.features = _.filter(schoolGeo.features, function(f) { return f; });

// Write out file
fs.writeFile(outputFile, JSON.stringify(schoolGeo), function(error) {
  if (error) {
    console.log('Error when saving.');
    console.error(error);
  }
  else {
    console.log('Combined data.');
  }
});
