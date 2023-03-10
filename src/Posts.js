// Posts.js

import React from 'react'
import { css } from '@emotion/css';
import { Link } from 'react-router-dom';
import { Badge } from '@aws-amplify/ui-react';

export default function Posts({
  posts = []
}) {
  return (
    <>
      <h1>Posts</h1>
      {
        posts.map(post => (
          <Link to={`/post/${post.id}`} className={linkStyle} key={post.id}>
            <div key={post.id} className={postContainer}>
              <h1 className={postTitleStyle}>{post.name}</h1>
              <img alt="post" className={imageStyle} src={post.image} />
              {/* <Badge variation="info">{post.name}</Badge> */}
              <Badge variation="error">{post.location}</Badge>
              <Badge variation="warning">{post.description}</Badge>
            </div>
          </Link>
        ))
      }
    </>
  )
}

const postTitleStyle = css`
  margin: 15px 0px;
  color: #0070f3;
`

const linkStyle = css`
  text-decoration: none;
`

const postContainer = css`
  border-radius: 10px;
  padding: 1px 20px;
  border: 1px solid #ddd;
  margin-bottom: 20px;
  \:hover {
    border-color: #0070f3;
  }
`

const imageStyle = css`
  width: 100%;
  max-width: 400px;
`
