import * as React from 'react';
import Task from './Task';
import { Todo } from '../../interfaces/Todos-Interface';

interface Props {
  todos: Todo[];
  handleClick: (index: number) => void;
}

function List(props: Props) {
  return (
    <div className="List">
      {props.todos.map(
        (todo, index) => {
          return (
            <Task
              key={index}
              index={index}
              todo={todo}
              handleClick={props.handleClick}
            />
          )
        }
      )}
    </div>
  )
}

export default List;