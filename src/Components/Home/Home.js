import React from 'react'
import Stars from "./5stars.png"
import Ruth from "./RuthEliana.jpg"
import Linda from "./Linda.jpg"
import Kevin from "./Kevin.jpg"
import Paul from "./Paul.jpg"
import Norman from "./Norman.jpg"
import Richard from "./Richard.jpg"
import Family from "./Family.jpg"
import LongRaised from "./LongRaised.jpg"
import ShortRaised from "./ShortRaised.jpg"
import Flush from "./Flush.jpg"
import BBB from "./BBB.png"
import {Link} from 'react-router-dom'




const Home = () =>{
    return(
        <div className="Home">
            <div className='bannerpic'>
                <h1 className="bannertext">Customers satisfied.{"\n"}Everytime.</h1>
                <div className="bannerbtn butn"><Link to="/contactus">Get Started</Link> </div>   
            </div>

            <div className="products">
                <h5 className="productsheader">Tons of doors to pick from.</h5>
                <img className="longraised" src={LongRaised} alt="Long Raised"/>
                <img className="shortraised" src={ShortRaised} alt="Short Raised"/>
                <img className="flush" src={Flush} alt="Flush"/>
                <p className="flushtext">Flush Modern View</p>
                <p className="shortraisedtext">Short Raised</p>
                <p className="longraisedtext">Long Raised</p>

            </div>


            <hr className="homehr"/>






            
            <div className="reviews">
                <h2>See what our customers have to say.</h2>


                <div className="reviewleft">
                    <h4><img src={Ruth} alt="Ruth" className="reviewimages"/>Ruth Eliana Guerrero <img className="stars" src={Stars} alt="5 Stars"/></h4>
                    <p id="reviewtext">Very nice and professional. I got an amazing price and deal. Dominik got the job done in a short amount of time. I kept putting off fixing the door because I thought it was gonna be a hassle but everything went smoothly. [...]</p> 
                </div>
                <div className="reviewright">
                    <h4><img src={Linda} alt="Linda" className="reviewimages"/>Linda Martin <img className="stars" src={Stars} alt="5 Stars"/></h4>
                    <p id="reviewtext">Showed up and did a great job fixing my garage door. Did not charge a weekendcharge. Polite professional. Great price. 5 star service.</p> 
                </div>


                
                    <div className="review3">
                        <h4><img src={Kevin} alt="Kevin" className="reviewimages"/>Kevin Dodson <img className="stars" src={Stars} alt="5 Stars"/></h4>
                        <p id="reviewtext">This was a great experience. Great service, great quality work and very budget friendly. I would definitely do work with this company again!</p> 
                    </div>
                    <div className="review4">
                        <h4><img src={Paul} alt="Paul" className="reviewimages"/>Paul Battaglia <img className="stars" src={Stars} alt="5 Stars"/></h4>
                        <p id="reviewtext">This business is of the highest level of quality and integrity possible. If you want the job done right, call Morning Star Garages.</p> 
                    </div>
                
                

            
                <div className="review5">
                        <h4><img src={Norman} alt="Norman" className="reviewimages"/>Norman Yee <img className="stars" src={Stars} alt="5 Stars"/></h4>
                        <p id="reviewtext">Fast, prompt repair and scheduling - reasonable prices!!!</p> 
                    </div>
                    <div className="review6">
                        <h4><img src={Richard} alt="Richard" className="reviewimages"/>Richard Luttrull <img className="stars" src={Stars} alt="5 Stars"/></h4>
                        <p id="reviewtext">Very professional service and great prices thank u Dominik for the nice garage door install will be referring all my friends thanks again 5 star service</p> 
                </div>
            </div>
            <hr className="homehr"/>

            <div className="aboutus">
            <h3 className="aboutusheader">About Us</h3>
            <img className="aboutusimg" src={Family} alt="Family"/>
            <p className="aboutustext">Hi, I’m Dominik and my wife Karen and I make up Arizona's Christian, family owned and operated garage door company. We work with integrity and strive to give our customers a best possible experience every time. We’re honest about what you need, we’ll be there when you need us and our prices are always fair. I stand behind my work, I have been in the industry for nearly three years now and I’ve yet to receive a negative review. Choosing a new garage door for your home can be huge decision and I want you to love the end result, that’s why I always encourage my customers to ask questions, voice their opinions and I never practice pushy sales tactics. The garage door is the focal point of most homes and with that being said I offer a multitude of door styles from many manufacturers so together I’m sure we can find what you’re looking for. Give us a call, you won’t be disappointed.</p>
            </div> 

            <div className="footer">
                <p className="footertext">Morning Star Garage Doors © 2019. All Rights Reserved.</p>
                <img className="footerimg" src={BBB} alt="BBB"/>
            </div>
            
        </div>
       
        
    )
}

export default Home

