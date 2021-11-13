import  React, { useState, useEffect} from 'react';
import './App.css';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Message from './Message';
import db from './firebase'
function App() {
  const [input, setInput] = useState(''); 
  const [messages, setMessages] = useState([
  
]);
  const [username, setUsername]= useState('');

  //useState= varaiable in React
  //useEffect= run code in a condition in React


  useEffect(() => {
  // run once when the app component loads
  db.collection('messages').onSnapshot(snapshot => {
    setMessages(snapshot.docs.map(doc => doc.data()))
  })

  }, [] )

  useEffect(() => {
  //const username = prompt ('Please enter your name')
  setUsername(prompt('Please enter your name'))


  }, [] ) //condition

  console.log(input);
  console.log(messages);
  
  const sendMessage = (event) => {
    event.preventDefault();
    
    setMessages([...messages,{username: username, text: input}]);
    setInput('');
  }


  return (
    <div className="App">
      <h1>Hello </h1>
    
      <form>
      <FormControl>
        <InputLabel>Enter a message...</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)} />
        <Button diasabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}> Send Message</Button>
      </FormControl>
      </form>
  
  {
   messages.map(message => (
    <Message username={username} message={message} />
   
  ))
  }
    </div>
  );
}

export default App;