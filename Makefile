tfSecrets = -var-file="infrastructure/secrets.tfvars"
tfState   = -state="infrastructure/terraform.tfstate"


help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

terraform-staging: ## Preview infrastructure changes for staging
	terraform plan $(tfSecrets) $(tfState) infrastructure/

terraform-staging-apply: ## Apply infrastructure changes for staging
	terraform apply $(tfSecrets) $(tfState) infrastructure/

.PHONY: \
	terraform-staging \
	terraform-staging-apply \
	help
