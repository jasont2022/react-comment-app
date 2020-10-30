/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react'
import s from 'styled-components'
import Voter from './Voter'

const CommentWrapper = s.div`
  padding: 1rem;
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 0px;
  margin-top: 0.4rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 8px;
`

const ReplyWrapper = s.div`
  padding-left: 0.8rem;
  margin-top: 0.4rem;
  border-left: 2px solid rgba(0, 0, 0, 0.1);
`

// const MAX_DEPTH = 3 // the max depth of the replies

const Comment = ({ name, text }) => (
  // const [isReplying, setIsReplying] = useState(false)
  // const [replies, setReplies] = useState([])

  // on line 31
  // use map function
  // have a reply button
  // if isReply render the form

  /*
  const content = (
    <>
      <Voter />
      <p>{name}</p>
      <p>{text}</p>
      {depth < MAX_DEPTH && (
        replies.map(reply => <Comment key={reply.text} {...reply} depth={depth + 1} />)
      )}
      {depth !== MAX_DEPTH ? (
        <>
        </>
      ) : <> </>}
    </>
  )
  */

  /*
  if (depth === 1) {
    return (
      <CommentWrapper>{ content }</CommentWrapper>
    )
  }

  return (
    <ReplyWrapper>{ content }</ReplyWrapper>
  )
  */

  <CommentWrapper>
    <Voter />
    <p>{name}</p>
    <p>{text}</p>
  </CommentWrapper>
)

export default Comment
