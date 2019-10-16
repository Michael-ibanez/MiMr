/*
   Basically this is our index.html, where our webapp starts at
   Here we can import things how we do normally! From here we should make
   routes to go to components and then include them in the function App()
   I made an example component that calls hello, they can be inserted anywhere.
   Its located in the file called example.js
*/

import React from 'react';
import logo from './logo.svg';
import './css/login.css'
import './js/login.js'
import {Example} from './example.js'

function App() {
  return (
    <div className="App">
      <div className="loginbox">
            <h1>Login Here</h1>
            <Example></Example>
            <form>
                <p>Username</p>
                <input type="text" name="" placeholder="Enter Username"/>
                <p>Password</p>
                <input type="password" name="" placeholder="Enter Password"/>
                <input type="submit" name="" value="Login"/>
            </form>
        </div>
    </div>
  );
}

export default App;
