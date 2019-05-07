import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Portfolio from "../components/portfolio"

const PortfolioPage = () => (
  <Layout>
    <SEO title="Portfolio" keywords={[`portfolio carolina martinez`, `portfolio video-edito`, `portfolio`]} />
    <Portfolio />
  </Layout>
)

export default PortfolioPage
