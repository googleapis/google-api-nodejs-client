.PHONY: build build-tools check check-samples check-licenses check-typescript clean coverage docs fix fix-samples fix-typescript generate install test test-samples watch

PATH := $(shell npm bin):$(PATH)

build:
	tsc -v && tsc -p .

build-tools:
	tsc -p tsconfig.tools.json

check: check-typescript check-samples check-licenses

check-samples:
	semistandard 'samples/**/*.js'

check-licenses:
	jsgl --local .

check-typescript:
	gts check

clean:
	gts clean

coverage: build
	nyc --cache mocha build/test -t 10000 -S -R spec --require intelli-espower-loader
	nyc report --reporter=html

docs:
	jsdoc -c jsdoc-conf.json

fix: fix-typescript fix-samples

fix-samples:
	semistandard --fix 'samples/**/*.js'

fix-typescript:
	gts fix

generate: build-tools
	node build/src/scripts/generate.js
	clang-format -i -style='{Language: JavaScript, BasedOnStyle: Google, ColumnLimit: 80}' src/apis/**/*.ts

install:
	npm install

node_modules/.link:
	npm link && npm link googleapis && touch $@

test: coverage check

test-samples: node_modules/.link
	mocha build/test/samples

watch:
	tsc -p . --watch
