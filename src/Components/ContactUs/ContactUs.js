import React from 'react'
import Contactuspic from "./ContactUs.png"

const ContactUs = () =>{
    return(
        <div className='contactus'>
            <h2 className="contactusheader">Let's get it started!</h2>
            <img src={Contactuspic} alt="Phone&Email" className="contactusimg"/>   
            <p className='contactusinfo'><a id='contactuslink2' href="tel:+(602)717-7283">(602) 717-7283</a> {"\n"} <a href="mailto:morningstargaragedoors@gmail.com" id='contactuslink'>morningstargaragedoors@gmail.com</a></p>
        
        </div>
    )
}
export default ContactUs