import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import Card from "../components/Card"
import Button from "../components/Button"

export default ({ data }) => {
    console.log(data)
    return (
      <Layout>
        <div  css={css`
      display: grid;
      grid-template-columns: repeat(2, 1fr); 
      `}>
        <div css={css`
                  justify-content: center;
                  display:flex;
                  

                `}
                
                ><iframe css={css`
                border-radius: 25px;
                
              `}src="https://giphy.com/embed/jxODdkVOIGFgc" width="340" height="630" title="panda" frameBorder="0" allowFullScreen></iframe></div>
        <div>
          <h1
            css={css`
              display: inline-block;
            `}
          >
            Amazing Pandas Eating Things
          </h1>
          <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            
            <div key={node.id}>
            <Link 
            to={node.fields.slug}
            css={css`
            text-decoration: none;
            color: inherit;
            `}
            >
              <Card>
              <h3
                css={css`
                  margin-bottom: ${rhythm(1 / 4)};
                `}
              >
                {node.frontmatter.title}{" "}
                <span
                  css={css`
                    color: #bbb;
                  `}
                >
                  — {node.frontmatter.date}
                </span>
              </h3>
              <p>{node.excerpt}</p>
              </Card>
              </Link>
              &nbsp;
            </div>
          ))}
          <Link to="/blogposts"><Button></Button></Link>
          &nbsp;
        </div>
        </div>
      </Layout>
    )
  }

  export const query = graphql `
  query {
  allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, limit: 3) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
          date(formatString: "DD MMMM, YYYY")
        }
        fields {
          slug
        }
        excerpt
      }
    }
  }
}

  `