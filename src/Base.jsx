import React, { useState, useRef } from "react";
import "./index.css";
import {NavLink} from "react-router-dom";

const Base = () => {

  const [time, setTime] = useState();
  const [count, setCount] = useState("(not started yet)");
  const [swt, setSwt] = useState(1);
  const [conf, setConf] = useState();
  const [test, setTest] = useState(false);
  const buttonRef = useRef();
  var myinter = ""
  const update = () => {
    setTime(new Date().toLocaleTimeString())
  }
  setInterval(update, 1000)
  var i = 0;
  const startf = () => {

    var countu = 10 - i
    if (countu > 0) {
      setCount(countu)
      i = i + 1
    } else {
      alert("your exam time is end")
      clearInterval(myinter);
      setTest(true)
      setConf("Your test hase been ended......and also auto submitted!!!")
      document.getElementById('btnclick').click();
      

    }
  }

  const start = () => {
    if (swt <= 1) {
      buttonRef.current.disabled = true;
      setSwt(swt + 2)
      myinter = setInterval(startf, 1000)
      setConf("Your test hase been started......")
   
     
    }
  }
  
  return (
    <>
     

      <h3 className="Toptime">Current Time:{time}</h3>
      <h3 className="Topcount">Counter:You have total 10min where {count} is remaining.....</h3>
      <h3>{conf}</h3>
      <div className="start">
        <NavLink to={"/qus1"}>
            <button
          style={{ textAlign: "center", marginTop: "30px", backgroundColor: "green", padding: "5px 15px 5px 15px", border: "none", borderRadius: "4px", fontWeight: "6", fontSize: "19px" }}
          className="btn btn-primary mt-2"
          ref={buttonRef}
          onClick={start}
        > Start Test</button>
      </NavLink>

      </div>
      <hr style={{ width: "90%", margin: "auto" }} />
      {
          test?
          <NavLink exact to={"/end"} ><button id="btnclick" style={{display: "none"}}>click</button></NavLink>:
          null
      }
     </>
       )
} 

const Qus3= ()=>{
  return(
      <>
     <h1>this is question 3</h1>
     <p>1. The word which means "house" is:</p><br />
         <input type="radio" name="1.The word which means house is" value="maison" />maison <br />
         <input type="radio" name="1.The word which means house is" value="quatre" />quatre<br/>
         <input type="radio" name="1.The word which means house is" value="soleil" />soleil<br />
         <input type="radio" name="1.The word which means house is" value="poisson" />poisson<br />
     <NavLink to={"/end"}>
         <button
       style={{ textAlign: "center", marginTop: "30px", backgroundColor: "green", padding: "5px 15px 5px 15px", border: "none", borderRadius: "4px", fontWeight: "6", fontSize: "19px" }}
       className="btn btn-primary mt-2"
      
     >Submit</button>
   </NavLink>
   </>
  )
}
  
export default Base;
export {Qus3};