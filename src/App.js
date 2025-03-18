function App()
{
  var rate=5000;
  return(
    <>
    {(rate>=10000 && "10%") || (rate>=7500 && "7%") || (rate>=5000 && "3%") || (rate===5000 && "1%")}
    </>
  )
}
export default App
/*function App()
{
  var co=189;
  return(
    <>
    {(co>=195 && " annauniversity") || (co>=190 && "REC") || (co>=185 && "CIT") || (co>=180 && "PSG") || "any college"}
    </>
  )
}
  export default App

/*function App()
{
  var p=2;
  return(
    <>
    {(p===5 && p+"WINNER") || (p===4 && p+"RUNNER") || (p<=3 && p+"LOSER")}
    </>
  )
}
export default App
/*function App()
{
  var bill=401;
  var a=0;

  return(
    <>
    <h1>EB BILL CALCULATION</h1>
    {(bill<=100 && "free") || (bill<=200 && "rs.2") || (bill<=400 && "rs.3")|| (bill<=500 && "rs.4") || (bill>500 && "rs.7")}{a=bill*}
    </>
  )
}
export default App
/*function Vicky()
{
  var arr=[11,22,33,44,55,66,77]
  var sum=0;
  for (var i=0;i<arr.length;i++)
  {
    sum=sum+arr[i]
  }
  return(
    <>
    <h1>index:0{arr[0]}</h1>
    <h1>index:1{arr[1]}</h1>
    <h1>index:2{arr[2]}</h1>
    <h1>index:3{arr[3]}</h1>
    <h1>index:4{arr[4]}</h1>
    <h1>index:5{arr[5]}</h1>
    <h1>index:6{arr[6]}</h1>
    <h1>sum of arry:{sum}</h1>

    </>
  )
}
export default Vicky
/*function Vicky ()
{
  var m1=100;
  var m2=100;
  var m3=34;
  var m4=100;
  var m5=100;
  var avg=(m1+m2+m3+m4+m5)/5;
  return(
    <>

    {(m1>34 && m2>34 && m3>34 && m4>34 && m5>34 && ((avg>=85 && "outstanding") || (avg>=75 && "excellent") || (avg>=65 && "very good") || "fair")) || "no grade beauce fail"}
  </>
  )
}
export default Vicky
/*function App()
{
  var avg=70;
  return (
    <>
    {(avg>=85 && "Outstanding") || (avg>=75 && "Excellent") || (avg>=65 && "very good") || (avg>=55 && "good") || "FAIR"}
    </>
  )
} 
export default App
/*function App()
{
  var n=-10;
  return(
    <>
    {(n>0 && n+" is +ve") || (n<0 && n+" is -ve") || (n===0 && n+" is zero")}
    </>
  )
}
export default App
/*function App()
{
  var year=2000;
  return(
      <>
      <h1>{(year%4===0 && year+" is leap year") || year+" is not leap year"}</h1>
      </>
  )
}
export default App
/*function App ()
{
  var age=11;
  return(
    <h1>{(age>=18 && "eligible for vote") || "not eligible for vote"}</h1>
  )
}
export default App
/*function App ()
{
  var n=-10;
  return (
    <>
    <h1>{(n>0 && n+" + ve") || n+" - ve"}</h1>
    </>
  )
}
export default App
/*function Vicky()
{
  var n1=20;
  var n2=3;
  return(
    <h1>{(n1>n2 &&  n1+"gt") || n2+"gt"}</h1>
  )
}
export default Vicky
/*function Vicky()
{
  var a=100;
  var b=100;
  return(
    <>
    <h1>React Expression</h1>
    <h1>a value:{a}</h1>
    <h1>b value:{b}</h1>
    <h1>Total value:{a+b}</h1>
    </>
  )
}
export default Vicky
/*function Vicky()
  {
    return(
      <>
      <h1>this is vicky components</h1>
      </>
    )
  }

  function App()
  {
    return(
      <>
      <Vicky></Vicky>
      <h1>this is App components</h1>
      </>
    ) 
  }
export default App

/*import React from "react";
class App extends React.Component
{
  render()
  {
    return(
      <>
      <h1>welcome</h1>
      <h2>class components</h2>
      <b>this is bold</b><br></br>
      <strike>this is strike</strike>  
      </>
    )
  }
}
export default App
/*function App()
{
  return(
    <>
    <h1>welcome to React first App</h1>
    <h1>welcome to React first App</h1>
    <p>jhwijijeij j iejw ooied i eoihwoidoiidj iejrpofpporpfporkpofjpojijicjmj</p>
    </>
  )
}
export default App
/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/