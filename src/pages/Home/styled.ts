import styled from 'styled-components'

import { theme } from 'styles/theme'

export const Controls = styled.span``

export const ControlsButton = styled.button`
  color: ${theme.color.text.light};
`

export const Header = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: ${theme.spacing(0, 3)};
`

export const StatusText = styled.strong`
  color: ${theme.color.text.light};
  display: inline-block;
  font-size: 1rem;
  margin-top: ${theme.spacing(8)};
  text-align: center;
`

export const Title = styled.h1`
  color: ${theme.color.text.light};
  margin: 0;
`

export const TitleCapital = styled.span`
  font-size: 2rem;
  font-weight: bold;
`

export const TitleRest = styled.span`
  font-size: 1.6rem;
  font-weight: 300;
`

export const CardList = styled.div`
  align-items: stretch;
  display: flex;
  flex-direction: column;
  margin-top: ${theme.spacing(2)};
  padding: ${theme.spacing(0, 2)};
`
