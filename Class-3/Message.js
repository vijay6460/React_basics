import React, { Component } from 'react'
import "../Class-3/style.css"
import '../Class-3/script'

class Message extends Component {
  render() {
    return (
  
    <div className='all'>
   <h1 className='Heading1'>Order Your Snack and Grab a Bite</h1>
   <p className='Para1'>Register and get First Order will get a 70% off</p>
   <button onClick="Submit()">Click</button>
  

  </div>
    )
  }
}

export default Message