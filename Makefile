# Makefile <https://github.com/tunnckoCore/dotfiles>
#
# Copyright (c) 2014 Charlike Mike Reagent, contributors.
# Released under the MIT license.
#

lint:
	jshint .
	jscs . --reporter inline

test:
	mocha --require should

clean:
	rm -rf node_modules

.PHONY: lint test clean
