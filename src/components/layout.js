import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"
import Header from "../components/Header"

import { rhythm } from "../utils/typography"
export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div
 
      css={css`
        margin: 0 auto;
        max-width: 1200px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
    >
    <Header>
      <Link to={`/`}>
        <h3
          css={css`

            /* margin-bottom: ${rhythm(2)}; */
            display: inline-block;
            font-style: normal;
          `}
        >
          {data.site.siteMetadata.title}
        </h3>
      </Link>
      <Link
        to={`/about/`}
        css={css`
          float: right;
          color: black;
        `}
      >
        About
      </Link>
      </Header>
      {children}
    </div>
  )
}