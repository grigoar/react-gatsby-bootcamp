import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <p>email:grigore.nath@yahoo.com</p>
      <p>tel: 0324324923847</p>
      <p>
        github:{" "}
        <a href="https://github.com/grigoar" target="_blank">
          grigoar
        </a>
      </p>
    </Layout>
  )
}

export default ContactPage
