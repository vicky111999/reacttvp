import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Vicky from './App';
//import reportWebVitals from './reportWebVitals';
// var jso={
//   rno:1001,
//   sname:"vicky",
//   subjects:{tamil:100,
//   english:44,
//   maths:32},
//   hobbies:["cricket","tennies"]
// }

var arr=[{sno:1,sname:"vicky",mark:99},
   {sno:2,sname:"priya",mark:90},
   {sno:3,sname:"tamil",mark:28}]
   var json={rno:1,sname:"tamil",mark:100}
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Vicky myarr={arr} my={json} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
