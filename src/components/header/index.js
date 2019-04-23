import { Link } from "gatsby"
import React from "react"

const Header = () =>
  <header className="nav-bar">
    <div className="nav-bar__photo" />
    <div className="nav-bar__name">Carolina Martinez</div>
    <div className="nav-bar__title">Freelance video editor</div>
    <div>
      <Link to="/" className='nav-bar__element'>Welcome</Link>
      <Link to="/about" className='nav-bar__element'>About</Link>
      <Link to="/portfolio" className='nav-bar__element'>Portfolio</Link>
      <Link to="/contact" className='nav-bar__element'>Contact</Link>
    </div>
  </header>

export default Header
