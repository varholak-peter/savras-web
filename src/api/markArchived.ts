export const markArchived = (id: string) => {
  const endpoint = process.env.REACT_APP_ENDPOINT

  if (!endpoint) {
    throw new Error('REACT_APP_ENDPOINT must be present')
  }

  fetch(`${endpoint}/${encodeURIComponent(id)}/archive`, {
    method: 'PATCH',
  }).catch((err) => {
    throw new Error(err)
  })
}
