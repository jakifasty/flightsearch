import React from "react"
import HomepageView from "../views/homepageView";
import { fetchAirports } from "../util";
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
    const data = require('../data/airports.json')

    //TODO add return airports functionality

    function observerACB() {
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

    function onFromAirportSelect(from) {
        props.model.setFromAirport(from)
    }

    

    function onToAirportSelectACB(from) {
        props.model.setToAirport(from)
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

    function onSelectFromDateACB(type) {
        props.model.setFromDate(type)
    }

    function onSelectReturnDateACB(type) {
        props.model.setReturnDate(type)
    }

    function onSelectTripTypeACB(type) {
        props.model.setTripType(type)
    }




    function isReadyForSearchACB() {
        if (props.model.amountOfAdults + props.model.amountOfYouths > 0) {
            if (props.model.tripType === 'One') {
                if (props.model.fromAirport !== '') {

                }
            } else if (props.model.tripType === 'Round') {

            } else {
                return false;
            }
        }
    }



    return < HomepageView
        onChangeAmountPeople={onChangeAmountPeopleACB}
        onFromTextChange={onFromAirportSelect}
        onToAirportSelect={onToAirportSelectACB}
        onSelectTripType={onSelectTripTypeACB}
        onSelectFromDate={onSelectFromDateACB}
        onSelectReturnDate={onSelectReturnDateACB}
        isValidRequest={isReadyForSearchACB}
        onSearchForAirport={searchAirportACB}
        fromAirport={props.model.fromAirport}
        amountOfPeople={props.model.amountAdults + props.model.amountYouths}
        amountOfAdults={props.model.amountAdults}
        amountOfYouths={props.model.amountYouths}
        tripType={props.model.tripType}

        airportResults={choosenAirport}
    />;
}
