import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [cpayload, setcpayload] = useState({
    username:"",
    password:""
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const payload = Object.fromEntries(data);
    setcpayload(payload);
    console.log("data: ", payload);
    if (payload.username == "user" && payload.password == "password") {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }

    setSubmitted(true);
  }

  return (
    <>
      <div>
        <h2>Login Page</h2>
        {
          !loggedIn && !submitted &&
          <form onSubmit={handleSubmit}>
            <div>
              <label>Username: </label><input required type="text" name="username" placeholder='username' />
            </div>
            <div>
              <label>Password: </label><input required type="password" placeholder='password' name="password" />
            </div>
            <button>Submit</button>
          </form>
        }
        {
          !loggedIn && submitted &&
          <div>
            <p>Invalid username or password</p>
            <form onSubmit={handleSubmit}>
              <div>
                <label>Username: </label><input required type="text" name="username" placeholder='username' onChange={(event) => setcpayload(event.target.value)} value={cpayload?.username} />
              </div>
              <div>
                <label>Password: </label><input required type="password" placeholder='password' name="password" onChange={(event) => setcpayload(event.target.value)} value={cpayload?.password} />
              </div>
              <button>Submit</button>
            </form>
          </div>
        }
        {
          loggedIn && submitted && <p>Welcome, user!</p>
        }
      </div>
    </>
  )
}

export default App
