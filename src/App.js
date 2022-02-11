import { BrowserRouter, Switch, Route, Redirect, Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import AuthPage from './AuthPage';

function App() {
  const [currentUser, setCurrentUser] = useState(localStorage.getItem('supabase.auth.token'));

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          {
            currentUser
              ? <Redirect to='/restaurants' />
              : <Redirect to='/authenticate' />
          }
        </Route>
        <Route exact path='/authenticate' >
          {
            currentUser
              ? <Redirect to='/restaurants' />
              : <AuthPage setCurrentUser={setCurrentUser} />
          }
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
