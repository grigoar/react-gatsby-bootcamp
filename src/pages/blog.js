import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import Layout from "../components/layout"
import * as blogStyles from "./blog.module.scss"

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
      <ol className={blogStyles.posts}>
        {blogs.map((blog, index) => {
          return (
            <li className={blogStyles.post} key={index}>
              <Link to={`/blog/${blog.node.fields.slug}`}>
                <h2>{blog.node.frontmatter.title}</h2>
                <p>{blog.node.frontmatter.date}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
