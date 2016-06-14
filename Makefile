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
	rm -r dist

build: clean dist/index.html dist/bundle.js ## Compile the app

deploy-staging: build ## Compile and deploy the app to staging
	aws s3 sync $(distDir) s3://$(stagingBucket)/ --region $(awsRegion)
	@echo
	@echo ==> http://$(stagingBucket).s3-website-eu-west-1.amazonaws.com/

dist/bundle.js:
	$(webpack)

dist/index.html:
	mkdir -p dist
	cp app/index.html dist

start: ## Start the dev server
	npm start

test-server: ## Run the backend tests
	$(mocha) app/server/routingTest.js --compilers js:babel-core/register --require ignore-styles

test: ## Run the frontend tests
	$(testCmd)

test-watch: ## Run the frontend test watcher
	$(testCmd) --watch

lint: ## Lint Javascript files
	./node_modules/eslint/bin/eslint.js . --ext .js --ext .jsx --ignore-path .gitignore --cache

.PHONY: \
	terraform-staging \
	terraform-staging-apply \
	deploy-staging \
	start \
	clean \
	build \
	test \
	test-watch \
	lint \
	help
