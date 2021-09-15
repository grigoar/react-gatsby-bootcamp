import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>

      <p>
        Website:
        <a href="https://www.grigorenath.com/" target="_blank">
          My Website ⭐ grigorenath.com
        </a>
      </p>
      <p>
        Github:{" "}
        <a href="https://github.com/grigoar" target="_blank">
          grigoar
        </a>
      </p>
      <p>
        LinkedIn:
        <a
          href="https://www.linkedin.com/in/grigore-nath-31bba115a/"
          target="_blank"
        >
          Linkedin profile
        </a>
      </p>
    </Layout>
  )
}

export default ContactPage
