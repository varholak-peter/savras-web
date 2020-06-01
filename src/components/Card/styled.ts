import styled from 'styled-components'

export const Author = styled.span`
  color: #666666;
  font-size: 0.6rem;
  font-weight: 400;
  margin-left: auto;
`

export const Button = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 0.5rem 0.4rem;
  position: absolute;
  right: 0;
  top: 0;
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

export const Description = styled.p`
  color: #333333;
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
  color: #666666;
  font-size: 0.6rem;
  font-weight: 400;
  margin-left: 0.2rem;

  &:before {
    content: '•';
    margin-right: 0.2rem;
  }
`

export const Time = styled.time`
  color: #666666;
  font-size: 0.6rem;
  font-weight: 400;
`

export const Title = styled.strong`
  color: black;
  display: -webkit-box;
  font-size: 0.9rem;
  line-height: 1.2;
  margin-bottom: 0.4rem;
  max-width: calc(100% - 1.25rem);
  overflow: hidden;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`

export const Wrap = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  position: relative;
`
