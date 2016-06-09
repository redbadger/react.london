
export const deployContent = (environment, content) => {
  fetch(`/${environment}`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(content)
    })
}