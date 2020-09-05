import React, { ComponentProps, FC } from 'react'

import { Archive, Close } from 'components/Icon'

import * as S from './styled'

export type CardData = {
  author: string
  description: string
  id: string
  isArchived: boolean
  isCompleted: boolean
  source: string
  time: string
  timeRaw: string
  title: string
  url: string
}

type Props = CardData & {
  onArchive: ComponentProps<typeof S.Button>['onClick']
  onClose: ComponentProps<typeof S.Button>['onClick']
}

export const Card: FC<Props> = ({
  author,
  description,
  isArchived,
  isCompleted,
  onArchive,
  onClose,
  source,
  time,
  timeRaw,
  title,
  url,
}) => (
  <S.Wrap>
    <S.ContentWrap>
      <S.ContentLink href={url} target="_blank">
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </S.ContentLink>
      <S.Controls>
        {isCompleted ? null : (
          <S.Button onClick={onClose} type="button">
            <Close />
          </S.Button>
        )}
        {isArchived ? null : (
          <S.Button onClick={onArchive} type="button">
            <Archive />
          </S.Button>
        )}
      </S.Controls>
    </S.ContentWrap>
    <hr />
    <S.Footer>
      <S.Time dateTime={timeRaw}>{time}</S.Time>
      <S.Source>{source}</S.Source>
      <S.Author>{author}</S.Author>
    </S.Footer>
  </S.Wrap>
)
