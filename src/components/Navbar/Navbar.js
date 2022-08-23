import React from 'react'
import "./Navbar.css"
import Logo from "../../assests/image/Logo.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='container-fluid navbar-wrapper'>
      <div className='container navbar-section'>
        <div className='row'>
          <div className='col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 brand-log-column'>
            <div>
              <img src={Logo} alt="" />
            </div>
          </div>
          <div className='col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 menu_item_column'>
            <div>
            <Link to="/" >Home</Link>
           
            </div>
          
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar