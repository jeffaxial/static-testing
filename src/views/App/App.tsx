import React, { Fragment, useState } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import './App.scss';
import Nav from './Nav';
import State from '../State/State';
import Params from '../Params/Params';
import { StateContextProvider, StateContextInterface } from '../../context/todo-context';
import { Todo } from '../../interfaces/Todos-Interface';
import HttpCall from '../HttpCall/Http';
import HOC from '../HOC/HOC';
import { RouteConfig } from '../../interfaces/Routes';

export const appRoutes: RouteConfig[] = [
  {
    path: '/state',
    name: 'State',
    component: State,
  },
  {
    path: '/params',
    name: 'Params',
    component: Params,
  },
  {
    path: '/http',
    name: 'Http',
    component: HttpCall,
  },
  // {
  //   path: '/hoc',
  //   name: 'HOC',
  //   component: HOC,
  // },
];

function App() {
  const initialTodos: Todo[] = [
    {
      value: 'Clean the kitchen!!!!',
      done: false,
    },
    {
      value: 'Wash the car',
      done: true,
    },
  ];

  const [todos, setTodos] = useState(initialTodos);
  const todosContext: StateContextInterface = {
    todos,
    setTodos: setTodos,
  };

  return (
    <div className="App">
      <StateContextProvider value={todosContext}>
        <BrowserRouter>
          <Fragment>
            <Nav />
            <div className="Content">
              <Switch>
                {appRoutes.map((route: RouteConfig) => {
                  return <Route path={route.path} component={route.component} />;
                })}
                <Redirect to={appRoutes[0].path} />
              </Switch>
            </div>
          </Fragment>
        </BrowserRouter>
      </StateContextProvider>
    </div>
  );
}

export default App;
