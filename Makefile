tfSecrets = -var-file="infrastructure/secrets.tfvars"
tfState   = -state="infrastructure/terraform.tfstate"
tfPath    = infrastructure/

stagingBucket = staging.react.london
awsRegion = eu-west-1
distDir = ./dist/
webpack = ./node_modules/webpack/bin/webpack.js


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

.PHONY: \
	terraform-staging \
	terraform-staging-apply \
	deploy-staging \
	clean \
	build \
	help
