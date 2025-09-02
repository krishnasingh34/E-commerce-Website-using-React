import React, { createContext, useState, useEffect } from 'react'
import all_product from '../assets/all_product'
import { toast } from 'react-toastify'
import axios from 'axios'

export const ShopContext = createContext()

function getDefaultCart() {
    let cart = {}
    for (let item of all_product) {
        cart[item.id] = 0
    }
    return cart
}
function getInitialCart() {
    let savedCart = localStorage.getItem("cartItems")
    if (savedCart) {
        return JSON.parse(savedCart)
    }
    else {
        return getDefaultCart()
    }
}
function getInitialTotalItems() {
    let savedTotal = localStorage.getItem("totalCartItems")
    if (savedTotal) {
        return JSON.parse(savedTotal)
    }
    else {
        return 0
    }
}

const ShopContextProvider = (props) => {
    const token = localStorage.getItem('auth-token')

    const [cartItems, setCartItems] = useState(getInitialCart)
    const [totalCartItems, setTotalCartItems] = useState(getInitialTotalItems)

    useEffect(() => {
        if (token) {
            axios.post(`${import.meta.env.VITE_BACKEND_API_URL}/getCartdata`, {}, {
                headers: {
                    'auth-token': token
                }
            })
                .then(res => setCartItems(res.data))
                .catch(err => console.log(err))
        }
        else {
            setCartItems(getDefaultCart())
            setTotalCartItems(0)
            localStorage.removeItem('cartItems')
            localStorage.removeItem('totalCartItems')
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems))
        let total = 0
        for (let key in cartItems) {
            total += cartItems[key]
        }
        setTotalCartItems(total)
    }, [cartItems])

    useEffect(() => {
        localStorage.setItem("totalCartItems", JSON.stringify(totalCartItems))
    }, [totalCartItems])

    const addToCart = (itemId) => {
        setCartItems(prev => ({
            ...prev, [itemId]: prev[itemId] + 1
        }))
        if (token) {
            axios.post(`${import.meta.env.VITE_BACKEND_API_URL}/addToCart`, {
                itemId
            },
                {
                    headers: {
                        'auth-token': token
                    }
                })
        }
        toast.success('Item added to cart !')
    }

    const deleteFromCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev, [itemId]: 0
        }))
        setTotalCartItems(prev => prev - 1)
        if (token) {
            axios.post(`${import.meta.env.VITE_BACKEND_API_URL}/clearFromCart`, {
                itemId
            },
                {
                    headers: {
                        'auth-token': token
                    }
                })
        }
        toast.success('Item removed from cart')
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0
        for (let item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find(product => product.id == Number(item))
                totalAmount += itemInfo.new_price * cartItems[item]
            }
        }
        return totalAmount
    }
    return (
        <div>
            <ShopContext.Provider value={{ all_product, cartItems, setCartItems, addToCart, deleteFromCart, getTotalCartAmount, totalCartItems, setTotalCartItems }}>
                {props.children}
            </ShopContext.Provider>
        </div>
    )
}

export default ShopContextProvider
