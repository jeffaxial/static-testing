import React from 'react';
import { NavLink } from 'react-router-dom';

function StateNav() {
  return (
    <div className="StateNav Nav-Sub">
      <ul className="Nav-Links">
        <li>
          <NavLink to="/state/local">Local</NavLink>
        </li>
        <li>
          <NavLink to="/state/parent">Parent</NavLink>
        </li>
        <li>
          <NavLink to="/state/global">Global</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default StateNav;