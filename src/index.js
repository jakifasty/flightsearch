import React from 'react';
import FlightModel from './FlightModel'
import {render} from "react-dom";
import { useCookies } from 'react-cookie';
import { v4 as uuidv4 } from 'uuid';

//const [model, setModel]= React.useState(new FlightModel());
import {firebaseSessionPromise, checkSessionId, updateFirbase, updateFirebaseFromModel, updateModelFromFirebase} from "./firebaseModel.js"
//setModel("")
const App=require("./App.js").default;

function hours (nrHours){
  const twoHours = 1000 * 60 * 60 * nrHours;
}
var now = Date.now();
const twoHoursAgo = now - 2 * 60 * 60 * 1000; //2 hours

function ReactRoot(){
  const [model, setModel]= React.useState(new FlightModel());
  const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);
  updateFirebaseFromModel(model);
  React.useEffect(function onStartACB(){
    if(cookies.sessionId){
      checkSessionId(cookies.sessionId).once("value").then(
        response => {
          //console.log("Last time session was active: "+ response.val().timestamp +
          //            " - Time two hours ago: " + twoHoursAgo + " = " + (response.val().timestamp-twoHoursAgo));
          //timestamp is the time when session was active. twoHoursAgo is the timestamp as it was 2 hours ago.
          //if the timestamp of the session is lesser than that of two hours ago the session will no longer be valid.
          if(!response.exists() && response.val().timestamp < twoHoursAgo){
            removeCookie('sessionId');
            let sessionId = uuidv4();
            setCookie('sessionId', sessionId, { maxAge: hours(2) })
            model.setSessionId(sessionId);
            updateModelFromFirebase(model);
            model.notifyNewSession();
            updateFirbase();
          }else{
            console.log(response.val());
            model.setSessionId(cookies.sessionId);
            updateModelFromFirebase(model);
            model.notifyContinueSession();
            updateFirbase();
          }})
    }else{
      //console.log("no previous cookie in browser, creates new cookie")
      let sessionId = uuidv4();
      setCookie('sessionId', sessionId, { maxAge: hours(10) })
      model.setSessionId(sessionId);
      model.notifyNewSession();
    }
  }, []);

  return  <App model={model}/>;
}
render(
  <ReactRoot/>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
