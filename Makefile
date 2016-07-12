serverArgs = -r dotenv/config ./dist/server.js
deploy     = ./bin/deploy.sh
distDir    = ./dist/
webpack    = ./node_modules/webpack/bin/webpack.js
mocha      = ./node_modules/mocha/bin/mocha

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

clean: ## Remove compiled files
	rm -rf dist/*

build: clean ## Start the dev compiler
	$(webpack) --progress --watch

build-production: clean ## Compile the app
	$(webpack)

start: ## Start the server in dev mode (run build first)
	./node_modules/nodemon/bin/nodemon.js $(serverArgs)

start-production: ## Start the server in production mode
	NODE_ENV=production node $(serverArgs)

test: ## Run the tests
	$(mocha)

test-watch: ## Run the tests and watch for changes
	$(mocha) --reporter min --watch

lint: ## Lint Javascript files
	./node_modules/eslint/bin/eslint.js . --ext .js --ext .jsx --ignore-path .gitignore --cache

deploy-staging: ## Deploy the current branch to staging
	$(deploy) staging

deploy-production: ## Deploy the current branch to production
	$(deploy) production


.PHONY: \
	deploy-staging \
	deploy-production \
	start \
	clean \
	build \
	test \
	test-watch \
	lint \
	help
