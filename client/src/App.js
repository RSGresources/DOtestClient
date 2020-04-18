import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios'

function App() {
  const [message, setMessage] = useState("Message not yet recieved")

  const [number1, setNumber1] = useState(0)
  const [number2, setNumber2] = useState(0)
  const [result, setResult] = useState(0)

  const sendPing = async () =>{
    axios.get('http://134.122.109.140/ping')
    .then((res) =>{
      setMessage(res.data)
    })
    .catch((err) =>{
      console.log(err)
    })
    
  }

  const addNums = (e) =>{
    e.preventDefault()
    axios.post('http://134.122.109.140/addNumbers',{
      number1:number1,
      number2:number2
    })
    .then((res) =>{
      console.log(res.data)
      setResult(res.data)
    })
  }

  return (
    <div className="App">
      <p>Digital ocean test</p>
      <br/>
      <button onClick={() => sendPing()}>Click to send a ping</button>
      <p>= {message}</p>
      <br/><br/>
      <form>
        <label>
          number1:
        </label>
        <br/>
        <input type="text" value={number1} onChange={(e) => setNumber1(e.target.value)}/>
        <br/><br/>
        <label>
          :number2
        </label><br/>
        <input type="text" value={number2} onChange={(e) => setNumber2(e.target.value)}/>
        <br/><br/>
        <input type="submit" value="add 2 numbers" onClick={(e) => addNums(e)}/>
      </form>
      <p>Result = {result}</p>
    </div>
  );
}

export default App;
