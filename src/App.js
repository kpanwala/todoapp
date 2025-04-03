import React from 'react';
import './App.css';
import Header from './components/header';
import IpForm from './components/IpForm';
import { TODOList } from './components/TODOList';
import TODOMain from './components/TODOMain';
import "./styles.css"

let staticTodos=[
  {id:Math.random(), title:"Go to market", isCompleted:true},
  {id:Math.random(), title:"Execute order", isCompleted:false},
  {id:Math.random(), title:"Buy clothes", isCompleted:false}];


function App() {
  const [todos, setTodos] = React.useState(staticTodos);
  const todos_completed = todos.filter(
    (todo) => todo.isCompleted === true
  ).length;
  const total_todos = todos.length;
  
  return (
    <div className="App">
      <Header></Header>
      <TODOMain todos_completed={todos_completed} total_todos={total_todos} />
      <IpForm setTodos={setTodos}></IpForm>
      <TODOList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
