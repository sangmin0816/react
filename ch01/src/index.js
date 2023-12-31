import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import Test1 from './Test1';
// import Test2 from './Test2';
// import Test3 from './Test3';
// import Test4 from './Test4';
// import Test6 from './Test6';
// import Test7 from './Test7';
// import Test8 from './Test8';
import Test9 from './Test9';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* App.js를 출력하는 부분 */}
    <Test9 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
