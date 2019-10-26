import React from 'react'
import Logo from './MorningStarGarageLogo.jpg'
import {Link} from 'react-router-dom'

const NavBar = () =>{
    return(
        <nav className='navbar'>
            <div className='navbarleft'>
                <Link to="/">
                    <img className='logo' src={Logo} alt="Logo"/>
                </Link>
                <a class='navbarleft--tel' href="tel:+1(602)717-7283">(602) 717-7283</a>
            </div>
            <div className='navbarright'>
                <Link to='/'>Home</Link>
                |
                <Link to='/photos'>Gallery</Link>
                |
                <Link to='/contactus'>Contact Us</Link>
                |
                <Link to='/getquote'>Get Quote</Link>
            </div>
        </nav>
    )
}
export default NavBar