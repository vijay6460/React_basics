import React from "react";
import Message from "./States-Props/Message";
class App extends React.Component{
  state={Brand:'Bugatti',year:2020}
  render(){
    return(
      <div>
      <h4>This is for the app Component and export data from one component to other Component</h4>
      <Message Brand={this.state.Brand} year={this.state.year}/>
      </div>
    )
  }
}
export default App