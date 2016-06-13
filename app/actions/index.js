export const requestDeployment = (environment, content) => ({
  type: 'DEPLOY_CONTENT',
  environment,
  content,
})