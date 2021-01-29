import React, { Fragment, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import './State.scss';
import { Todo } from '../../interfaces/Todos-Interface';
import StateLocal from './State-Local';
import StateGlobal from './State-Global';
import StateParent from './State-Parent';
import StateNav from './State-Nav';

function State() {

  const initialTodosForChild: Todo[] = [
    {
      value: 'Clean the kitchen',
      done: false
    },
    {
      value: 'Wash the car',
      done: true
    }
  ];

  const [todosForChild, setTodosForChild] = useState<Todo[]>(initialTodosForChild);

  return (
    <div className="State Content-Wrapper">
      <Fragment>
        <StateNav />
        <div className="Content Content-Padded">
          <Switch>
            <Route path="/state/local" component={StateLocal} />
            <Route path="/state/parent" component={() => <StateParent todos={todosForChild} setTodos={setTodosForChild} /> }/>
            <Route path="/state/global" component={StateGlobal} />
            <Redirect to="/state/local" />
          </Switch>
        </div>
      </Fragment>
    </div>
  )
}

export default State;
