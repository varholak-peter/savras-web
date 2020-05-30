import React, { FC } from 'react'

import * as S from './styled'

export type CardData = {
  author: string
  description: string
  id: string
  source: string
  time: string
  title: string
  url: string
}

type Props = CardData & {
  onClose: React.ComponentProps<typeof S.Button>['onClick']
}

export const Card: FC<Props> = ({
  author,
  description,
  onClose,
  source,
  time,
  title,
  url,
}) => (
  <S.Wrap>
    <S.ContentWrap>
      <S.ContentLink href={url} target="_blank">
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </S.ContentLink>
      <S.Button onClick={onClose} type="button">
        X
      </S.Button>
    </S.ContentWrap>
    <hr />
    <S.Footer>
      <S.Time>{time}</S.Time>
      <S.Source>{source}</S.Source>
      <S.Author>{author}</S.Author>
    </S.Footer>
  </S.Wrap>
)
