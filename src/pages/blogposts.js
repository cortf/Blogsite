import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import Card from "../components/Card"

export default ({ data }) => {
    console.log(data)
    return (
      <Layout style={{
          
      }}>
        <div
          css={css`
         display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
          `}>
      
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
        </div>
      </Layout>
    )
  }

  export const query = graphql `
  query {
  allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
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