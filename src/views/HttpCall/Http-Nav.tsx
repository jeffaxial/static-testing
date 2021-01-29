import React from 'react';
import { NavLink } from 'react-router-dom';

function HttpNav() {
  return (
    <div className="HttpNav Nav-Sub">
      <ul className="Nav-Links">
        <li>
          <NavLink to="/http/xhr">XHR</NavLink>
        </li>
        <li>
          <NavLink to="/http/axios">Axios</NavLink>
        </li>
        <li>
          <NavLink to="/http/axios-instance">Axios Instance</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default HttpNav;
