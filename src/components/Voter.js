/* eslint-disable no-plusplus */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react'
import s from 'styled-components'
import { Button } from 'react-bootstrap'

const VoterWrapper = s.div`
  display: flex;
  flex-direction: column;
  width: 24px;
  -webkit-box-align: center;
  align-items: center;
  float: right;
`

const VoterText = s.p`
  display: inline-block;
  font-size: 80%;
  line-height: 1;
  margin-top: 2px;
  margin-bottom: 2px;
  font-weight: bold;
`

const VoterButton = s(Button)`
  padding: 3px;
`

const Voter = () => {
  const [voteCount, setVoteCount] = useState(0)

  return (
    <VoterWrapper>
      <VoterButton
        variant="primary"
        onClick={() => setVoteCount(voteCount + 1)}
      >
        +
      </VoterButton>
      <VoterText>{voteCount}</VoterText>
      <VoterButton
        variant="danger"
        onClick={() => setVoteCount(voteCount - 1)}
      >
        -
      </VoterButton>
    </VoterWrapper>
  )
}

export default Voter
