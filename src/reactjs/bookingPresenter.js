import React from "react";
import BookingView from "../views/bookingView.js";
import promiseNoData from "../promiseNoData";



export default function Booking (props){
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

  React.useEffect(wasCreatedACB, []);
  return (<div>{
          promiseNoData({
              promise: props.model.currentFlightPromiseState.promise,
              data: props.model.currentFlightPromiseState.data,
              error: props.model.currentFlightPromiseState.error
            }) ||
          <BookingView
          flightData = {props.model.currentFlightPromiseState.data

          }/>}
          </div>
        );

}
