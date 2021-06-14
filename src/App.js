import './App.css';
import Header from './components/header';
import {Addtodo} from './components/addtodo';
import Todos from './components/todos';
import Footer from './components/footer';
import {About} from './components/about';
import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() { 
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  let [todos, setTodos] = useState(initTodo);

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])

  const onDelete=(todo)=>{
    console.log("!!User deleteed it.!!",todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }
    ))
    localStorage.setItem("todos",JSON.stringify(todos)); 
  }

  const addTodo = (title,desc,status)=>{
    let sno;
    if(todos.length===0){
      sno=1;
    }
    else{ 
      sno= todos[todos.length-1].sno+1;
    }
    const mytodo = {
      sno: sno,
      title: title,
      dsc: desc,
      status:status,
    }
    console.log("I am adding a todo:",mytodo);
    setTodos([...todos,mytodo]);
  }

  return (
    <>
    <Router>
    <Header title='Todo List' searchbar={false}/>
      <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <Addtodo addTodo={addTodo}/>
            <Todos todos={todos} onDelete={onDelete}/>
          </Route>
      </Switch>
    <Footer/>
    </Router>
    </>
  );
}

export default App;