import React from "react"
import DetailsView from "../views/detailsView.js";
import promiseNoData from "../promiseNoData"

export default function Details(props) {
  const [, setPromiseData]=React.useState(null);
  const [, setPromise]=React.useState(null);
  const [, setError]=React.useState(null);
  const [, setCurrentFlight] = React.useState(null);

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
          <DetailsView
          flightData = {props.model.currentFlightPromiseState.data

          }/>}
          </div>
        );


}