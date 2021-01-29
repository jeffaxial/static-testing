import React, { Fragment, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { Todo } from '../../interfaces/Todos-Interface';
import StateLocal from './State-Local';
import StateGlobal from './State-Global';
import StateParent from './State-Parent';
import StateNav from './State-Nav';

function State() {
  const initialTodosForChild: Todo[] = [
    {
      value: 'Clean the kitchen',
      done: false,
    },
    {
      value: 'Wash the car',
      done: true,
    },
  ];

  const [todosForChild, seTodosForChild] = useState<Todo[]>(initialTodosForChild);

  // const query = new URL(window.location).searchParams.get('query')

  let testVal: string = '';

  return (
    <div className="State Content-Wrapper">
      <Fragment>
        <input
          onChange={(evt: any) => {
            testVal = evt.value;
          }}
        />
        {testVal}
        <StateNav />
        <div className="Content Content-Padded">
          <Switch>
            <Route path="/state/local" component={StateLocal} />
            <Route
              path="/state/parent"
              component={() => <StateParent todos={todosForChild} setTodos={seTodosForChild} />}
            />
            <Route path="/state/global" component={StateGlobal} />
            <Redirect to="/state/local" />
          </Switch>
        </div>
      </Fragment>
    </div>
  );
}

export default State;
