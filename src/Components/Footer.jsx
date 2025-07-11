import React from 'react'
import '../CSS/footer.css'
import logo from '../assets/logo.png'
import { FaMobileAlt, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaLocationDot, FaXTwitter } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate()
    return (
        <div className='footer'>
            <div className="footer-logo">
                <img src={logo} alt="" height='50px' />
                <p>Shopper</p>
            </div>
            <div className="footer-content">
                <div className="col">
                    <div className="title">About Us</div>
                    <div className="text">
                        <p>Shopper is one-stop destination for trending styles, fashion and unbeatable deals. We make shopping simple, fun, and reliable with fast delivery, secure payments, and 24/7 support.</p>
                        <p>Your style ! Your store ! Your Shopper !</p>
                    </div>
                </div>
                <div className="quick-links">
                    <div className="title">Quick Links</div>
                    <ul>
                        <li onClick={() => navigate('/')}>Home</li>
                        <li onClick={() => navigate('/men')}>Men</li>
                        <li onClick={() => navigate('/women')}>Women</li>
                        <li onClick={() => navigate('/kids')}>Kids</li>
                        <li onClick={() => navigate('/cart')}>My Cart</li>
                        <li onClick={() => navigate('/login')}>Login</li>
                    </ul>
                </div>
                <div className="col">
                    <div className="title">Contact Us</div>
                    <div className="c-item">
                        <FaLocationDot />
                        <div className="text">
                            <p>Shopper Pvt. Ltd.,</p>
                            <p>Building No. 402, Maple Heights Complex,</p>
                            <p>Sector 47, Gurgaon, Haryana – 122018, India</p>
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">+91 98765 43210</div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">support@shopper.com</div>
                    </div>
                </div>
            </div>
            <div className="social-icons">
                <div className="title">Follow Us</div>
                <div className="icons-row">
                    <a href='https://www.facebook.com' target='_blank' className="icon facebook"><FaFacebookF size={15} /></a>
                    <a href='https://www.instagram.com' target='_blank' className="icon instagram"><FaInstagram size={15} /></a>
                    <a href='https://www.twitter.com' target='_blank' className="icon twitter"><FaXTwitter size={15} /></a>
                    <a href='https://www.linkedin.com' target='_blank' className="icon linkedin"><FaLinkedinIn size={15} /></a>
                </div>
            </div>

            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <hr />
                    <div className="text">© 2025 Shopper. All rights reserved.</div>
                </div>
            </div>
        </div>
    )
}

export default Footer
