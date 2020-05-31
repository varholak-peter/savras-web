import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

import { DataRes } from 'api/getData'
import { CardData } from 'components/Card'

dayjs.extend(relativeTime)

export const formatData = (data: DataRes[]): CardData[] =>
  data.map(({ author, date, description, id, source, title, url }) => ({
    author,
    description,
    id,
    source,
    time: dayjs(date).fromNow(true),
    timeRaw: date,
    title,
    url,
  }))
