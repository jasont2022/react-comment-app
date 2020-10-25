/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react'
import s from 'styled-components'
import { Form, Button } from 'react-bootstrap'

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

const SubmitButton = s(Button)`
  padding: 0.5rem 1rem;
  font-weight: 500;
  margin: 0.2rem 0;
`

// make sure to disable the button
const FormWrapper = () => {
  const [name, setName] = useState('')
  const [text, setText] = useState('')

  return (
    <FormContainer>
      <Title>New Post</Title>
      <Form>
        <Form.Group controlId="formBasicName">
          <Form.Control
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicDescription">
          <Form.Control
            as="textarea"
            placeholder="Write a new post"
            value={text}
            onChange={e => setText(e.target.value)}
          />
        </Form.Group>
        <div style={{ textAlign: 'right' }}>
          <div style={{ position: 'relative', width: '100%' }}>
            <SubmitButton
              variant="primary"
              disabled={(name === '' || text === '')}
            >
              Submit
            </SubmitButton>
          </div>
        </div>
      </Form>
    </FormContainer>
  )
}

export default FormWrapper
