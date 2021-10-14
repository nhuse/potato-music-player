import React from 'react';
import ReactDOM from 'react-dom';
import './Styling/index.css';
import App from './Components/App';
import { HashRouter, Route} from 'react-router-dom'

ReactDOM.render(
  <HashRouter basename="https://nhuse.github.io/potato-music-player/">
      <Route path="/" component={App} />
  </HashRouter>,
  document.getElementById('root')
);
