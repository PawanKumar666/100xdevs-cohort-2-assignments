import { useState } from 'react'
import './App.css'

function App() {
  const [role, setRole] = useState('')
  const [action, setAction] = useState('')

  return (
    <>
      <div className="card">
        <div>
          {!role && (
          <>
          <h3>Select a category !</h3>
          <button onClick={() => {
            setRole('admin');
          }}>Admin</button>
          <button onClick={() => {
            setRole('user');
          }}>User</button> </>)}
        </div>
       {(role === 'admin' || role === 'user') && <RoleActions role={role} action={action} setAction={setAction} />}
      </div>
    </>
  )
}

function RoleActions({ role, action, setAction }) {
  return (
    <>
    {!action && (<>
    <div>
      <h3>Select an action !</h3>
      <button onClick={() => {
        setAction('signup');
      }}>Signup</button>
      <button onClick={() => {
        setAction('login');
      }}>Login</button>
    </div>
  </>)}
    {action && action === 'signup' && <SignUp role={role} />}
    {action && action === 'login' && <Login role={role} />}
  </>
  )
}

function SignUp({ role }) {
  const capitalizedRole = role.charAt(0).toUpperCase() + role.slice(1);
  return <div>
    <h3>Sign-up as {capitalizedRole}</h3>
    <Authenticate role={role} action='signup' />
  </div>
}

function Login({ role }) {
  return <div>
    <h3>Login as {role}</h3>
    <Authenticate role={role} action='login' />
  </div>
}

function Authenticate({role, action}){
  const capitalizedAction = action.charAt(0).toUpperCase() + action.slice(1);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={() => handleAuthentication(role, action, username, password)}>{capitalizedAction}</button>
    </div>
  );
}

// TODO : Handle routing and authentication
function handleAuthentication(role, action, username, password){
  if (role === 'admin'){
    if (action === 'signup'){
      handleAdminSignup(username, password);
    }
    if (action === 'login'){
      handleAdminLogin(username, password);
    }
  }
  if (role === 'user'){
    if (action === 'signup'){
      handleUserSignup(username, password);
    }
    if (action === 'login'){
      handleUserLogin(username, password);
    }
  }
}

function handleAdminSignup(username, password){
  fetch('/admin/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({"username": username, "password": password })
  })
  .then(response => response.json())
  .then(data => console.log('Admin signup successful:', data))
  .catch(error => console.error('Error during admin signup:', error));
}

function handleAdminLogin(username, password){
  fetch('/admin/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({"username": username, "password": password })
  })
  .then(response => response.json())
  .then(data => console.log('Admin login successful:', data))
  .catch(error => console.error('Error during admin login:', error));
}

function handleUserSignup(username, password){
  fetch('/user/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({"username": username, "password": password })
  })
}

function handleUserLogin(username, password){
  fetch('/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({"username": username, "password": password })
  })
}

export default App
