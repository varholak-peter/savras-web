import React, { useEffect, useState } from 'react'

import { getData, markArchived, markDone } from 'api'
import { Card, CardData } from 'components/Card'
import { Archive } from 'components/Icon'
import { formatData } from '../../util'

import * as S from './styled'

type CardFilter = 'all' | 'archived'

export const HomePage = () => {
  const [cardFilter, setCardFilter] = useState<CardFilter>('all')
  const [status, setStatus] = useState('')
  const [data, setData] = useState<CardData[]>([])

  useEffect(() => {
    setStatus(`Loading ${cardFilter} cards`)

    const loadData = async () => {
      const res = await getData(
        cardFilter === 'archived' ? { archived: true } : {}
      )
      setData(formatData(res))
      setStatus('')
    }

    loadData().catch((err) => {
      setStatus(String(err))
    })
  }, [cardFilter])

  return (
    <>
      <S.Header>
        <S.Title>
          <S.TitleCapital>S</S.TitleCapital>
          <S.TitleRest>avras</S.TitleRest>
        </S.Title>
        <S.Controls>
          <S.ControlsButton
            onClick={() => {
              setCardFilter('archived')
            }}
            type="button"
          >
            <Archive height={36} width={36} />
          </S.ControlsButton>
        </S.Controls>
      </S.Header>
      <S.CardList>
        {status ? (
          <S.StatusText>{status}</S.StatusText>
        ) : (
          data.map((card) => (
            <Card
              key={card.id}
              {...card}
              onArchive={() => {
                const { id } = card
                markArchived(id)
                setData(data.filter((entry) => entry.id !== id))
              }}
              onClose={() => {
                const { id } = card
                markDone(id)
                setData(data.filter((entry) => entry.id !== id))
              }}
            />
          ))
        )}
      </S.CardList>
    </>
  )
}
