import React, { useEffect, useState } from 'react'

import { getData, markDone } from 'api'
import { Card, CardData } from 'components/Card'
import { formatData } from '../../util'

import * as S from './styled'

export const HomePage = () => {
  const [status, setStatus] = useState('Loading...')
  const [data, setData] = useState<CardData[]>([])

  useEffect(() => {
    const loadData = async () => {
      const res = await getData()
      setData(formatData(res))
      setStatus('')
    }

    loadData().catch((err) => {
      setStatus(String(err))
    })
  }, [])

  return (
    <>
      <header>
        <S.Title>
          <S.TitleCapital>S</S.TitleCapital>
          <S.TitleRest>avras</S.TitleRest>
        </S.Title>
      </header>
      <S.CardList>
        {status
          ? status
          : data.map((card) => (
              <Card key={card.id} {...card} onClose={() => markDone(card.id)} />
            ))}
      </S.CardList>
    </>
  )
}
