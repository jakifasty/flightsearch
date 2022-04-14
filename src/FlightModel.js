import resolvePromise from "./resolvePromise.js";
//import {getFlightDetails} from "./flightSearches"
/* This is an example of a JavaScript class.
   The Model keeps only abstract data and has no notions of graohics or interaction
*/

function isValid(id){
  return (typeof(id) == "number")
}

class FlightModel{
    constructor(){
        this.oneWay = "One";
        this.roundTrip = "Round";
        this.fromAirport = "LHR";
        this.destAirport = "JFK";
        this.observers = [];

        this.currentFlightPromiseState = {};
        this.searchResultsPromiseState = {};
        this.searchParams = {query: "", type: ""};
        this.amountOfAdults = 1
        this.amountOfYouths = 0
        this.tripType = "One"
        this.data = {slices:
                      [
                        {
                          origin: this.fromAirport,
                          destination: this.destAirport,
                          departure_date: '2022-04-24',
                        },
                      ],
                      passengers: [
                        {
                          type: 'adult',
                        },
                        {
                          age: 14,
                        },
                      ],
                    cabin_class: 'economy',
                  };
        this.roundtripData = {slices:
                  [
                    {
                      origin: 'LHR',
                      destination: 'JFK',
                      departure_date: "2022-10-10T17:22:07.481Z"
                    },
                    {
                      origin: 'JFK',
                      destination: 'LHR',
                      departure_date: "2022-10-18T17:22:07.481Z"
                    },
                  ],
                  passengers: [{ "type": "adult" }],
                  cabin_class: null
                }
    }

    /*setCurrentFlight(id){
      let myModel = this;

      function notifyACB() {
        myModel.notifyObservers(null);
      }

      if(!id || id==this.currentDish || !isValid(id)) return;

      resolvePromise(getFlightDetails(id), this.currentFlightPromiseState, notifyACB);

      this.currentFlight = id;

      this.notifyObservers({setCurrentFlight: id})
    }*/

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

    setToAirport(airport){
      this.toAirport = airport
      var payload = {toAirport: airport}
      this.notifyObservers(payload)
  }

    setAmountAdults(nr){
        this.amountOfAdults = nr
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
       this.observers.push(callback);
     }
     removeObserver(callback){
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
