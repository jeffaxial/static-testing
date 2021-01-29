import React, { useState } from 'react';
import Form from '../../components/Todos/Form';
import List from '../../components/Todos/List';
import { Todo } from '../../interfaces/Todos-Interface';

function StateLocal() {
  const initialTodos: Todo[] = [
    {
      value: 'Clean the kitchen',
      done: false,
    },
    {
      value: 'Wash the car',
      done: true,
    },
  ];

  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [inputValue, setInputValue] = useState<string>('');

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(evt.target.value);
  };

  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();
    const todo: Todo = {
      value: inputValue ? inputValue : '',
      done: false,
    };
    const todosNew: Todo[] = todos.concat(todo);
    setTodos(todosNew);
    setInputValue('');
  };

  const handleClick = (index: number) => {
    const todosNew = todos.map((todo: Todo, todoIndex: number) => {
      return {
        ...todo,
        done: todoIndex === index ? !todo.done : todo.done,
      };
    });
    setTodos(todosNew);
  };

  return (
    <div className="Todos-Local">
      <h1>Local State</h1>
      <Form inputValue={inputValue} handleChange={handleChange} handleSubmit={handleSubmit} />
      {todos ? <List todos={todos} handleClick={handleClick} /> : undefined}
    </div>
  );
}

export default StateLocal;
