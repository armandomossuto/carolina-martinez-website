import { Link } from "gatsby"
import React from "react"
import i18n from '../../pages/i18n';

const Header = () => {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  return(
    <header className="nav-bar">
      <div className="nav-bar__languages">
        <span onClick={() => changeLanguage('en')}>EN</span>
        <span onClick={() => changeLanguage('pt')}>PT</span>
        <span onClick={() => changeLanguage('es')}>ES</span>
      </div>
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
  )
}

export default Header;
