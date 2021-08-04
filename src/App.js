import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './views/Home';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route render={()=> <Redirect to="/"/>} />
    </Switch>
  );
}

export default App;
