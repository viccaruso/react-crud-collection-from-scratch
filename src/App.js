import AuthPage from './AuthPage';
import { useState } from 'react';

function App() {
  const [currentUser, setCurrentUser] = useState(localStorage.getItem('supabase.auth.token'));
  
  return (
    <div className="App">
      <AuthPage setCurrentUser={setCurrentUser} />
    </div>
  );
}

export default App;
