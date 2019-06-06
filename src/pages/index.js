import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Welcome from "../components/welcome"

import './i18n';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`video-editor`, `carolina martinez`, `portfolio`, `personal website`]} />
    <Welcome />
  </Layout>
)

export default IndexPage
