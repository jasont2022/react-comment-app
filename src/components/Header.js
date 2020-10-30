/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import s from 'styled-components'

const HeaderWrapper = s.header`
  margin-bottom: 2rem;
  margin-top: 3rem;
  padding: 0;
`

const Title = s.h1`
  text-align: center;
  font-family: "Comic Sans MS", cursive, sans-serif;
  font-size: 2.75rem;
  font-weight: 700;
  line-height: 1.1;
`

const Header = () => (
  <HeaderWrapper>
    <Title>🥳 React Comment App 🥳 </Title>
  </HeaderWrapper>
)

export default Header
