import Product from "./Product"
import React from "react"
class Message extends React.Component{
    render(){
        let Brand="Maruti"
        return(
            <div>
            <h5>This is for the Message Component in class Component</h5>
            <h4>This Car is {Brand}</h4>
            <Product/>
            </div>
        )
    }
}
export default Message