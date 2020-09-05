import qs from 'querystring'

export type Options = {
  archived?: boolean
  completed?: boolean
}

export type DataRes = {
  author: string
  date: string
  description: string
  id: string
  isArchived: boolean
  isCompleted: boolean
  source: string
  title: string
  url: string
}

export const getData = async (options?: Options): Promise<DataRes[]> => {
  const endpoint = process.env.REACT_APP_ENDPOINT

  if (!endpoint) {
    throw new Error('REACT_APP_ENDPOINT must be present')
  }

  const query = qs.stringify(options)

  const res = await fetch(`${endpoint}${query && `?${query}`}`)
  const data = await res.json()

  return data
}
