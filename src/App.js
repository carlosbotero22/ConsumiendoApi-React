import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const url = 'https://jsonplaceholder.typicode.com/todos';
  // almacenamos todos
  const [todos, setTodos] = useState();
  // tenemos la funcion
  const fetchApi = async () => {
    const response = await fetch(url);
    console.log(response.status);
    const responseJSON = await response.json();
    setTodos(responseJSON);
    console.log(responseJSON);
  };
  // ejecutamos la funcion del inicio
  useEffect(() => {
    fetchApi();
  }, []);
  return (
    // renderizamos
    <div>
      <h1>Hello StackBlitz!</h1>
      <ul>
        {!todos
          ? 'Cargando....'
          : todos.map((todo, index) => {
              return (
                <li key={index}>
                  {todo.title}
                  {todo.completed ? '✅' : '❌'}
                </li>
              );
            })}
      </ul>
    </div>
  );
}
