import React, { useState } from 'react';
import Form from '../../components/Todos/Form';
import List from '../../components/Todos/List';
import { Todo } from '../../interfaces/Todos-Interface';

interface Props {
  testQuery?: string;
}

function StateLocal(props: Props) {
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
  const [inputValue, setInputValue] = useState<string>(localStorage.getItem('test') as string);
  const link: string = localStorage.getItem('link') as string;

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
      <a href={inputValue}>Test Link</a>
      <Form
        inputValue={inputValue}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        testQuery={props.testQuery}
      />
      {link && link.includes('http://') ? <iframe src={link}></iframe> : undefined}
      {todos ? <List todos={todos} handleClick={handleClick} /> : undefined}
    </div>
  );
}

export default StateLocal;
