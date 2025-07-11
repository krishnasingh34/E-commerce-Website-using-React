import React, { useContext } from 'react'
import '../CSS/productDisplay.css'
import breadcrum_arrow from "../assets/breadcrum_arrow.png"
import star_icon from "../assets/star_icon.png"
import star_dull_icon from "../assets/star_dull_icon.png";
import { ShopContext } from '../Context/ShopContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ProductDisplay = (props) => {
    const { addToCart, totalCartItems, setTotalCartItems } = useContext(ShopContext)
    const navigate = useNavigate()
    return (
        <div>
            <div className="bredcrum-design">
                <p onClick={() => { navigate('/') }}>Home</p> <img src={breadcrum_arrow} alt="" height='10px' />
                <p onClick={() => { navigate(`/${props.product.category}`) }}>{props.product.category}</p> <img src={breadcrum_arrow} alt="" height='10px' />
                <p>{props.product.name}</p>
            </div>
            <div className="productdisplay">
                <div className="productdisplay-left">
                    <div className="productdisplay-img-list">
                        <img src={props.product.image} alt="" />
                        <img src={props.product.image} alt="" />
                        <img src={props.product.image} alt="" />
                    </div>
                    <div className='productdisplay-img-main'>
                        <img src={props.product.image} alt="" />
                    </div>
                </div>
                <div className="productdisplay-right">
                    <h1>{props.product.name}</h1>
                    <div className="productdisplay-right-star">
                        <img src={star_icon} alt="" height="20px" />
                        <img src={star_icon} alt="" height="20px" />
                        <img src={star_icon} alt="" height="20px" />
                        <img src={star_icon} alt="" height="20px" />
                        <img src={star_dull_icon} alt="" height="20px" />
                        <p>(Rated by 150 people)</p>
                    </div>
                    <div className="productdisplay-right-prices">
                        <div className="productdisplay-right-price-old">
                            ${props.product.old_price}
                        </div>
                        <div className="productdisplay-right-price-new">
                            ${props.product.new_price}
                        </div>
                    </div>
                    <div className="productdisplay-right-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, eaque. Amet reiciendis minus modi eum soluta hic autem, rem corrupti quibusdam? Quam omnis saepe et expedita ratione, quasi unde repudiandae. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore nisi cum maiores deleniti qui. Omnis optio praesentium ullam. Incidunt, aut. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil neque odit accusamus, doloribus fugit doloremque itaque et est, labore vel temporibus quasi dolorum facere iure, veniam quaerat laboriosam mollitia reprehenderit.
                    </div>
                    <button onClick={() => {
                        if (localStorage.getItem('auth-token')) {
                            addToCart(props.product.id)
                            setTotalCartItems(totalCartItems + 1)
                        }
                        else{
                            toast.error('You must be logged in to add items')
                        }
                    }}>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductDisplay