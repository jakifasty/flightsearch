import resolvePromise from "./resolvePromise.js";

//TODO check if how information is saved in model should be changed
class FlightModel {
  constructor() {

    this.fromAirport = "";
    this.toAirport = "";

    this.fromDate = "";
    this.returnDate = "";

    this.amountAdults = 1
    this.amountYouths = 0

    this.tripType = "One"

    this.searchResultsPromiseState = {};
    this.observers = [];
    this.searchParams = { query: "", type: "" };


    var date = new Date()
    this.fromDate= date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()
    this.returnDate = (parseInt(this.fromDate.split("-")[0])+2)+this.fromDate.slice(this.fromDate.indexOf("-"),this.fromDate.length)

  }

  //TODO add airports for returing flights

  setFromAirport(airport) {
    this.fromAirport = airport
    var payload = { fromAirport: airport }
    this.notifyObservers(payload)
  }

  setToAirport(airport) {
    this.toAirport = airport
    var payload = { toAirport: airport }
    this.notifyObservers(payload)
  }

  setFromDate(date) {
    this.fromDate = date
    var payload = { fromDate: date }
    this.notifyObservers(payload)
  }

  setReturnDate(date) {
    this.returnDate = date
    var payload = { returnDate: date }
    this.notifyObservers(payload)
  }

  setAmountAdults(nr) {
    this.amountAdults = nr
    var payload = { amountAdults: nr }
    this.notifyObservers(payload)

  }
  setAmountYouths(nr) {
    this.amountYouths = nr
    var payload = { amountYouths: nr }
    this.notifyObservers(payload)
  }

  setTripType(type) {
    this.tripType = type
    var payload = { tripType: type }
    this.notifyObservers(payload)
  }

  setSearchQuery(q) {
    this.searchParams.query = q;
    this.notifyObservers();
  }
  setSearchType(t) {
    this.searchParams.type = t;
    this.notifyObservers();
  }

  doSearch(params) {
    const theModel = this;
    function notifyACB() { theModel.notifyObservers(null); };
    if (params) {
      resolvePromise(null, this.searchResultsPromiseState, notifyACB);
    }
    else {
      resolvePromise(null, this.searchResultsPromiseState, notifyACB);
    }
  }

  addObserver(callback) {
    this.observers.push(callback);
  }

  removeObserver(callback) {
    this.observers = this.observers.filter(function (x) {
      if (x === callback) {
        return false
      }
      return true;
    }
    )
  }

  notifyObservers(payload) {
    function invokeObserverCB(obs) {
      try {
        obs(payload);
      } catch (err) {
        console.log(err);
      }
    }
    this.observers.forEach(invokeObserverCB);
  }

}

export default FlightModel;
