serverArgs = -r dotenv/config ./dist/server.js
deploy     = node bin/deploy-version.js
distDir    = ./dist/
webpack    = ./node_modules/webpack/bin/webpack.js
mocha      = ./node_modules/mocha/bin/mocha
_mocha     = ./node_modules/mocha/bin/_mocha
istanbul   = ./node_modules/.bin/istanbul
coveralls  = ./node_modules/coveralls/bin/coveralls.js

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

clean: ## Remove compiled files
	rm -rf dist/*

build: clean ## Start the dev compiler
	$(webpack) --progress --watch

build-production: clean ## Compile the app
	$(webpack) -p

start: ## Start the server in dev mode (run build first)
	./node_modules/nodemon/bin/nodemon.js $(serverArgs)

start-production: ## Start the server in production mode
	NODE_ENV=production node $(serverArgs)

test: ## Run the tests
	$(mocha)

test-watch: ## Run the tests and watch for changes
	$(mocha) --reporter min --watch

test-cover:
	$(istanbul) cover $(_mocha)

send-cover:
	cat ./coverage/lcov.info | $(coveralls) && rm -rf ./coverage

lint: ## Lint Javascript files
	./node_modules/eslint/bin/eslint.js . --ext .js --ext .jsx --ignore-path .gitignore --cache

build-version: ## Register a new application version from the current commit
	./bin/push-new-version.sh

compress-assets: ## Compress frontend assets
	./node_modules/.bin/svgo -f assets/img/SVG
	./node_modules/.bin/svgo -f assets/img/favicons

deploy-staging: ## Deploy the current branch + commit to staging
	$(deploy) staging

deploy-production: ## Deploy the current branch + commit to production
	$(deploy) production

.PHONY: \
	build-version \
	deploy-staging \
	deploy-production \
	start \
	clean \
	build \
	test \
	test-watch \
	lint \
	help
