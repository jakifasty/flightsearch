//detailsPresenter.js React file

import FlightModel from "./FlightModel.js"
import React from "react"
import {wasCreatedACB, onFromTextChangeACB, onSelectTripTypeACB} from "../reactjs/homepagePresenter.js"
import DetailsView from "../views/detailsView.js"

export default
function Presenter(props){

	const [, setFrom] = React.useState(null);
	const [, setTo] = React.useState(null);
	const [, setTripType] = React.useState(null);

	function observerACB(){
		setFrom(props.model.fromAirport);
		setTo(props.model.toAirport);
		setTripType(props.model.tripType)
	}

	function wasCreatedACB() {
		observerACB();
		props.model.addObserver(observerACB);

		return function isTakenDownACB(){
			props.model.removeObserver(observerACB);
		}
	}
	React.useEffect(wasCreatedACB, []);

	/*function sameidCB(selectionToCompare){
		if(props.model.currentSelection === amountOfYouths)
			return true;
		else
			return false;
	}*/

	return(
			<DetailsView 
				onFromTextChange={onFromTextChangeACB}
				onSelectTripType={onSelectTripTypeACB}
				fromAirport={props.model.fromAirport}
				toAirport={props.model.toAirport}
				tripType={props.model.tripType}
			/>);
}