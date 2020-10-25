/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import s from 'styled-components'
import Header from './Header'
import PostForm from './PostForm'
import Posts from './Posts'

const Container = s.div`
  width 60%;
  box-sizing: border-box;
  margin: 0px auto;
`
const App = () => (
  <Container>
    <Header />
    <PostForm />
  </Container>
)

export default App
