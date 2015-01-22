/**
 * mustache-spec <https://github.com/tunnckoCore/mustache-spec>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var assert = require('assert');
var specs = require('./index');

describe('mustache-spec:', function() {
  it('should be json object with all data', function(done) {
    assert.strictEqual(Object.keys(specs()).length, 6);
    assert(specs().comments && specs().delimiters && specs().sections);
    assert.strictEqual(specs().sections.tests[3].name, 'Deeply Nested Contexts');
    done();
  });
  it('should have comments.json spec', function(done) {
    assert.strictEqual(Object.keys(specs()).length, 6);
    assert(specs().comments);
    assert.strictEqual(specs().comments.tests[0].name, 'Inline');
    done();
  });
  it('should have delimiters.json spec', function(done) {
    assert.strictEqual(Object.keys(specs()).length, 6);
    assert(specs().delimiters);
    done();
  });
  it('should have sections.json spec', function(done) {
    assert.strictEqual(Object.keys(specs()).length, 6);
    assert(specs().sections);
    assert.strictEqual(specs().sections.tests[3].data.a.one, 1);
    assert.deepEqual(specs().sections.tests[3].data.d, {four: 4});
    done();
  });
  it('should have partials.json spec', function(done) {
    assert.strictEqual(Object.keys(specs()).length, 6);
    assert(specs().partials);
    assert(specs().partials.overview.indexOf('Partial tags are used to') !== -1);
    done();
  });
});
