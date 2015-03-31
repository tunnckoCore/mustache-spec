/**
 * mustache-spec <https://github.com/tunnckoCore/mustache-spec>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var path = require('path');
var exportFiles = require('export-files');

module.exports = function mustacheSpec() {
  return exportFiles(path.join(__dirname, 'specs'));
};
