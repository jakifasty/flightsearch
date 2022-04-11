import resolvePromise from "./resolvePromise.js";
import {createPassenger, createPassengers} from "./utils.js"
/* This is an example of a JavaScript class.
   The Model keeps only abstract data and has no notions of graohics or interaction
*/

class FlightModel{
    constructor(){
        this.fromAirport = "LHR";
        this.destAirport = "JFK";
        this.deptDate = "2022-04-24"
        this.passengers = [];
        this.cabin_class = "economy";
        this.observers = [];
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
                          departure_date: this.deptDate,
                        },
                      ],
                      passengers: this.passengers,
                    cabin_class: this.cabin_class,
                  };
    }

    setTripType(type){
        this.tripType = type
        var payload = {tripType: type}
        this.notifyObservers(payload)
    }

    setFromAirport(airport){
        this.fromAirport = airport;
        var payload = {fromAirport: airport};
        this.notifyObservers(payload);
    }

    setDestAirport(airport){
        this.destAirport = airport;
        var payload = {destAirport: airport};
        this.notifyObservers(payload);
    }

    setDeptDate(date){
        this.deptDate = date;
        var payload = {deptDate: date};
        this.notifyObservers(payload);
    }

    setAmountAdults(nr){
        this.amountOfAdults = nr;
        var payload = {amountAdults: nr};
        this.notifyObservers(payload);

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

     addPassenger(passenger){
       this.passengers = this.passengers.push(passenger)//TODO: check passenger structure
     }

     addPassengers(passengers){
       this.passengers = this.passengers.concat(passengers);//TODO: check passenger structure
     }

     makePassengers(){
       let childPassengers = createPassengers(this.amountOfYouths, "child");
       let adultPassengers = createPassengers(this.amountOfAdults, "adult");
       this.addPassengers(childPassengers);
       this.addPassengers(adultPassengers);
       this.data.passengers = this.passengers;
     }

     addChildToData(amount){
       let childPassengers = createPassengers((amount? amount : 1), "child");
       this.addPassengers(childPassengers);
     }

     addAdultToData(amount){
       let adultPassengers = createPassengers((amount? amount : 1), "adult");
       this.addPassengers(adultPassengers);
     }

     makeData(){
       if(this.amountOfAdults < 1 && this.amountOfYouths < 1){
         throw new Error ('number of people is zero');
       }
       this.makePassengers();
     }

     clearData(){
       this.passengers = [];
       this.data.passengers = this.passengers;
     }

     doSearch(params){
       const theModel = this;
       function notifyACB() {theModel.notifyObservers(null);};
       if(params){
         resolvePromise(null, this.searchResultsPromiseState, notifyACB);
       }
       else{
         resolvePromise(null, this.searchResultsPromiseState, notifyACB);
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
