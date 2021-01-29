import React from 'react';
import { Todo } from '../interfaces/Todos-Interface';

export interface StateContextInterface {
  todos: Todo[];
  setTodos: any;
}

const StateContext = React.createContext<StateContextInterface | undefined>(undefined);
export const StateContextProvider = StateContext.Provider;
export const StateContextConsumer = StateContext.Consumer;
