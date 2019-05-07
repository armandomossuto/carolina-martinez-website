import React from "react"
import linkedinLogo from "../../images/linkedin.png"
import youtubeLogo from "../../images/youtube.png"

const Footer = () =>
  <footer className="footer">
    <span className="footer__date">
      {new Date().toDateString()} Lisbon, Pt
    </span>
    <span className="footer__logos">
      <a href="/#"><img src={linkedinLogo} alt="Linkdin Logo"></img></a>
      <a href="/#"><img  src={youtubeLogo} alt="Youtube Logo"></img></a>
    </span>
  </footer>

export default Footer
