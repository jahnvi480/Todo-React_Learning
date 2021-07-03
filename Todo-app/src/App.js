import './App.css';
import Header from './MyComponents/Header';
import Footer from './MyComponents/Footer';
import Todos from './MyComponents/Todos';
import { AddTodoItems } from "./MyComponents/AddTodoItems";
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import About from './MyComponents/About';


function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("Someone clicked Delete of todo", todo.srno);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addtodo = (title, desc) => {
    console.log("I am adding todo", title, desc);
    let srno;
    if (todos.length === 0) {
      srno = 0;
    }
    else {
      srno = todos[todos.length - 1].srno + 1;
    }
    const newtodo = {
      srno: srno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, newtodo]);
    console.log(newtodo);


  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  return (
    <>
      <Router>
        <Header title='MY TODOs-LIST' searchBar={true} />
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <AddTodoItems addtodo={addtodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            )
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;
