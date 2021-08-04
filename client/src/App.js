import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Login';
import Dashboard from './Dashboard'
import Navbar from './NavBar';
import {useHistory, Route, Switch, Link, Redirect} from 'react-router-dom'
import React, {useEffect, useState} from 'react';
import potato from './potato.jpg'

const params = new URLSearchParams(window.location.hash.substr(1));
const accessToken = params.get("access_token")

console.log({accessToken})

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [accessTokenHook, setAccessToken] =useState('')
  useEffect(() => {
    if(accessToken){
    setIsLoggedIn(true)
    setAccessToken(accessToken)
  }
},[accessToken])

console.log({accessTokenHook})
  console.log({accessToken})
  return (
    <div>
      <Navbar setIsLoggedIn={()=>setIsLoggedIn()} />
      <Switch>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route exact path="/dashboard">
          <Dashboard accessTokenHook={accessTokenHook} isLoggedIn={isLoggedIn} />
        </Route>
      </Switch>
      <img src={potato} alt='potato'/>
    </div>
    // accessToken ? <Dashboard accessToken={accessToken} /> : <Login />
  );
}

export default App;