import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import Test1 from './Test1';
// import Test2 from './Test2';
// import Test3 from './Test3';
// import Test4 from './Test4';
import Test5 from './Test5';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* App.js를 출력하는 부분 */}
    <Test5 />
    <Test5 name="react" style={{color: "red", fontSize: "2rem"}} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
