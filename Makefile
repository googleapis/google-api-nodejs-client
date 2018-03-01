.PHONY: build build-tools check check-samples check-licenses check-typescript clean coverage docs fix fix-samples fix-typescript generate install test watch

bin := $(shell npm bin)

build:
	$(bin)/tsc -p .

build-tools:
	$(bin)/tsc -p tsconfig.tools.json

check: check-typescript check-samples check-licenses

check-samples:
	$(bin)/semistandard 'samples/**/*.js'

check-licenses:
	$(bin)/jsgl --local .

check-typescript:
	$(bin)/gts check

clean:
	$(bin)/gts clean

coverage: build
	$(bin)/nyc --cache $(bin)/mocha build/test -t 10000 -S -R spec --require intelli-espower-loader
	$(bin)/nyc report --reporter=html

docs:
	$(bin)/jsdoc -c jsdoc-conf.json

fix: fix-typescript fix-samples

fix-samples:
	$(bin)/semistandard --fix 'samples/**/*.js'

fix-typescript:
	$(bin)/gts fix

generate: build-tools
	node build/src/scripts/generate.js
	$(bin)/clang-format -i -style='{Language: JavaScript, BasedOnStyle: Google, ColumnLimit: 80}' src/apis/**/*.ts

install:
	npm install

test: coverage check

test-samples:
	npm link
	npm link googleapis
	$(bin)/mocha build/test/samples

watch:
	$(bin)/tsc -p . --watch
