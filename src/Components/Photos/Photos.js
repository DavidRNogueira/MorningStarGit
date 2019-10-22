import React from 'react'
import Images from "./images/images.js"
import Gallery from 'react-photo-gallery'


const Photos = () =>{

    
    
    return(
        <div className="photoscomp">
            <h1 className="galleryheader">Gallery</h1>
            <hr className="galleryhr"/>
            <h4 className='gallerytext'>Check out what we can do for you.</h4>
            <div>
            <Gallery photos={Images} />
            </div>
            
        </div>
        
    )
}

export default Photos
