/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react'
import s from 'styled-components'
import Header from './Header'
import CommentForm from './CommentForm'
import Comments from './Comments'

const Container = s.div`
  width 60%;
  box-sizing: border-box;
  padding-bottom: 2.5rem;
  margin: 0px auto;
`
const App = () => {
  const [comments, setComments] = useState([])

  return (
    <Container>
      <Header />
      <CommentForm setComments={setComments} comments={comments} />
      <Comments comments={comments} />
    </Container>
  )
}

export default App
