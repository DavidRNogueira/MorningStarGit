import React from 'react'
import Logo from './MorningStarGarageLogo.jpg'
import {Link} from 'react-router-dom'

const NavBar = () =>{
    return(
        <div className='navbar'>
        <Link to="/"><img className='logo' src={Logo} alt="Logo"/></Link>
                <p className='navbarlinks'>
                <span><a href="tel:+1(602)717-7283">(602) 717-7283</a></span>
                <Link to='/'>Home</Link>
                |
                <Link to='/photos'>Gallery</Link>
                |
                <Link to='/contactus'>Contact Us</Link>
                |
                <Link to='/getquote'>Get Quote</Link>
                </p>
        </div>
    )
}
export default NavBar