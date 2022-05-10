import React from "react";
import ConfirmationView from "../views/confirmationView.js";
import resolvePromise from "../resolvePromise";
import promiseNoData from "../promiseNoData";



export default function Confirmation (props){

  const [, setPromiseData]=React.useState(null);
  const [, setPromise]=React.useState(null);
  const [, setError]=React.useState(null);


  function observerACB() {
    setPromiseData(props.model.currentFlightPromiseState.data)
    setPromise(props.model.currentFlightPromiseState.promise)
    setPromise(props.model.currentFlightPromiseState.error)
  }

  function wasCreatedACB() {
    //var airports = require('../data/airports.json')
    //setData(airports)
    observerACB();
    props.model.addObserver(observerACB);
    return function isTakenDownACB() {
      props.model.removeObserver(observerACB);
    }
  }

  //console.log("Loading confirmation");

  React.useEffect(wasCreatedACB, []);
  return (<div>{
          promiseNoData({
              promise: props.model.currentFlightPromiseState.promise,
              data: props.model.currentFlightPromiseState.data,
              error: props.model.currentFlightPromiseState.error
            }) ||
          <ConfirmationView
          flightData = {props.model.currentFlightPromiseState.data}



          />}
          </div>
        );

}
