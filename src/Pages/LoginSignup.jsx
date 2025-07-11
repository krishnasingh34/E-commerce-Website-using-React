import React, { useState, useRef, useEffect } from 'react'
import '../CSS/loginSignup.css'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const LoginSignup = () => {
  const navigate = useNavigate()
  const [state, setState] = useState('Login')
  const [showPassword, setShowPassword] = useState(false)
  const [showCpassword, setShowCpassword] = useState(false)

  const usernameRef = useRef(null)
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const cPasswordRef = useRef(null)

  useEffect(() => {
    emailRef.current.value = ''
    passwordRef.current.value = ''
  }, [state])


  function handleSignup(e) {
    e.preventDefault()
    let username = usernameRef?.current?.value
    let email = emailRef?.current?.value
    let password = passwordRef?.current?.value
    let cPassword = cPasswordRef?.current?.value
    if (!username || !email || !password || !cPassword) {
      alert('All fields are required')
      return
    }
    if (!username.trim().includes(' ')) {
      alert("Enter your full name")
      return
    }
    if (!email.includes('@') || !email.includes('.')) {
      alert('Email is not valid')
      return
    }
    if (email.lastIndexOf('.') < email.indexOf('@')) {
      alert('Email is not valid')
      return
    }
    if (password.length < 8) {
      alert('Password must be at least 8 characters long')
      return
    }
    let hasUpper = false
    let hasLower = false
    let hasNumber = false
    let hasSpecial = false
    for (let char of password) {
      if (char >= 'A' && char <= 'Z') {
        hasUpper = true
      }
      else if (char >= 'a' && char <= 'z') {
        hasLower = true
      }
      else if (char >= '0' && char <= '9') {
        hasNumber = true
      }
      else {
        hasSpecial = true
      }
    }
    if (!hasUpper || !hasLower || !hasNumber || !hasSpecial) {
      alert('Password must contain uppercase, lowercase, number, and special character')
      return
    }
    if (password !== cPassword) {
      alert("Password and confirm password must match")
      return
    }
    axios.post('http://localhost:4000/signup', {
      username, email, password
    })
      .then(info => {
        if (info.data.success) {
          localStorage.setItem('auth-token', info.data.data.token)
          localStorage.setItem('auth-username', info.data.data.name)
          toast.success(`${info.data.message}. Redirecting to home...`, { autoClose: 3000 })
          setTimeout(() => {
            navigate('/')
          }, 3500)
        }
        usernameRef.current.value = ""
        emailRef.current.value = ""
        passwordRef.current.value = ""
        cPasswordRef.current.value = ""
      })
      .catch(err => {
        if (!err.response.data.success) {
          toast.error(err.response.data.message, { autoClose: 3000 })
          return
        }
        toast.error('Failed to fetch data. Please try again later', { autoClose: 3000 })
      })
  }

  function handleLogin(e) {
    e.preventDefault()
    let email = emailRef?.current?.value
    let password = passwordRef?.current?.value
    if (!email || !password) {
      alert('All fields are required')
      return
    }
    axios.post('http://localhost:4000/login', {
      email, password
    })
      .then(info => {
        if (info.data.success) {
          localStorage.setItem('auth-token', info.data.data.token)
          localStorage.setItem('auth-username', info.data.data.name)
          toast.success(`${info.data.message}. Redirecting to home...`, { autoClose: 3000 })
          setTimeout(() => {
            navigate('/')
            window.location.reload()
          }, 3500)
        }
        emailRef.current.value = ""
        passwordRef.current.value = ""
      })
      .catch(err => {
        if (!err.response.data.success) {
          toast.error(err.response.data.message, { autoClose: 3000 })
          return
        }
        toast.error('Failed to fetch data. Please try again later', { autoClose: 3000 })
      })
  }

  return (
    <div className='loginsignup'>
      <div className='loginsignup-container' style={state == 'Signup' ? {
        width: '500px', height: '500px', background: 'white', margin: 'auto', padding: '20px 60px',
        border: '1px solid black', borderRadius: '40px', paddingBottom: '100px'
      } : {
        width: '500px', height: '440px', background: 'white', margin: 'auto', padding: '50px 60px',
        border: '1px solid black', borderRadius: '40px', paddingBottom: '100px'
      }}>
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state == 'Signup' ? <input type="text" placeholder='Enter name' ref={usernameRef} /> : <></>}
          <input type="email" placeholder='Enter email' ref={emailRef} />

          <div className="password-field">
            <input type={showPassword ? "text" : 'password'} placeholder='Enter password' ref={passwordRef} />
            <span onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {state === 'Signup' &&
            <div className="password-field">
              <input type={showCpassword ? 'text' : 'password'} placeholder='Confirm password' ref={cPasswordRef} />
              <span onClick={() => setShowCpassword(!showCpassword)}>
                {showCpassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          }
        </div>
        <div className="loginsignup-continue">
          <button onClick={state == 'Signup' ? handleSignup : handleLogin}>
            {state == 'Signup' ? 'Register Now' : 'Login'}
          </button>
        </div>
        <p className='loginsignup-login'>
          {state == 'Signup' ?
            <>Already have an account? <span onClick={() => { setState('Login') }}>Login here</span></> :
            <>Don't have an account? <span onClick={() => { setState('Signup') }}>Signup here</span></>
          }
        </p>
      </div>
    </div>
  )
}

export default LoginSignup