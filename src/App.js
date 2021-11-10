import  React, { useState } from 'react';
import './App.css';
import { Button } from '@material-ui/core';

function App() {
  const [input, setInput] = useState(''); 
  const [messages, setMessages] = useState([]);

  console.log(input);
  console.log(messages);
  
  const sendMessage = (event) => {
    event.preventDefault();
    // aal th elogic to send a message goes
    setMessages([...messages, input])
    setInput('');

  }


  return (
    <div className="App">
      <h1>Hello </h1>

    <form>
      <input value={input} onChange={event => setInput(event.target.value)} />
      <Button  type='submit' onClick={sendMessage}> Send Message</Button>
    </form>
    
    {/*messages themselves*/}
  
  {
  messages.map(messages => (
    <p>{messages}</p>
  ))
  }
    </div>
  );
}

export default App;