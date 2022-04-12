import React from 'react';
import FlightModel from './FlightModel'
import {render} from "react-dom";
//const [model, setModel]= React.useState(new FlightModel());

//setModel("")
const App=require("./App.js").default;
function ReactRoot(){
  const [model, setModel]= React.useState(new FlightModel());
  //setModel(new FlightModel())
 /*React.useEffect(function onStartACB(){
    setModel()
      //bigPromise.then(function initModelACB(data){setModel(data)}).catch(function errACB(data){console.log(data)})
  }, []);
  */
  
  return  <App model={model}/>;
}
render(
  <ReactRoot/>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
