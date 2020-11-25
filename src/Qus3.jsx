import React from 'react';
import {NavLink} from "react-router-dom";
 const Qus3= ()=>{
     return(
         <>
        <h1>this is question 3</h1>
        <NavLink to={"/end"}>
            <button
          style={{ textAlign: "center", marginTop: "30px", backgroundColor: "green", padding: "5px 15px 5px 15px", border: "none", borderRadius: "4px", fontWeight: "6", fontSize: "19px" }}
          className="btn btn-primary mt-2"
         
        >Submit</button>
      </NavLink>
      </>
        )
 } 
 export default Qus3;