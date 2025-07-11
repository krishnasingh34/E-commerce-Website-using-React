import React, { useContext } from 'react'
import axios from 'axios'
import '../CSS/cart.css'
import { ShopContext } from '../Context/ShopContext'
import remove_icon from "../assets/remove.webp"
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const navigate = useNavigate()
  const token = localStorage.getItem('auth-token')
  const { all_product, cartItems, setCartItems, deleteFromCart, getTotalCartAmount } = useContext(ShopContext)

  return (
    <div>
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {
        all_product.map(e => {
          if (cartItems[e.id] > 0) {
            return (
              <div>
                <div className='cartitems-format-main'>
                  <img src={e.image} alt="" height="120px" width='90px' onClick={() => { navigate(`/product/${e.id}`) }} />
                  <p>{e.name}</p>
                  <p>${e.new_price}</p>
                  <div className="cartitems-quantity">
                    <button onClick={() => {
                      if (cartItems[e.id] > 1) {
                        setCartItems(prev => ({
                          ...prev, [e.id]: prev[e.id] - 1
                        }))
                        if (token) {
                          axios.post('http://localhost:4000/removeFromCart', {
                            itemId: e.id
                          },
                            {
                              headers: {
                                'auth-token': token
                              }
                            })
                        }
                      }
                      else {
                        setCartItems(prev => ({
                          ...prev, [e.id]: 0
                        }))
                        if (token) {
                          axios.post('http://localhost:4000/clearFromCart', {
                            itemId: e.id
                          },
                            {
                              headers: {
                                'auth-token': token
                              }
                            })
                        }
                        toast.success("Item removed from cart")
                      }
                    }} style={{ cursor: 'pointer' }}>-</button>
                    <button>{cartItems[e.id]}</button>
                    <button onClick={() => {
                      setCartItems(prev => ({
                        ...prev, [e.id]: prev[e.id] + 1
                      }))
                      if (token) {
                          axios.post('http://localhost:4000/addToCart', {
                            itemId: e.id
                          }, 
                          {
                            headers: {
                              'auth-token': token
                            }
                          })
                        }
                    }} style={{ cursor: 'pointer' }}>+</button>
                  </div>
                  <p>{e.new_price * cartItems[e.id]}</p>
                  <img className='cartitems-remove-icon' src={remove_icon} alt="" onClick={() => deleteFromCart(e.id)} height="20px" />
                </div>
                <hr />
              </div>
            )
          }
          return null
        })
      }
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Total</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Total</p>
              <p>${getTotalCartAmount()}</p>
            </div>
          </div>
          <button>Proceed to checkout</button>
        </div>
      </div>
    </div>
  )
}

export default Cart