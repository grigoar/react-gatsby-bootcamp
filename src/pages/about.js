import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About</h1>
      <p>
        This is a personal blog website. I hope I can bring you some value to
        you
      </p>
      <p>
        <Link to="/contact">
          For more information see where you can find me
        </Link>
      </p>
    </Layout>
  )
}

export default AboutPage
