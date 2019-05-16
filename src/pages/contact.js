import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Contact from '../components/contact/index';

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" keywords={[`contact carolina martinez`]} />
    <Contact />
  </Layout>
)

export default ContactPage
