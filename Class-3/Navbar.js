import React, { Component } from 'react'
class Navbar extends Component {
  render() {
    return (
      <div>
      <section className='Navbar'>
      <a href="snack">Snack</a>
      <a href="./Fun">Home</a>
      <a href='#'>Menu</a>
      <a href="#">About Us</a>
      <a href="#">Book Table</a>
      <a href="#">Order-Online</a>
      <span className='one'>
      <a href="#">Sign Up</a>
      <a href="#">Login</a></span>
      </section>
      </div>
    )
  }
}

export default Navbar