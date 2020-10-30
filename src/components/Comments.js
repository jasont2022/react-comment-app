/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import Comment from './Comment'

const Comments = ({ comments }) => (
  <div>
    {comments.map(comment => <Comment key={comment.text} {...comment} />)}
  </div>
)

export default Comments
