import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
   return (
      <div className="navbar">
         <div className="navbar_inner">
            <div className="logo">LOGO</div>
            <div className="navbar_links">
               <Link to='/'>HomePage</Link>
               <Link to='/login'>Login</Link>
               <Link to='/register'>Register</Link>
               <Link to='/users'>UserList</Link>
            </div>
         </div>
      </div>
   )
}