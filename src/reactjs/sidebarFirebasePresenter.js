import React from "react";
import SIdebarFirebase from "../views/sidebarFirebase.js"

export default
function SidebarFirebase(props){

    const [, setFlights] = React.useState(null); //allows functional components to have state, like this.state in class components

    function observerACB(){
        setFlights(props.model.flights);
    }

    function observerItWasCreated(){
        observerACB();
        props.model.addObserver(observerACB); //add the observer to the model

        return function isPutDownACB(){
            props.model.removeObserver(observerACB);
        }
    }
    React.useEffect(observerItWasCreatedACB, []);

    function setCurrentFlightACB(flight){
        props.model.setCurrentDish(dish.id);
    }

    function removeFlightACB(flight){
        props.model.setCurrentDish(dish.id);
    }

    return <SidebarFirebaseView flights={props.model.flights} onCurrentFlight={setCurrentFlightACB} onRemove={removeFlightACB}/>;
    
}