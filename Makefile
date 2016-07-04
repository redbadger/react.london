stagingBucket = staging.react.london
awsRegion = eu-west-1
distDir = ./dist/
webpack = ./node_modules/webpack/bin/webpack.js
mocha   = ./node_modules/mocha/bin/mocha
testCmd = find . -path ./node_modules -prune -o -name '*test.js' | xargs $(mocha) --require ./mocha-env.js

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

clean: ## Remove compiled files
	rm -rf dist/*

build: clean ## Compile the app
	$(webpack)

start: ## Start the dev server
	node -r dotenv/config -r babel-core/register server/index.js --presets es2015,stage-0

seed: ## Set up seed data for use in development
	mkdir -p tmp/data
	cp data/seed.json tmp/data/site.json

test: ## Run the tests
	$(testCmd)

test-watch: ## Run the tests and watch for changes
	$(testCmd) --reporter min --watch

lint: ## Lint Javascript files
	./node_modules/eslint/bin/eslint.js . --ext .js --ext .jsx --ignore-path .gitignore --cache

.PHONY: \
	terraform-staging \
	terraform-staging-apply \
	start \
	clean \
	build \
	test \
	test-watch \
	lint \
	help \
	assets
