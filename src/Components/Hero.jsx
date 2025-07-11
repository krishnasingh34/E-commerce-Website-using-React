import React from 'react'
import '../CSS/hero.css'
import hand_icon from '../assets/hand_icon.png'
import arrow_icon from '../assets/arrow_icon.png'
import men from '../assets/men.webp'
import girl from '../assets/p8.webp'

const Hero = () => {  
    return (
        <div className='hero'>
            <div className="hero-left">
                <h2>Best Deals !  Best Prices !</h2>
                <div className="hero-hand-icon">
                    <p>New</p>
                    <img src={hand_icon} alt="handIcon" height='60px'/>
                </div>
                <p>collections</p>
                <p>for everyone</p>
                <a href='#new-collections' className="hero-latest-btn">
                    <div>New collections</div>
                    <img src={arrow_icon} alt="arrowIcon" height='30px'/>
                </a>
            </div>
            <div className="hero-right">
                <img src={men} alt="men" height='400px' />
                <img src={girl} alt="girl" height='400px' />
            </div>
        </div>
    )
}

export default Hero