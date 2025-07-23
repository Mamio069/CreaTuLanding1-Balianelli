import React from 'react'
import CartWidget from './CartWidget'
import logo from "../assets/images/logo.png"

export default function NavBar() {
  return (
     <>
  <nav className="navbar navbar-expand-md custom-navbar">
      <div className="container-fluid justify-content-between align-items-center">
        <a href="/" className="navbar-brand d-flex align-items-center">
          <img src={logo} alt="Logo" width="125" height="85" className="me-2" />
          <h1 className="brand-text">VENICE IND.</h1>
        </a>
<br />

        <div className="d-flex gap-4 menu-links">
          <a href="CreaTuLanding1-Balianelli/remeras" className="nav-link-custom">Remeras</a>
          <a href="CreaTuLanding1-Balianelli/pantalones" className="nav-link-custom">Pantalones</a>
          <a href="CreaTuLanding1-Balianelli/camperas" className="nav-link-custom">Camperas</a>
          <a href="CreaTuLanding1-Balianelli/zapatillas" className="nav-link-custom">Zapatillas</a>
        </div>
<br />
        
      </div>
    </nav>
      <div className="cart-footer">
        <CartWidget />
      </div>
       </>
  )
}
