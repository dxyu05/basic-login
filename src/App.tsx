import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {

  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <h1>Welcome, {name}! You have successfully logged in.</h1>
      ) : (
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              required
            />
          </div>
          <div>
            <img src="https://us.schleich-s.com/cdn/shop/products/20842_main_v23_TP.jpg?v=1695745770" alt="Italian Trulli"></img>
            <label htmlFor="password">Password:</label>
          </div>
            <input
                type="text"
                id="name"
                value={name}
                required
              />
          <button type="submit">Enter</button>
          <h1>Login</h1>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              required
            />
          </div>
          <div>
            <img src="https://us.schleich-s.com/cdn/shop/products/20842_main_v23_TP.jpg?v=1695745770" alt="Italian Trulli"></img>
            <label htmlFor="password">Password:</label>
          </div>
            <input
                type="text"
                id="name"
                value={name}
                required
              />
          <button type="submit">Enter</button>
          <h1>Login</h1>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              required
            />
          </div>
          <div>
            <img src="https://us.schleich-s.com/cdn/shop/products/20842_main_v23_TP.jpg?v=1695745770" alt="Italian Trulli"></img>
            <label htmlFor="password">Password:</label>
          </div>
            <input
                type="text"
                id="name"
                value={name}
                required
              />
          <button type="submit">Enter</button>
          <h1>Login</h1>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              required
            />
          </div>
          <div>
            <img src="https://us.schleich-s.com/cdn/shop/products/20842_main_v23_TP.jpg?v=1695745770" alt="Italian Trulli"></img>
            <label htmlFor="password">Password:</label>
          </div>
            <input
                type="text"
                id="name"
                value={name}
                required
              />
          <button type="submit">Enter</button>
          <h1>Login</h1>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              required
            />
          </div>
          <div>
            <img src="https://us.schleich-s.com/cdn/shop/products/20842_main_v23_TP.jpg?v=1695745770" alt="Italian Trulli"></img>
            <label htmlFor="password">Password:</label>
          </div>
            <input
                type="text"
                id="name"
                value={name}
                required
              />
          <button type="submit">Enter</button>
          <h1>Login</h1>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              required
            />
          </div>
          <div>
            <img src="https://us.schleich-s.com/cdn/shop/products/20842_main_v23_TP.jpg?v=1695745770" alt="Italian Trulli"></img>
            <label htmlFor="password">Password:</label>
          </div>
            <input
                type="text"
                id="name"
                value={name}
                required
              />
          <button type="submit">Enter</button>
          <h1>Login</h1>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              required
            />
          </div>
          <div>
            <img src="https://us.schleich-s.com/cdn/shop/products/20842_main_v23_TP.jpg?v=1695745770" alt="Italian Trulli"></img>
            <label htmlFor="password">Password:</label>
          </div>
            <input
                type="text"
                id="name"
                value={name}
                required
              />
          <button type="submit">Enter</button>
          <h1>Login</h1>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              required
            />
          </div>
          <div>
            <img src="https://us.schleich-s.com/cdn/shop/products/20842_main_v23_TP.jpg?v=1695745770" alt="Italian Trulli"></img>
            <label htmlFor="password">Password:</label>
          </div>
            <input
                type="text"
                id="name"
                value={name}
                required
              />
          <button type="submit">Enter</button>
        </form>
        
      )}
    </div>
  );
};

export default App;
