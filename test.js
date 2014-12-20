/**
 * mustache-spec <https://github.com/tunnckoCore/mustache-spec>
 *
 * Copyright (c) 2014 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var specs = require('./index');

describe('mustache-spec', function() {
  it('should be javascript object with all data', function(done) {
    Object.keys(specs).should.have.lengthOf(7);
    specs.should.have.properties('comments', 'delimiters', 'sections');
    specs.comments.tests[0].name.should.equal('Inline');
    specs.sections.tests[3].name.should.equal('Deeply Nested Contexts');
    specs.sections.tests[3].data.a.one.should.equal(1);
    specs.sections.tests[3].data.d.should.eql({four: 4});
    specs.partials.overview.should.startWith('Partial tags are used to');
    done();
  });
});
