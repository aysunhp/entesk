// import { useEffect, useState } from "react";
// import { useEffect } from "react";
import "./App.css";
// import Intro from "./components/Intro";
// import Avatar from "./components/Avatar";
// import Skills from "./components/Skills";
// import Counter from "./components/Counter";
import Button from "./components/Button";
// import { useState } from "react";

// import Message from './Message'
// const skillsArr = [
//   { name: "html+css", level: "advanced", bgc: "blue" },
//   { name: "javascript", level: "advanced", bgc: "red" },
//   { name: "web desing", level: "advanced", bgc: "green" },
//   {
//     name: "git and github",
//     level: "intermidate",
//     bgc: "yellow",
//   },
//   { name: "react", level: "advanced", bgc: "magenta" },
//   { name: "svelte", level: "beginner", bgc: "cyan" },
// ];

// eslint-disable-next-line react-hooks/rules-of-hooks

function App() {
  // const [advice, setAdvice] = useState("")
  // const [count,setCount]= useState(0)

  // async function getAdvice(){
  //   const  res=await fetch("https://api.adviceslip.com/advice")
  //   const data=await res.json()
  //   setAdvice(data.slip.advice)
  //   setCount(count+1)
  // }

  // useEffect(()=>{
  //   getAdvice()
  // },[])

  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://northwind.vercel.app/api/categories")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //       console.log(data);
  //     });
  // }, []);

  // console.log(data);

  return (
    <>
      {/* <div className="card">
        <Avatar />
        <div className="data">
          <Intro />
          <Skills skills={skillsArr} />
        </div>
      </div> */}
      {/* <button  onClick={getAdvice}> Get Advice</button> 
  <p>You have read <strong> <Message count={count}/></strong> advices</p>
     */}
      {/* <Counter /> */}
      {/* {Array.from({ length: 10 }, (_, i) => (
        <>
          <h1>A{i}</h1>
        </>
      ))} */}
      <Button />
    </>
  );
}

export default App;
