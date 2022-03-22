import React from "react";
const Message=(props)=>{
    return(
        <div>
        <h4>This is for the Message Component</h4>
        <h3>Name is {props.name} and age is {props.age}</h3>
        </div>
    )
}
export default Message