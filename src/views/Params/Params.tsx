import React, { Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ParamsNav from './Params-Nav';
import ParamsView from './Params-View';

function Params() {
  return (
    <div className="Params Content-Wrapper">
      <Fragment>
        <ParamsNav />
        <div className="Content Content-Padded">
          <Switch>
            <Route path={'/params/:param'} component={ParamsView} />
            <Redirect to='params/cool' />
          </Switch>
        </div>
      </Fragment>
    </div>
  )
}

export default Params;