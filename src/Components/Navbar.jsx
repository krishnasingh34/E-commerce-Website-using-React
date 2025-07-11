import React, { useContext, useEffect, useState } from 'react'
import '../CSS/navbar.css'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'
import { toast } from 'react-toastify'

const Navbar = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const { totalCartItems } = useContext(ShopContext)
    const [menu, setMenu] = useState(null)
    const [username, setUsername] = useState(null)

    useEffect(() => {
        const path = location.pathname
        if (path == '/') setMenu('home')
        else if (path.includes('/men')) setMenu('men')
        else if (path.includes('/women')) setMenu('women')
        else if (path.includes('/kids')) setMenu('kids')
        else if (path.includes('/login')) setMenu('login')
        else setMenu(null)
    }, [location])

    useEffect(() => {
        const name = localStorage.getItem('auth-username')
        if (name) setUsername(name)
        else setUsername('')
    }, [location])

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }, [location])
    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="logo-img" height='60px' />
                <p>Shopper</p>
            </div>
            <ul className='nav-menu'>
                <li>
                    <Link to='/' style={{ textDecoration: 'none', color: '#626262' }}>Home</Link>
                    {menu == 'home' ? <hr /> : <></>}
                </li>
                <li>
                    <Link to='/men' style={{ textDecoration: 'none', color: '#626262' }}>Men</Link>
                    {menu == 'men' ? <hr /> : <></>}
                </li>
                <li>
                    <Link to='/women' style={{ textDecoration: 'none', color: '#626262' }}>Women</Link>
                    {menu == 'women' ? <hr /> : <></>}
                </li>
                <li>
                    <Link to='/kids' style={{ textDecoration: 'none', color: '#626262' }}>Kids</Link>
                    {menu == 'kids' ? <hr /> : <></>}
                </li>
            </ul>
            <div className="nav-login-cart">
                {
                    localStorage.getItem('auth-token') ?
                        <div>
                            <button onClick={() => {
                                localStorage.removeItem('auth-token')
                                localStorage.removeItem('auth-username')
                                if (location.pathname == '/') toast.success('User logged out successfully', { autoClose: 3000 })
                                else toast.success('User logged out successfully. Redirecting to home...', { autoClose: 3000 })
                                setTimeout(() => {
                                    navigate('/')
                                    window.location.reload()
                                }, 3500)
                            }}>Logout</button>
                            <p>Welcome, {username}</p>
                        </div> :
                        <Link to='/login'>  
                            <button style={
                                menu == 'login' ? { backgroundColor: '#ff8741', color: 'white', border: 'none' } : {}
                            }>Login</button>
                        </Link>
                }
                <Link to='/cart'>
                    <img src={cart_icon} alt="cart-img" height='40px' />
                </Link>
                <div className="nav-cart-count">{totalCartItems}</div>
            </div>
        </div>
    )
}

export default Navbar