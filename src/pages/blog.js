import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import Layout from "../components/layout"

const BlogPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
                date
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `
  )
  const blogs = data.allMarkdownRemark.edges
  return (
    <Layout>
      <h1>My blog</h1>
      <ol>
        {blogs.map((blog, index) => {
          return (
            <li key={index}>
              <h2>
                <Link to={`/blog/${blog.node.fields.slug}`}>
                  {blog.node.frontmatter.title}
                </Link>
              </h2>
              <p>{blog.node.frontmatter.date}</p>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
