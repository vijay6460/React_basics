import React,{useState} from 'react';
import Message from './Fun_props/Message';
const App=()=>{
  const [person,setPerson]=useState({name:'vijay',age:20})
  // const {name,age}=person;
  return(
    <div>
    <h4>This is for the App Component</h4>
    <Message Name={person.name} age={person.age}/>
    </div>
  )
}
export default App