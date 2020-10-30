/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import s from 'styled-components'
import Form from './Form'

const FormContainer = s.div`
  padding: 1rem;
  padding-bottom: 0;
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 2rem;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 18px;
`

const Title = s.h3`
  font-family: "Comic Sans MS", cursive, sans-serif;
  font-weight: 700;
  line-height: 1.1;
  padding: 0;
  margin: 0 0 1rem;
`

const CommentForm = ({ setComments, comments }) => (
  <FormContainer>
    <Title>New Comment 🎉</Title>
    <Form setField={setComments} data={comments} />
  </FormContainer>
)

export default CommentForm
