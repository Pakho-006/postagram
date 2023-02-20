// Post.js

import React, { useState, useEffect } from 'react'
import { css } from '@emotion/css';
import { useParams } from 'react-router-dom';
import { API, Storage } from 'aws-amplify';
import { getPost } from './graphql/queries';
import { Badge, useTheme } from '@aws-amplify/ui-react';

export default function Post() {
  const [loading, updateLoading] = useState(true);
  const [post, updatePost] = useState(null);
  const { id } = useParams();
  const { tokens } = useTheme();
  useEffect(() => {
    fetchPost()
  }, [])
  async function fetchPost() {
    try {
      const postData = await API.graphql({
        query: getPost, variables: { id }
      });
      const currentPost = postData.data.getPost
      const image = await Storage.get(currentPost.image);

      currentPost.image = image;
      updatePost(currentPost);
      updateLoading(false);
    } catch (err) {
      console.log('error: ', err)
    }
  }
  if (loading) return <h3>Loading...</h3>
  console.log('post: ', post)
  return (
    <>
      <Badge variation="info">{post.name}</Badge>
      <Badge variation="error">{post.location}</Badge>
      <Badge variation="warning">{post.description}</Badge>
      {/* <Badge variation="success">Success</Badge> */}
      {/* <h1 className={titleStyle}>Title: {post.name}</h1>
      <h3 className={locationStyle}>Location: {post.location}</h3>
      <p>Description:{post.description}</p> */}
      <img alt="post" src={post.image} className={imageStyle} />
    </>
  )
}

const titleStyle = css`
  margin-bottom: 7px;
`

const locationStyle = css`
  color: #0070f3;
  margin: 0;
`

const imageStyle = css`
  max-width: 500px;
  margin-top:15px;
  @media (max-width: 500px) {
    width: 100%;
  }
`
