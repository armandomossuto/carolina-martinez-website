import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/about"

const AboutPage = () => (
  <Layout>
    <SEO title="About" keywords={[`about carolina martinez`]} />
    <About />
  </Layout>
)

export default AboutPage
