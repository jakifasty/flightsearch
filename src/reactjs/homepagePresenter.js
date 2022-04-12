import React from "react"
import HomepageFormView from "../views/homepageFormView";
import HomepageResultsView from "../views/homepageResultsView";
import resolvePromise from "../resolvePromise"
import promiseNoData from "../promiseNoData"
import  {getAirportsInCity, getOffers} from "../fligthSearches.js";
//import sendMail from "../testFIle";

export default
    function Homepage(props) {
    const [, setFrom] = React.useState(null);
    const [, setTo] = React.useState(null);
    const [, setFromDate] = React.useState(null);
    const [, setReturnDate] = React.useState(null);
    const [, setAdults] = React.useState(null);
    const [, setYouths] = React.useState(null);
    const [, setTripType] = React.useState(null);
    const [choosenAirport, setAirport] = React.useState([]);
    const [airportsPromiseState]=React.useState({});
    const [flightPromiseState]=React.useState({});
    const [, reRender]=React.useState();

    const data = require('../data/airports.json')


    //TODO add return airports functionality



    function resolveAirports(promise){
      resolvePromise(promise, airportsPromiseState,
        function promiseStateChangedACB(){reRender(new Object());})
    }

    function resolveFlight(promise){
      resolvePromise(promise, flightPromiseState,
        function promiseStateChangedACB(){
          reRender(new Object());})
    }

    function observerACB(){
        setFrom(props.model.fromAirport);
        setTo(props.model.toAirport)
        setFromDate(props.model.fromDate)
        setReturnDate(props.model.returnDate)
        setAdults(props.model.amountAdults);
        setYouths(props.model.amountYouths);
        setTripType(props.model.tripType);
    }

    function searchAirportACB(searchText) {

        function isValidAirportCB(airport, search) {
            return (airport[search] != undefined)
        }

        //TODO cleanup/make more efficent
        if (searchText.length > 1) {
            var search = searchText.substring(0, 2).toLocaleUpperCase()
            var airports = data.filter(airport => isValidAirportCB(airport, search))
            if (searchText.length > 2 && airports != undefined) {
                airports = airports[0][search].filter(airport => isValidAirportCB(airport, searchText.substring(0, 3).toLocaleUpperCase()))
                search = searchText.substring(0, 3).toLocaleUpperCase()
            }
            setAirport(airports[0])
        } else {
            setAirport([])
        }
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

    function onFromAirportSelectACB(from) {
        props.model.setFromAirport(from)
    }

    function onToAirportSelectACB(to) {
        props.model.setToAirport(to)

    }

    function onChangeAmountPeopleACB(params) {
        switch (params) {
            case 'Adult +':
                props.model.setAmountAdults(props.model.amountOfAdults + 1)
                break;
            case 'Adult -':
                props.model.setAmountAdults(props.model.amountOfAdults - 1)
                break;
            case 'Youth +':
                props.model.setAmountYouths(props.model.amountOfYouths + 1)
                break;
            case 'Youth -':
                props.model.setAmountYouths(props.model.amountOfYouths - 1)
                break;
            default:
                break;
        }
      }

    function compareDates(date1,date2){
        var date1Split = date1.split("-")
        var date2Split = date2.split("-")
        if(parseInt(date1Split[0])>parseInt(date2Split[0])){
            return false
        }
        if(parseInt(date1Split[1])>parseInt(date2Split[1])){
            return false

        }
        if(parseInt(date1Split[2])>parseInt(date2Split[2])){
            return false
        }
        return true
    }

    function onSelectFromDateACB(date) {
        if(compareDates(date,props.model.returnDate) || props.model.tripType == props.model.oneWay){
            props.model.setFromDate(date)
        }
    }

    function onSelectReturnDateACB(date) {
        if(compareDates(props.model.fromDate,date)){
            props.model.setReturnDate(date)
        }
    }

    function onSelectTripTypeACB(type) {
        props.model.setTripType(type)
    }

    //TODO
    function isReadyForSearchACB() {

        function checkRest(){

        }

        if (props.model.amountOfAdults + props.model.amountOfYouths > 0) {
            if (props.model.tripType === props.model.oneWay) {
                if (props.model.fromAirport !== '') {

                }
            } else if (props.model.tripType === props.model.roundTrip) {

            } else {
                return false;
            }
        }
    }

    function searchACB(){
        if(props.model.tripType == props.model.oneWay)
          resolveFlight(getOffers(props.model.data));
        else if(props.model.tripType == props.model.roundTrip)
          resolveFlight(getOffers(props.model.roundtripData));
    }

    return <div> < HomepageFormView
        onChangeAmountPeople={onChangeAmountPeopleACB}
        onFromAirportSelect={onFromAirportSelectACB}
        onToAirportSelect={onToAirportSelectACB}
        onSelectTripType={onSelectTripTypeACB}
        onSelectFromDate={onSelectFromDateACB}
        onSelectReturnDate={onSelectReturnDateACB}
        isValidRequest={isReadyForSearchACB}
        onSearchForAirport={searchAirportACB}
        onSearch={searchACB}
        fromAirport={props.model.fromAirport}
        amountOfPeople={props.model.amountAdults + props.model.amountYouths}
        amountOfAdults={props.model.amountAdults}
        amountOfYouths={props.model.amountYouths}
        tripType={props.model.tripType}
        airportResults={choosenAirport}
    />
    {
        promiseNoData({promise: flightPromiseState.promise, data: flightPromiseState.data, error: flightPromiseState.error})
        || <HomepageResultsView results={flightPromiseState.data.data}/>
    };
    </div>

}
