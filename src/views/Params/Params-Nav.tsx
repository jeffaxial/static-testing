import * as React from 'react';
import { NavLink } from 'react-router-dom';

function ParamsNav() {
  return (
    <div className="ParamsNav Nav-Sub">
      <ul className="Nav-Links">
        <li>
          <NavLink to="/params/cool">Cool</NavLink>
        </li>
        <li>
          <NavLink to="/params/things">Things</NavLink>
        </li>
        <li>
          <NavLink to="/params/bro">Bro</NavLink>
        </li>
        <li>
          <NavLink to="/params/one-query?testQuery=awesome">1 Query Param</NavLink>
        </li>
        <li>
          <NavLink to="/params/two-query?testQuery=awesome&testQuery2=radical">2 Query Param</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default ParamsNav;
