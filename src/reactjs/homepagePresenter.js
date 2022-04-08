import React from "react"
import HomepageView from "../views/homepageView";
import SearchResultsView from "../views/searchResultsView";
import resolvePromise from "../resolvePromise"
import promiseNoData from "../promiseNoData"
import  {getAirportsInCity, getOffer} from "../fligthSearches.js";
//import sendMail from "../testFIle";
export default
function Homepage(props){
    const [, setFrom]=React.useState(null);
    const [, setAdults]=React.useState(null);
    const [, setYouths]=React.useState(null);
    const [, setTripType]=React.useState(null);

    const [airportsPromiseState]=React.useState({});
    const [flightPromiseState]=React.useState({});
    const [, reRender]=React.useState();

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
        setAdults(props.model.amountOfAdults);
        setYouths(props.model.amountOfYouths);
        setTripType(props.model.tripType);
    }

    function wasCreatedACB(){
        observerACB();
        props.model.addObserver(observerACB);
        return function isTakenDownACB(){
            props.model.removeObserver(observerACB);}
    }

    React.useEffect(wasCreatedACB, []);

    function onFromTextChangeACB(from){
        props.model.setFromAirport(from)
    }
    function onFromTextChangeACB(from){
        props.model.setDestAirport(from)
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

    function searchOneWayACB(){
      resolveFlight(getOffer(props.model.data));
    }
    return <div>
            <HomepageView
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
                onSearch={searchOneWayACB}
                />
            {promiseNoData({promise: flightPromiseState.promise, data: flightPromiseState.data, error: flightPromiseState.error})
            || <SearchResultsView results={flightPromiseState.data.data}/>}
          </div>
}
