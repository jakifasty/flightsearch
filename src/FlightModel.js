import resolvePromise from "./resolvePromise.js";
import {searchFlights, getFlightDetails} from "./flightSource.js"
/* This is an example of a JavaScript class.
   The Model keeps only abstract data and has no notions of graohics or interaction
*/

function isValid(id){
  return (typeof(id) == "number")
}

class FlightModel{
    constructor(){
        this.fromAirport = "";
        this.toAirport = "";
        this.observers = [];

        this.currentFlightPromiseState = {};
        this.searchResultsPromiseState = {};
        this.searchParams = {query: "", type: ""};
        this.amountOfAdults = 1
        this.amountOfYouths = 0
        this.tripType = "One"
    }

    setTripType(type){
        this.tripType = type
        var payload = {tripType: type}
        this.notifyObservers(payload)
    }

    setFromAirport(airport){
        this.fromAirport = airport
        var payload = {fromAirport: airport}
        this.notifyObservers(payload)
    }

    setAmountAdults(nr){
        this.amountOfAdults = nr
        console.log("Set amount adults to")
        console.log(this.amountOfAdults)
        var payload = {amountAdults: nr}
        this.notifyObservers(payload)
    }
    setAmountYouths(nr){
        this.amountOfYouths = nr
        var payload = {amountYouths: nr}
        this.notifyObservers(payload)
    }


     setSearchQuery(q){
       this.searchParams.query = q;
       this.notifyObservers();
     }
     setSearchType(t){
       this.searchParams.type = t;
       this.notifyObservers();
     }
     doSearch(params){
       const theModel = this;
       function notifyACB() {theModel.notifyObservers(null);};
       if(params){
         resolvePromise(searchFlights(this.searchParams), this.searchResultsPromiseState, notifyACB);
       }
       else{
         resolvePromise(searchFlights(params), this.searchResultsPromiseState, notifyACB);
       }
     }
     addObserver(callback){
       this.observers = [...this.observers, callback];
     }
     removeObserver(callback){
        console.log(callback)
        console.log(this.observers)
        this.observers = this.observers.filter(function(x){
            if(x === callback){
                return false
            }
            return true;
            }
        )
    }
    setCurrentFlight(id){
      let myModel = this;

      function notifyACB(){
        myModel.notifyObservers(null);
      }

      if(!id || id === this.currentFlight || !isValid(id)) return;

      resolvePromise(getFlightDetails(id), this.currentFlightPromiseState, notifyACB);

      this.currentFlight = id;

      this.notifyObservers({setcurrentFlight: id});
    }
    notifyObservers(payload){
      function invokeObserverCB(obs){
        try{
          obs(payload);
        }catch (err){
          console.log(err);
        }
      }
      this.observers.forEach(invokeObserverCB);
    }

}

export default FlightModel;
