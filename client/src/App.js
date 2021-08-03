import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Login';
import Dashboard from './Dashboard'

const params = new URLSearchParams(window.location.hash.substr(1));
const accessToken = params.get("access_token")

console.log(accessToken)

function App() {
  console.log(accessToken)
  return (
    accessToken ? <Dashboard accessToken={accessToken} /> : <Login />
  );
}

export default App;