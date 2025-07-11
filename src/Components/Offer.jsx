import React from 'react'
import '../CSS/offer.css'
import exclusive from "../assets/exclusive_image.png"

const Offer = () => {
    return (
        <div className='offers'>
            <div className="offers-left"> 
                <h1>Exclusive</h1>
                <h1>offers for you !</h1>
                <p>ONLY ON BEST SELLERS PRODUCTS</p>
                <p className='tc-apply'>*T&C apply</p>
            </div>
            <div className="offers-right">
                <img src={exclusive} alt="" height='350px' />
            </div>
        </div>
    )
}

export default Offer