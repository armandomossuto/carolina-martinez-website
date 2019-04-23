import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`video-editor`, `carolina martinez`, `portfolio`, `personal website`]} />
    <h1>Welcome</h1>
  </Layout>
)

export default IndexPage
