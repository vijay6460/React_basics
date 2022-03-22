import React from 'react'
function Navbar() {
  return (
    <div>
    <div className='Navbar'>
    <a href='#' id='image1' ><img src='https://st2.depositphotos.com/42546960/42277/v/380/depositphotos_422773316-stock-illustration-letter-logo-design-vector-template.jpg?forcejpeg=true' alt="logo"/></a>
    <a href="#" id='home'>Home</a>
    <a href="#" id='about'>About Us</a>
    <a href="#" id='blog'>Blog</a>
    <a href="#" id='contact'>Contact Us</a>
    <a href="#" id='reach'>Reach Us</a>
    <input type="search" placeholder='Enter for search' className='search'/>
    <a href='#' className='Login' id='login1'>Login</a>
    <a href='#' className='Login' id='register'>Register</a>
</div>
    </div>
  )
}

export default Navbar;