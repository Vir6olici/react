import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Details from './pages/Details';
import Home from './pages/Home';
import Menu from './components/Menu';

function App() {
  return (
    <div className="container">
    <Menu/>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/details">
          <Details />
        </Route>
      </Switch>
    </Router>
  </div>
  )
}

export default App;
