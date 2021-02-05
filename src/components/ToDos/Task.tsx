import * as React from 'react';
import { Todo } from '../../interfaces/Todos-Interface';

interface Props {
  index: number;
  todo: Todo;
  handleClick: (index: number) => void;
}

function Task(props: Props) {
  return (
    <div className="Task" key={props.index}>
      <span style={{ textDecoration: props.todo.done ? 'line-through' : 'none' }}>{props.todo.value}</span>
      <button onClick={() => props.handleClick(props.index)}>{props.todo.done ? 'Mark Not Done' : 'Mark Done'}</button>
    </div>
  );
}

export default Task;
