import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import Details from './pages/Details/Details';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          component={Home}
        />
        <Route
          exact
          path="/details"
          component={Details}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
