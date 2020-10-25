/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import s from 'styled-components'
import Form from './Form'

const FormContainer = s.div`
  padding: 1rem;
  padding-bottom: 0;
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 1.6rem;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 18px;
`

const Title = s.h3`
  font-family: "Comic Sans MS", cursive, sans-serif;
  font-weight: 700;
  line-height: 1.1;
  padding: 0;
  margin: 0 0 1.45rem;
`

const PostForm = () => (
  <FormContainer>
    <Title>New Post</Title>
    <Form />
  </FormContainer>
)

export default PostForm
