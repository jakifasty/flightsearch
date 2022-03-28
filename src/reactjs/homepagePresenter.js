import React from "react"
import HomepageView from "../views/homepageView";
export default
function Homepage(props){
    const [, setFrom]=React.useState(null);
    const [, setAdults]=React.useState(null);
    const [, setYouths]=React.useState(null);
    const [, setTripType]=React.useState(null);




    function observerACB(){
        setFrom(props.model.fromAirport);
        setAdults(props.model.amountOfAdults);
        setYouths(props.model.amountOfYouths);
        setTripType(props.model.tripType)

    }

    function wasCreatedACB(){
        observerACB();
        props.model.addObserver(observerACB);
        return function isTakenDownACB(){props.model.removeObserver(observerACB);}
    }

    React.useEffect(wasCreatedACB, []);

    function onFromTextChangeACB(from){
        props.model.setFromAirport(from)
    }
    function onSelectTripTypeACB(type){
        console.log("Setting type")
        console.log(type)

        props.model.setTripType(type)
    }
    function onChangeAmountPeopleACB(params){
        console.log(params)
        console.log(props.model.amountOfAdults)
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
        dontKnowWhyThisWorkButItDoes={2}
        />;
}
