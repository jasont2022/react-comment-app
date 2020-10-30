/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react'
import s from 'styled-components'
import { Form, Button } from 'react-bootstrap'

const SubmitButton = s(Button)`
  padding: 0.5rem 1rem;
  font-weight: 500;
  margin: 0.2rem 0;

  :hover {
    cursor: not-allowed;
  }
`

const FormWrapper = ({ setField, data }) => {
  const [name, setName] = useState('')
  const [text, setText] = useState('')

  return (
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
      <div style={{ textAlign: 'right', marginBottom: '1rem' }}>
        <div style={{ position: 'relative', width: '100%' }}>
          <SubmitButton
            variant="primary"
            disabled={(name === '' || text === '')}
            onClick={() => {
              setField([...data, { name, text }])
              setName('')
              setText('')
            }}
          >
            Submit
          </SubmitButton>
        </div>
      </div>
    </Form>
  )
}

export default FormWrapper
