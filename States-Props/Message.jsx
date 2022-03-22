import React from "react";
class Message extends React.Component{
    render(){
        return(
            <div>
            <h4>This is for the Message Component</h4>
            <h4>Name of the car is {this.props.Brand} and Year is {this.props.year}</h4>
            </div>
        )
    }
}
export default Message