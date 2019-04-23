/**
 * Website Layout
 */

import React from "react"
import PropTypes from "prop-types"

// Components
import Header from "./header/index"
import Footer from "./footer/index"

// Main style entry point
import "../style/app.scss"

const Layout = ({ children }) =>
      <>
        <Header />
        <main>{children}</main>
        <Footer />
      </>

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
