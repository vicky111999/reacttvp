 import {useEffect} from 'react'
 function App()
 {
  useEffect(()=>{
  document.title="vicky" 
  })
  return(
    <>
    <h1>useEffect hook</h1>
    {document.title}   
    { /* previous title stored shown  */ }
    </>
  )
 }
 export default App
/*import {useState} from 'react'
function App()
{
  const [name,setName]=useState("vignesh")
  const dis=(e)=>{
    setName(e.target.value)
    console.log(e.target.value)
  }
  const show=()=>{
    setName("tamil")
  }
  return(
      <>
      <h1>react hook</h1>
      <input type="text" value={name} onChange={(e)=>dis(e)}></input>
      <h1>{name}</h1>
      <button onClick={show}>change</button>
      </>
  )
}
export default App
/*function App()
{console.log(undefined+1)
  return(
    <></>
  )
}
export default App
/*function App()
{
  const dis=(e)=>{
    document.getElementById("res").innerHTML= e.target.tagName+"typing.."+"type:"+e.target.type
  }
  return(
      <>
      <input type="text" onChange={(e)=>dis(e)}></input>
      <input type="password" onChange={(e)=>dis(e)}></input>
      <input type="file" onChange={(e)=>dis(e)}></input>
      <input type="number" onChange={(e)=>dis(e)}></input>
      <textarea onChange={(e)=>dis(e)}></textarea>
      <select onChange={(e)=>dis(e)}>
          <option>mon</option>
          <option>tues</option>
      
      </select>
      <div id="res"></div>
      </>
  )
}
export default App
/*function App()
{
  const show=(e)=>{
  e.preventDefault() //without refresh 
  console.log("submit button or button pressed")  

}
var nac=0,pwc=0;
const dis=(e)=>{
  if(e.target.name==="na")
    nac+=1
  if(e.target.name==="pw")
    pwc+=1

document.getElementById("r1").innerHTML=nac
document.getElementById("r2").innerHTML=pwc
}
  return(
<>
<form onSubmit={show}>
<input type="text" onChange={(e)=>dis(e)} name="na" placeholder="Enter Name" ></input><br></br>
<input type="password" onChange={(e)=>dis(e)} name="pw" placeholder="Enter password" ></input>
<input type="submit"></input>
<input type="button" value="clickme" ></input>
<input type="button"></input>
<button><b>clickme</b></button>
<div id="r1"></div>
<div id="r2"></div>
</form>
</>
  )
}
export default App
/*function App()
{
  var c=0;
  const dis=(e)=>{
    e.target.style.backgroundColor="red";
  e.target.value=parseInt(e.target.value)+1
  }
  const dis1=(e)=>{
    e.target.style.backgroundColor="green";

  }
  return(
    <>
    <h1>onBlur event</h1>

    <input type="text" onBlur={(e)=>dis(e)} onFocus={(e)=>dis1(e)} value={c}></input>
    <input type="text" onBlur={(e)=>dis(e)} onFocus={(e)=>dis1(e)} value={c}></input>
    <input type="text" onBlur={(e)=>dis(e)} onFocus={(e)=>dis1(e)} value={c}></input>
    </>

  )
}
export default App
/*function App()
{
  const dis=(e)=>{

  
  document.getElementById("t1").style.backgroundColor="white"
  document.getElementById("t2").style.backgroundColor="white"
  document.getElementById("t3").style.backgroundColor="white"

  if(e.target.id==="t1")
    document.getElementById("t1").style.backgroundColor="red"

    if(e.target.id==="t2")
      document.getElementById("t2").style.backgroundColor="red"

    if(e.target.id==="t3")
      document.getElementById("t3").style.backgroundColor="red"

}
  return(
    <>
    <h1>onFocus</h1>

    <input type="text" onFocus={(e)=>dis(e)} id="t1"></input>
    <input type="text" onFocus={(e)=>dis(e)} id="t2"></input>
    <input type="text" onFocus={(e)=>dis(e)} id="t3"></input>
    </>
    
  )
}
export default App
/*function App()
{
  const show=()=>{
    if(document.getElementById("hid").type==="hidden")
      document.getElementById("hid").type="text"
    else
    document.getElementById("hid").type="hidden"
    
  }
  const copy=()=>{
    document.getElementById("hid").value=document.getElementById("ph").value

  }
  return(<>
  <input type="text" onChange={copy} id="ph" placeholder="enter phone"></input>
  <input type="hidden" value="" id="hid"></input>
  <input type="button" onClick={show} value="show/hide"></input>
  </>

  )
}
export default App
/*function App()
{
  return(
      <form>
        <input type="text" placeholder="enter name"></input>
        <input type="number" placeholder="enter no"></input>
        <input type="password" placeholder="enter password"></input>
        <br></br>
        <input type="radio" name="gen" checked></input>male
        <input type="radio" name="gen" ></input>female
        <input type="radio" name="gen" ></input>other
        <br></br>
        select course:
        <input type="checkbox"></input>c 
        <input type="checkbox"></input>c++ 
        <input type="checkbox"></input>phython 
        <input type="checkbox"></input>javascript
        enter address:
        <textarea cols="30" rows="7"></textarea>
        <br></br>
        <select>
        <option>sunday</option>
        <option>monday</option>
        <option>tuesday</option>
        <option>wednesday</option>
        <option>thursday</option>
        <option>friday</option>
        </select>
        email:<input type="email"></input>
        select DOB:
        <input type="date"></input>
        <input type="time"></input>
        <input type="week"></input>
        <input type="file"></input>
        <input type="range" min="0" max="7"></input>
        <input type="hidden" value="100"></input>
        <input type="reset"></input>
        <input type="submit"></input>
        <input type="button" value="clickme"></input>
      </form>
  )
}
export default App
/* import React from "react";
 class App extends React.Component
 {
  constructor(props)
  {
    super()
    this.state=props.my
    this.state={      //simple state     keyword(this.state) 
       rno:1001,
       sname:"vicky",
       mark:98
     } 
  }
  change =()=> {
    this.setState({mark:100,sname:"vignesh"})
  }
  render()
  {
    return(
        <>
        <h1>props using class components</h1>
        {this.props.myarr.map((s)=> <><br></br>{s.sno} {s.sname} {s.mark}</>)}
       <h1>simple state</h1>
       <br></br> {this.state.rno}
        {this.state.sname} 
        {this.state.mark}
       <button onClick={this.change}>change</button>
        </>

    )
  }
 } 
 export default App
/*function Vicky(props)
{
  return(
    <>  
        {props.myarr.map((s)=><>{s.sno} {s.sname} {s.mark}</>)}
    </>
    
  )
}
export default Vicky
/*function Vicky(props)
{
  var tot=0;
  var subnames=[];
  for (var v in props.myobject.subjects)
  {
     tot=tot+props.myobject.subjects[v]
     subnames.push(v)
    console.log(v)
  }
  return(
    <>
    <h1>nested json props</h1>
    <h1>student roll number:{props.myobject.rno}</h1>
    {/* <h1>student name:{props.myobject.sname}</h1>
    <h1>student mark:{props.myobject.subjects.tamil}</h1>
    <h1>student mark:{props.myobject.subjects["english"]}</h1>
    // <h1>student mark:{props.myobject.subjects["maths"]}</h1> */
 
//   <ol>  {subnames.map((s)=><li>{s} mark:{props.myobject.subjects[v]}</li>)}</ol>
  
//   <ol> 
//     {props.myobject.hobbies.map((s)=><li>{s}</li>)}
//   </ol>

//     <h1>total:{tot}</h1>
//   </>
//   )
// }
// export default Vicky
/*function Vicky(props)
{
  return(
    <>
    <h1>student roll number:{props.rno}</h1>
    <h1>student name:{props.sname}</h1>
    <h1>student mark:{props.mark}</h1>
  </>
  )
}
export default Vicky
/*import './App.css'
function Vicky()
{
  //1.simple jsx
  const v1=<h1>welcome to header1</h1>
  //2.multiple tags
  const v2=<><h1>head1</h1><h2>head2</h2></>
  //3.expression
  var a=10;
  var b=20;
  const v3=<>{a+b}</>
  //4. element must be closed
var v4=<hr/>
//5.using attributes
var v5=<h2 id="myid" className="myclass">This is css</h2>
  //6.inline css
  var v6=<h1 style={{backgroundColor:'red',color:'yellow'}}>HI!!</h1>
//7.external css
var mystyle={
  backgroundColor:"yellow",
  color:"green",
  fontSize:"20px",
  textTransform:"uppercase"
}
  return(
    <>
    <h1>React JSX - javascript & XML - allow html code in react</h1>
    sample:{v1}
    multiple tag:{v2}
    total:{v3}
    {v4}
    {v5}
    {v6}
    <h5 style={mystyle}>welcome</h5>
    <h5 style={mystyle}>welcome1</h5>
    <h5 style={mystyle}>welcome3</h5>
    <h5 style={mystyle}>welcome4</h5>
    <h5 style={mystyle}>welcome5</h5>
    <h6>nsidcnn</h6>
    <h6>nsidcnn</h6>
    <h6>nsidcnn</h6>
    <h6>nsidcnn</h6>

    </>
  )
}
export default Vicky
/*import React from 'react'
import Success from './components/Success';
import Failure from './components/Failure';
import ph1 from './Images/download.jpg'
import ph2 from './Images/download2.jpg'
import ph3 from './Images/images.jpg'
import { k1, k2, k3, k4, k5, k6 } from './components/Commonvar';

function App() {
  var user=false;
  return (
  <>
  <h1>k1 value:{k1}</h1>
  <h1>k2 value:{k2}</h1>
  <h1>k3 value:{k3}</h1>
  <h1>{k4}{k5}{k6}</h1>
  <img src={ph1} alt="wrong path"></img>
  <img src={ph2} alt="wrong path"></img>
  <img src={ph3} alt="wrong path"></img>
  <h1>If user is Online</h1>
    {user===true ? <Success /> : <Failure />}
  </>
  )
}
export default App
/*function Vicky()
{
  var [v1,v2,...v3]=[11,22,33,44,55,66]
  return(
    {typeof(v1)}
    {typeof(v2)}
    {typeof(v3)}
    {Array.isArray(v3) && "is array"}
  )
}
export default Vicky
/*function Vicky()
{
  var arr=[11,11,11];
  var json={name:"vicky",mark:20};
  var n1=11;
  var b=true;
  return(
    <>
    {typeof(arr)}<br></br>
    {typeof(json)}<br></br>
    {typeof(n1)}<br></br>
    {typeof(b)}
    <h1>Find Array</h1>
    {Array.isArray(arr) && "is array"}<br></br>
    {(Array.isArray(json) && "is array") || "is not array"}
    </>
  )
}
export default Vicky
/*function Vicky()
{
  var arr=[-10,-10,10,20,20]
  var sum=0;
  var big=[0];
  var even=0;
  var neg=0;
  return(
    <>
  <h1 style={{disply:"none"}}>{arr.map((item)=>sum=sum+item)}</h1>
    <h1>sum of array:{sum}</h1>
   <h2>biggest value</h2>
    {arr.map((item)=>big=big<item)}
    <h2>big:{big}</h2>
    {arr.map((item)=>big<item && <>{big=item}</>)}
    <h1>{big}</h1>
    {arr.map((item)=>big<item && <>{big=item}</>)}
<h1>count even no</h1>
{arr.map((item)=>item%2===0 && <>{even+=1}</>)}
<h1>even:{even}</h1>
{arr.map((item)=>item<0 && <>{neg+=1}</>)}
<h1>even:{neg}</h1>

    </>
  )
}
export default Vicky
/*function Vicky()
{
  var arr=[11,22,33]
  var sum=0;
  for(i=0;i<=arr.length;i++)
  {
    sum=sum+arr[i];
  }
  return (
    <>
    <h1>sum:{sum}</h1>
    </>
  )
}
export default
/*function Vicky()
{
  var arr=[11,22,33,44,55]
  

  return(
    <>
    <ol type="1">
    {arr.map((item)=>{(item%2===0 && <li>{item}</li>))}
  </ol>
  </>
  )
}
export default Vicky
/*function Vicky ()
{
  var sub={
    rno:1991,
    sname:"vicky",
    mark:{tamil:38,english:44,maths:77}
  }
  const dis=({rno,sname,mark:{tamil,english,maths}})=>
  {
    return[rno,sname,tamil,english,maths]
  }
  var [v1,v2,v3,v4,v5]=dis(sub)
  return (
    <>
    <h1>Object destructing</h1>
    student no:{v1}<br></br>
    student name:{v2}<br></br>
    student mark:<br></br>
            tamil:{v3}<br></br>
            english:{v4}<br></br>
            maths:{v5}<br></br>
    </>
  )
}
export default Vicky
/*function Vicky()
{
  const show=(a,b)=>
  {
    var add=a+b;
    var sub=a-b;
    var mul=a*b;
    var div=a/b;
    return [add,sub,mul,div]
  }
  var [a1,a2,a3,a4]=show(11,22)
  return(
    <>
    Addition:{a1}<br></br>
    substraction:{a2}<br></br>
    multiplication:{a3}<br></br>
    division:{a4}
    </>
  )
}
export default Vicky
/*function Vicky ()
{
  var [v1,,v2,,...v3]=[11,22,33,44,55,66,77,88]
  return (
    <>
    <h1>Array destructing:To grt value from source</h1>
    value:{v1}
    <br></br>
    value 2:{v2}
    <br></br>
    value:{v3}
    </>
  )
}
export default Vicky
/*function Vicky()

{
  const show=(a,b,c)=>{
    if (true)
    {
      var k=100;
      k++;
    }
    document.getElementById("r1").innerHTML="hi"+(a+b+c+k)
  }
  return(
<>
    <button onClick={()=>show(10,10,10)}>click me</button>
    <div id="r1"></div>
</>
  )
}
export default Vicky
/*function Vicky(
  {
    const show=()=>{
      document.getElementById("r1").innerHTML="HI"
    }
    function dis()
    {
      document.getElementById("r2").innerHTML="hi"
    }
    return (
      <>
      <h1>without parameter</h1>
      <button onClick={dis}>click me</button>
      <button onClick={()=>dis()}>click me</button>
      <button onClick={show}>click me</button>
      <div id="r1"></div>
      <div id="r2"></div>
      
      </>
    )
  }
  export default Vicky
/*function Vicky()
{
  var stud=[{rno:1001,name:"vicky",mark:100},
            {rno:1002,name:"preethi",mark:98},
            {rno:1003,name:"prabha",mark:38}
  ]
  return(
    <>
    <h1>student no:{stud[0].rno}</h1>
    <h1>student name:{stud[0].name}</h1>
    <h1>student mark:{stud[0].mark}</h1>
    <h1>student no:{stud[1].rno}</h1>
    <h1>student name:{stud[1].name}</h1>
    <h1>student mark:{stud[1].mark}</h1>
    </>
  )
}
export default Vicky
/*function Vicky()
{
  var stud={
    rno:1001,
    sname:"vicky",
    subject:[77,88,99]
  }
  return(
    <>
    <h1>student mark:{stud.subject[0]}</h1>
    <h1>student mark:{stud.subject[1]}</h1>
    <h1>student mark:{stud.subject[2]}</h1>
    </>
  )
}
export default Vicky
/*function Vicky ()
{
  var stud={
    rno:1001,
    sname:"vicky",
    subject:{mark1:100,
    mark2:38,
    mark3:40}
  }
  return(
    <>
    <h1>student no:{stud.rno}</h1>
    <h1>student name:{stud.sname}</h1>
    <h1>student mark1:{stud.subject["mark1"]}</h1>
    <h1>student mark2:{stud.subject["mark2"]}</h1>
    <h1>student mark3:{stud.subject["mark3"]}</h1>
    </>
  )
}
export default Vicky
/*function App()
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