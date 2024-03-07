// import logo from './logo.svg';
import { Container } from 'react-bootstrap'
import './App.css'
import React from 'react'

function App() {
  return (
    <Container>
        <>
        
         <footer/>
        </>
    </Container>
  )
}

export default App


// import button from 'react';

// // function Home() {
// //   const[lightTheme, setLightTheme] = useState("true");

// //   const handleClick =()=> {
// //     setLightTheme(!lightTheme)

// //   }
// //   return(
// //     <div className={lightTheme?"light":"dark"}>
// //      <div>home{lightTheme? "light" : "dark"}</div>
// //      <button onClick={handleClick}>DarkMode</button>
// //     </div>
// //   )

  
 

// // }
// import { useState, useEffect } from "react";
// import ReactDOM from "react-dom/client";

// // function Timer() {
// //   const [count, setCount] = useState(0);

// //   useEffect(() => {
// //     setTimeout(() => {
// //       setCount((count) => count + 1);
// //     }, 1000);
// //   }, []); // <- add empty brackets here
  
// //   return <h1>I've rendered {count} times!</h1>;
// // }

// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(<Timer />);


// // export default Timer;


// const Form = () =>{
//     const [ name, setName] = useState("")
//     const [ age, setAge] = useState("")
//     const [ roll, setRoll] = useState("")
//     const [ data, setdata] = useState({
//       name: "",
//       age: "",
//       roll:""
//     })
//   }
//   const handleClick = (e) => {
//     e.preventDefualts()
//     console.log (handleClick)
//       setdata
//       nam
//     )
    
// }
// import './App.css';
// import { useState } from 'react';

// function App() {
//   // let num = 10 // wrong way
//   const [name, setName] = useState("faiza");
//   const [num, setNum] = useState(10);

//   const handleClick = () => {
//     setNum(`${num} hiii`)
//   }
// console.log(num)
// const obj = [
//   {id: 1, name: "xyz"},
//   {id:2, name: "abc"}
// ]
// console.log(num)
//   return (
//     <>
//     <button onClick={handleClick}>click me</button>
//     <h1>{num} hello</h1>
//     {obj.map((item) => (
//       <>
//       <h2>{item.id}</h2>
//       <h3>{item.name}</h3>
//       <hr />
//       </>
//       ))}
//     </>
//   );
// }