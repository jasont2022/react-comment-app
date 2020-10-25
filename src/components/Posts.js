/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react'
import s from 'styled-components'
import Post from './Post'

const Posts = () => {
  const [posts, setPosts] = useState([])

  return (
    <div>
      {posts.map(post => <Post {...post} />)}
    </div>
  )
}

export default Posts
