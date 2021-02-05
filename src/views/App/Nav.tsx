import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { appRoutes } from './App';
import { RouteConfig } from '../../interfaces/Routes';

function Nav() {
  return (
    <div className="Nav">
      <ul className="Nav-Links">
        {appRoutes.map((route: RouteConfig) => {
          return (
            <li>
              <NavLink to={route.path}>{route.name}</NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Nav;
