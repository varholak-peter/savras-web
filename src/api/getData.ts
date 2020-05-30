export type DataRes = {
  author: string
  date: string
  description: string
  id: string
  source: string
  title: string
  url: string
}

export const getData = async (): Promise<DataRes[]> => {
  const endpoint = process.env.REACT_APP_ENDPOINT

  if (!endpoint) {
    throw new Error('REACT_APP_ENDPOINT must be present')
  }

  const res = await fetch(endpoint)
  const data = await res.json()

  return data
}
