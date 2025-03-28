// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        {/* You can add more routes here. For now, we'll default to the dashboard. */}
        <Route path="/" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;