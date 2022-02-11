import { BrowserRouter, Switch, Route, Redirect, Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import AuthPage from './AuthPage';
import Home from './Home';
import AddFavorite from './AddFavorite';

function App() {
  const [currentUser, setCurrentUser] = useState(localStorage.getItem('supabase.auth.token'));

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          {
            currentUser
              ? <Redirect to='/home' />
              : <Redirect to='/authenticate' />
          }
        </Route>
        <Route exact path='/authenticate' >
          {
            currentUser
              ? <Redirect to='/home' />
              : <AuthPage setCurrentUser={setCurrentUser} />
          }
        </Route>
        <Route exact path='/home' >
          {
            currentUser
              ? <Home />
              : <Redirect to='/authenticate' />
          }
        </Route>
        <Route exact path='/add-favorite' >
          {
            currentUser
              ? <AddFavorite />
              : <Redirect to='/authenticate' />
          }
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
