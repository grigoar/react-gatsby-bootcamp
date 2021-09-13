import React from "react"
import { Link } from "gatsby"

import Footer from "../components/footer"
import Header from "../components/header"

const AboutPage = () => {
  return (
    <div>
      <Header />
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
      <Footer></Footer>
    </div>
  )
}

export default AboutPage
