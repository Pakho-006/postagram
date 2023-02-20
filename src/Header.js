import React from 'react';
import { css } from '@emotion/css';
import { Link } from 'react-router-dom';
import { Heading } from '@aws-amplify/ui-react';

export default function Header() {
  return (
    <div className={headerContainer}>
      <Heading className={headingStyle}>School Gallery</Heading>
      {/* <h1 className={headerStyle}>School Gallery</h1> */}
      <Link to="/" className={linkStyle}>All Posts</Link>
      <Link to="/myposts" className={linkStyle}>My Posts</Link>
    </div>
  )
}

const headerContainer = css`
  padding-top: 5px;
`

const headingStyle = css`
  padding-bottom: 15px;
  font-size: 2rem;
  font-weight: bold;
`

const headerStyle = css`
  font-size: 40px;
  margin-top: 0px;
`

const linkStyle = css`
  color: black;
  font-weight: bold;
  text-decoration: none;
  margin-right: 10px;
  \:hover {
    color: #058aff;
  }
`
