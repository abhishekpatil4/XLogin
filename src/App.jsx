import { useState } from 'react'
import './App.css'

function App() {
  const [submitted, setSubmitted] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    const data = new FormData(event.target);
    const payload = Object.fromEntries(data);
    if (payload.username == "user" && payload.password == "password") {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }

  return (
    <>
      <div>
        <h2>Login Page</h2>
        {
          submitted && !loggedIn && <p>Invalid username or password</p>
        }
        {
          !loggedIn &&
          < form onSubmit={handleSubmit}>
            <div>
              <label htmlFor='username'>Username:</label><input id="username" required type="text" name="username" placeholder='username' />
            </div>
            <div>
              <label htmlFor='password'>Password: </label><input id="password" required type="password" placeholder='password' name="password" />
            </div>
            <button>Submit</button>
          </form>
        }
        {
          submitted && loggedIn && <p>Welcome, user!</p>
        }
      </div >
    </>
  )
}

export default App
