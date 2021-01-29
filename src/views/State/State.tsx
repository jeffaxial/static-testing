import React, { Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import StateLocal from './State-Local';
import StateGlobal from './State-Global';
import StateNav from './State-Nav';

function State() {
  return (
    <div className="State Content-Wrapper">
      <Fragment>
        <StateNav />
        <div className="Content Content-Padded">
          <Switch>
            <Route path="/state/local" component={StateLocal} />
            <Route path="/state/global" component={StateGlobal} />
            <Redirect to="/state/local" />
          </Switch>
        </div>
      </Fragment>
    </div>
  );
}

export default State;
