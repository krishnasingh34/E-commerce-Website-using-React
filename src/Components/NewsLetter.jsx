import React, { useRef } from 'react'
import '../CSS/newsLetter.css'
import { toast } from 'react-toastify'

const NewsLetter = () => {
    const inputRef = useRef(null)
    function handleClick() {
        let email = inputRef?.current?.value
        if (!email.includes('@') || !email.includes('.')) {
            toast.error('Email is not valid')
            return 
        }
        if (email.lastIndexOf('.') < email.indexOf('@')) {
            toast.error('Email is not valid')
            return
        }
        else {
            toast.success('Email subscribed successfully')
        }
        inputRef.current.value = ''
    }
    return (
        <div className='newsletter'>
            <h1>Get exclusive offers on your email !</h1>
            <p>Subscribe to our newsletter and stay updated</p>
            <div>
                <input type='email' placeholder='Your email id' ref={inputRef} />
                <button onClick={handleClick}>Subscribe</button>
            </div>
        </div>
    )
}

export default NewsLetter