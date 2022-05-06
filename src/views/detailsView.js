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

  function setToReturnACB() {
    //console.log("leaving to search page...");
    window.location.hash="#homepage";
  }

  function clickGoToBookingCB(){
    window.location.hash="#booking";
  }

  let details = "";
  try{
    details = props.flightData.slices[0].segments[0].operating_carrier.iata_code;
    details.append(" ");
    details.append(props.flightData.slices[0].segments[0].operating_carrier_flight_number);
    details.append(" ");
    details.append(props.flightData.owner.name);
    //props.flightData.slices[0].segments[0].operating_carrier.iata_code + props.flightData.slices[0].segments[0].operating_carrier_flight_number+props.flightData.owner.name
  }catch(e){
    details = "undefined field in flight data";
  }

				<div className="outsideBox">
					Flight results:
					{renderResults(props)}
					<button onClick={function setFlightOptionACB(e){ongamepaddisconnected}}></button>
				</div>

  return  <div >
            <h1>Details about chosen flight {props.flightData.data.slices[0].segments[0].operating_carrier.iata_code + " " + props.flightData.data.slices[0].segments[0].operating_carrier_flight_number} :</h1> {/*props.flightData.slices[0].segments[0].operating_carrier.iata_code + props.flightData.slices[0].segments[0].operating_carrier_flight_number*/}
            
            <div className="flightResults">
              <div>
                <span>{/*props.flightData*/}{/*JSON.stringify(props.flightData)*/}</span>
              </div>
              <div>
                <td><span>{"Name of the company: " + props.flightData.data.owner.name}</span></td>
                <span>{"Available services: " + props.flightData.data.available_services}</span>
                <td><span>{"Documents required to travel: " + valueTravel}</span></td>
                <span>{"Passengers type: " + props.flightData.data.passengers.type}</span>
                <td><span>{"Country of origin: " + props.flightData.data.slices[0].origin.iata_country_code}</span></td>
                <span>{"Country of destination: " + props.flightData.data.slices[0].destination.iata_country_code}</span>
                <td><span>{"Total taxes: " + props.flightData.data.tax_amount + " " + props.flightData.data.tax_currency}</span>   </td>
                <span>{"Total kg of CO2 emissions: " + props.flightData.data.total_emissions_kg}</span> 
                <td><span>{"Aircraft type: " + props.flightData.data.slices[0].segments[0].aircraft.name}</span></td>
                <span>{"Fare basis code: " + props.flightData.data.slices[0].segments[0].passengers[0].fare_basis_code}</span>
              </div>
            </div>
            <tr>
            {/*JSON.stringify(props.flightData)*/}
            {/*JSON.stringify(props.flightData.conditions.change_before_departure)*/}
            {/*JSON.stringify(props.flightData.conditions.change_before_departure)*/}
            {/*JSON.stringify(props.flightData.slices[0].segments[0].operating_carrier.iata_code)*/}
            </tr>
            <div>
              <button type="button" onClick={clickAddToCartCB} disabled={props.isFlightInCart}>Add to cart</button>
              <button type="button" onClick={clickGoToBookingCB} disabled={props.isFlightInCart}>Go to booking</button>
              <button type="button" onClick={setToReturnACB}>Return to search</button>
            </div>
          </div>
}

			</div>
		);
}