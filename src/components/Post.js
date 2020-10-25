/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import s from 'styled-components'
import Reply from './Reply'
import Voter from './Voter'

const Post = ({ name, text }) => (
  <div>
    <p>{name}</p>
    <p>{text}</p>
  </div>
)

export default Post
