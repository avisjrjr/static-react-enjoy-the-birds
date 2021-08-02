import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Sidebar from './Sidebar.js';
import Reviews from './Reviews';
import Sentimentanalysis from './Sentimentanalysis';
import Websitevisitors from './Websitevisitors';
import Averagerating from './Averagerating';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <div class='wrapper'>
    <Sidebar />
    <Reviews />
    <Sentimentanalysis />
    <Websitevisitors />
    <Averagerating />
    {/* <App /> */}
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
