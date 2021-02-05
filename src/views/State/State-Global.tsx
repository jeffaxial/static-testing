import React, { useState, Fragment } from 'react';
import Form from '../../components/Todos/Form';
import List from '../../components/Todos/List';
import { Todo } from '../../interfaces/Todos-Interface';
import { StateContextConsumer, StateContextInterface } from '../../context/todo-context';

function StateGlobal() {
  const [inputValue, setInputValue] = useState<string>('');

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(evt.target.value);
  };

  const handleSubmit = (evt: React.FormEvent, todosContext: StateContextInterface | undefined) => {
    if (!todosContext) {
      return;
    }
    evt.preventDefault();
    const todo: Todo = {
      value: inputValue ? inputValue : '',
      done: false,
    };
    const todosNew: Todo[] = todosContext.todos.concat(todo);
    todosContext.setTodos(todosNew);
    setInputValue('');
  };

  const handleClick = (index: number, todosContext: StateContextInterface | undefined) => {
    if (!todosContext) {
      return;
    }
    const todosNew = todosContext.todos.map((todo: Todo, todoIndex: number) => {
      return {
        ...todo,
        done: todoIndex === index ? !todo.done : todo.done,
      };
    });
    todosContext.setTodos(todosNew);
  };

  return (
    <div className="Todos-Global">
      <h1>Global State</h1>
      <StateContextConsumer>
        {(todosContext) => {
          return (
            <Fragment>
              <Form
                inputValue={inputValue}
                handleChange={handleChange}
                handleSubmit={(evt) => handleSubmit(evt, todosContext)}
                testQuery="nothing"
              />
              <List
                todos={todosContext ? todosContext.todos : []}
                handleClick={(evt) => handleClick(evt, todosContext)}
              />
            </Fragment>
          );
        }}
      </StateContextConsumer>
    </div>
  );
}

export default StateGlobal;
