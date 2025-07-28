import React from 'react'
import code from '../assets/code.png'
import {Link} from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={code} alt="logo" height="90px" width="220px" />
        <ul>
           <Link to='/'><li>Home</li></Link> 
            <Link to='/product'><li>Products</li></Link> 
           <Link to='/about'> <li>About</li></Link> 
           <Link to='/contact'> <li>Contact</li></Link> 
        </ul>
        <button>Login</button>
    </div>
  )
}
