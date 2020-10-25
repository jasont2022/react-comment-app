/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react'
import s from 'styled-components'

const Voter = () => {
  const [voteCount, setVoteCount] = useState(0)

  return (
    <div>
      <p>{voteCount}</p>
    </div>
  )
}

export default Voter
