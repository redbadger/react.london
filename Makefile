tfSecrets = -var-file="infrastructure/secrets.tfvars"
tfState   = -state="infrastructure/terraform.tfstate"
tfPath    = infrastructure/

stagingBucket = staging.react.london
awsRegion = eu-west-1
distDir = ./dist/
webpack = ./node_modules/webpack/bin/webpack.js
mocha   = ./node_modules/mocha/bin/mocha
testCmd = find . -path ./node_modules -prune -o -name '*test.js' | xargs $(mocha) --require ./mocha-env.js

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

terraform-staging: ## Preview infrastructure changes for staging
	terraform plan $(tfSecrets) $(tfState) $(tfPath)

terraform-staging-apply: ## Apply infrastructure changes for staging
	terraform apply $(tfSecrets) $(tfState) $(tfPath)

clean: ## Remove compiled files
	rm -r dist/*

build: clean dist/index.html dist/bundle.js dist/assets ## Compile the app

build-watch: dist/assets ## Compile the app and watch for changes
	$(webpack) --watch --progess

dist/bundle.js:
	$(webpack)

dist/assets:
	cp -a assets/. dist

dist/index.html:
	mkdir -p dist
	cp app/index.html dist

start: ## Start the server
	node -r dotenv/config -r babel-core/register server/index.js --presets es2015,stage-0

test: ## Run the tests
	$(testCmd)

test-watch: ## Run the tests and watch for changes
	$(testCmd) --watch

pages: ## Compile the static pages
	node -r babel-core/register compile.js --presets es2015

pages-watch: ## Compile the static pages and watch for changes
	./node_modules/watch/cli.js 'make pages' app

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
	help
