import { useState } from 'react';
import "./App.css";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className='body'>
      
                  <h2 className="fw-light mb-2 text-uppercase">Login</h2>
                  <p className="lead text-muted mb-5">Please enter your login and password!</p>
                  <form onSubmit={handleSubmit}>
                    <div>
                  <label className="labels" htmlFor="typeEmailX">
                        Email:
                      </label>
                      <input
                        type="email"
                        id="typeEmailX"
                        className="input"
                        value={email}
                        onChange={handleEmailChange}
                      />
                      </div>
                     
                   <div>
                     <label className="labels" htmlFor="typePasswordX">
                        Password:
                      </label>
                      <input
                        type="password"
                        id="typePasswordX"
                        className="input"
                        value={password}
                        onChange={handlePasswordChange}
                      />
                      </div>
                    <button className="button" type="submit">
                      Login
                    </button>
                  </form>
                <div>
                  <p className="mb-0 up">
                    Don't have an account?{' '}
                    <a href="/signup" className="button">
                      Sign Up
                    </a>
                  </p>
                </div>
    </div>
  );
}

export default Login;
