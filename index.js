/**
 * mustache-spec <https://github.com/tunnckoCore/mustache-spec>
 *
 * Copyright (c) 2014 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var path = require('path');
var exportFiles = require('export-files');

function specs() {
  return exportFiles(path.join(__dirname, 'specs'), {
    filter: function(fp) {
      return /\.json$/.test(path.basename(fp));
    }
  });
}

module.exports = specs();
