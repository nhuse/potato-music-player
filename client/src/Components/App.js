import '../Styling/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Login';
import Dashboard from './Dashboard'
import Navbar from './NavBar';
import { Route, Switch, Redirect} from 'react-router-dom'
import React, {useEffect, useState} from 'react';

const params = new URLSearchParams(window.location.hash.substr(1));
const accessToken = params.get("access_token")

function App() {
  const [accessTokenState, setAccessToken] = useState()
  useEffect(() => {
    if(accessToken){
    setAccessToken(accessToken)
    }
  },[accessToken])
  return (
    <div>
      <Navbar accessToken={accessTokenState} setAccessToken={setAccessToken} params={params}/>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard accessToken={accessTokenState} />
        </Route>
      </Switch>
      {accessTokenState ? <Redirect to="/dashboard" /> : <Redirect to="/login" /> }
    </div>
  );
}

export default App;