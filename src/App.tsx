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
          path="/movie/:id"
          component={Details}
        />
        <Route
          exact
          path="/"
          component={Home}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
