// requires
var DefaultTransporter = require('../lib/transporters');
var swig = require('swig');
var fs = require('fs');
var Generator = require('../lib/generator');

// constructors
var gen = new Generator();

gen.generateAllAPIs();
gen.generateIndex();
