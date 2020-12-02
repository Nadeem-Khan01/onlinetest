import React from "react";
import "./index.css";
import Base from "./Base.jsx";
import {Switch, Route} from "react-router-dom";
import Qus1 from "./Qus1.jsx";
import Qus2 from "./Qus2.jsx";
import Qus0 from "./Qus0.jsx";
import End from "./End.jsx";
import {Qus3} from "./Base";
import "./index.css";



const App = () => {
    return( 
        <>
    <Base />
    <Switch>
        
        <Route exact path="/qus1" component={Qus1} />
        <Route exact path="/" component={Qus0} />
        <Route exact path="/qus2" component={Qus2} />
        <Route exact path="/qus3" component={Qus3} />
        <Route exact path="/end" component={End} />
    </Switch>
    </>
    )
}
export default App;