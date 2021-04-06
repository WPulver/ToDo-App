import React, { useState, useEffect} from 'react';
import './App.css';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Todo from './Todo.js';
import db from './firebase';
import firebase from 'firebase';


function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id: doc.id, text: doc.data().text, deadline: doc.data().deadline})))
    })
  }, []);

  const addTodo = (event) => {
    event.preventDefault();

    db.collection('todos').add({
      text: input,
      deadline: time,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });

    setTodos([...todos, input]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>To-Do</h1>

      <form>
        <FormControl>
          <InputLabel>Write a To-Do</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>
        </FormControl>

        <FormControl>
          <InputLabel></InputLabel>
          <Input type='datetime-local' onChange={event => setTime(event.target.value)} />
        </FormControl>

        <Button color='primary' disabled={!input} type='submit' onClick={addTodo}>
          Add Todo
        </Button>
      </form>

      <ul>
        {todos.map(todo => (
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
