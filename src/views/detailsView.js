//detailsView.js React file
import {fromTextInputACB, fromChangeAmountPeopleACB, fromSelectTripTypeACB} from "../detailsView.js"

function DetailsView(props){

	function fromTextInputACB(event){
        props.onFromTextChange(event.target.value)
    }
    function fromSelectTripTypeACB(event){
        console.log("In ACB")
        props.onSelectTripType(event.target.value)
    }

	var date = new Date()
    var today = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()
    var twoYearsAfterToday = (parseInt(today.split("-")[0])+2)+today.slice(today.indexOf("-"),today.length)

	window.location.hash = "#details"
	return(	
			<div className = "mainBackground">
				<h1>style={{color:'#DA291CFF'}}Flight Search</h1>

				<select className="dropbtn" onChange={fromSelectTripTypeACB}>
					<option value="One">One-way</option>
					<option value="Round">Round-trip</option>
				</select>

				<div className="outsideBox">
                    <input className="center" type="text" name="From" placeholder="From" onChange={fromTextInputACB}></input>
                    <input className={props.tripType ==="One"? "hidden": "center"} type="text" name="Destination" placeholder="Destination"></input>
                    <input className="center" placeholder="test" type="date" name="trip-start"
                            min={today} max={twoYearsAfterToday}>
                    </input>
                    <input className={props.tripType ==="One"? "hidden": "center"}type="date" name="trip-back"
                            min={today} max={twoYearsAfterToday}>
                    </input>
                </div>

				<div className="outsideBox">
                	{console.log(props.amountOfPeople)}
                	{<button disabled={props.amountOfPeople === 0}>Search</button>}
				</div>

				<div className="outsideBox">
					Flight results:
					{renderResults(props)}
					<button onClick={function setFlightOptionACB(e){ongamepaddisconnected}}></button>
				</div>

				<div>
					Show results:
					<button onClick={function(event) {windows.location.hash="#homepage"}}>Back to Homepage</button>
				</div>

			</div>
		);
}