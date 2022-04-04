import React from "react"
import HomepageView from "../views/homepageView";
import { fetchAirports } from "../util";
//import sendMail from "../testFIle";
export default
function Homepage(props){
    const [, setFrom]=React.useState(null);
    const [, setAdults]=React.useState(null);
    const [, setYouths]=React.useState(null);
    const [, setTripType]=React.useState(null);
    const [promise, setPromise]=React.useState();
    const [data, setData]= React.useState([]);
    const [error, setError]= React.useState([]);
    const [testAirport, setAirport]= React.useState([]);
    
    function searchAirportsACB(searchText) {
    
        if(searchText.length >1){
            var match = data[searchText.substring(0,2).toLocaleUpperCase()]
            console.log(match)
            if(searchText.length >2 && match != undefined){

                match = match[searchText.substring(0,3).toLocaleUpperCase()]
            }
            setAirport(match)
            console.log(testAirport)
        } 
    }

    function observerACB(){
        setFrom(props.model.fromAirport);
        setAdults(props.model.amountOfAdults);
        setYouths(props.model.amountOfYouths);
        setTripType(props.model.tripType);
    }
    function newAirportSearchACB(searchText){
        function firstFilterCB (airport,search){
            return (airport[search] != undefined)
        }

        if(searchText.length >1){
            var search = searchText.substring(0,2).toLocaleUpperCase()
            var airports = data.filter(airport => firstFilterCB(airport,search))
            if(searchText.length>2 && airports != undefined){
                airports = airports[0][search].filter(airport => firstFilterCB(airport,searchText.substring(0,3).toLocaleUpperCase()))
                search = searchText.substring(0,3).toLocaleUpperCase()
            }
            setAirport(airports[0])
            //setAirport(Object.entries(airports)[0][1])
        }
    }
    function wasCreatedACB(){
        //setPromise(fetchAirports)
        var airports = require('../data/airports.json')
        setData(airports)
        observerACB();
        props.model.addObserver(observerACB);
        return function isTakenDownACB(){         
            props.model.removeObserver(observerACB);}
    }

    React.useEffect(wasCreatedACB, []);

    function onFromTextChangeACB(from){
        props.model.setFromAirport(from)
    }
    function onSelectTripTypeACB(type){
        props.model.setTripType(type)
    }

    function isReadyForSearchACB(){
        if(props.model.amountOfAdults + props.model.amountOfYouths >0){
            if(props.model.tripType === 'One'){
                if(props.model.fromAirport !== ''){
                    
                }
            }else if(props.model.tripType === 'Round'){

            } else{
                return false;
            }
        }
    }

    function onChangeAmountPeopleACB(params){
        switch (params) {
            case 'Adult +' :
                props.model.setAmountAdults(props.model.amountOfAdults + 1)
                break;
            case 'Adult -' :
                props.model.setAmountAdults(props.model.amountOfAdults - 1)
                break;
            case 'Youth +' :
                props.model.setAmountYouths(props.model.amountOfYouths + 1)
                break;
            case 'Youth -' :
                props.model.setAmountYouths(props.model.amountOfYouths - 1)
                break;
            default:
                break;
        }
    }
    return < HomepageView 
        onChangeAmountPeople={onChangeAmountPeopleACB}
        onFromTextChange={onFromTextChangeACB}
        onSelectTripType={onSelectTripTypeACB}
        fromAirport= {props.model.fromAirport}
        amountOfPeople={props.model.amountOfAdults + props.model.amountOfYouths}
        amountOfAdults={props.model.amountOfAdults}
        amountOfYouths={props.model.amountOfYouths}
        tripType={props.model.tripType}
        dontKnowWhyThisWorkButItDoes={4}
        validRequest={isReadyForSearchACB}
        searchForAirport= {newAirportSearchACB}
        airportResults = {testAirport}
        />;
}
