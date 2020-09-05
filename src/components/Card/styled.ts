import styled from 'styled-components'

import { theme } from 'styles/theme'

export const Author = styled.span`
  color: ${theme.color.text.grey};
  font-size: 0.6rem;
  font-weight: 400;
  margin-left: auto;
`

export const Button = styled.button`
  padding: ${theme.spacing(2)};
`

export const ContentLink = styled.a`
  text-decoration: none;
  width: 100%;
`

export const ContentWrap = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: row;
`

export const Controls = styled.span`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 0;
  top: 0;
`

export const Description = styled.p`
  color: ${theme.color.text.dark};
  display: -webkit-box;
  font-size: 0.7rem;
  font-weight: 400;
  margin: 0;
  max-height: 3.9rem;
  overflow: hidden;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`

export const Footer = styled.footer`
  display: flex;
  flex-direction: row;
`

export const Source = styled.span`
  color: ${theme.color.text.grey};
  font-size: 0.6rem;
  font-weight: 400;
  margin-left: ${theme.spacing(1)};

  &:before {
    content: '•';
    margin-right: ${theme.spacing(1)};
  }
`

export const Time = styled.time`
  color: ${theme.color.text.grey};
  font-size: 0.6rem;
  font-weight: 400;
`

export const Title = styled.strong`
  color: ${theme.color.text.dark};
  display: -webkit-box;
  font-size: 0.9rem;
  line-height: 1.2;
  margin-bottom: ${theme.spacing(2)};
  max-width: calc(100% - ${theme.spacing(5)});
  overflow: hidden;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`

export const Wrap = styled.div`
  background-color: ${theme.color.background.light};
  border-radius: 0.5rem;
  margin-bottom: ${theme.spacing(2)};
  padding: ${theme.spacing(2)};
  position: relative;
`
