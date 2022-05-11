function DetailsView(props){
  
  console.log("here value flighData");
  console.log(props.flightData);
  console.log(props.flightData.data.slices[0].segments.length);
  let index = props.flightData.data.slices[0].segments.length;

  function clickAddToCartCB(flight){
    return props.onAddToFinalList(flight);
		//window.location.hash="#booking";
	}

  function clickRemoveFromCart(flight){ 
    return props.searchFlights(flight);
  }

  function setToReturnACB() {
    console.log("leaving to search page...");
    window.location.hash="#homepage";
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

  let valueTravel = "";
  if (props.flightData.data.passenger_identity_documents_required == 'false'){
    valueTravel = "no ducuments required";
  }
  else{
    valueTravel = "specific ducuments required";
  }

  function listFlightDetailsCB(index) {
    index = 0;
    return <div>
            <span>{props.flightData.data.slices[0].segments[0].operating_carrier.iata_code + " " + props.flightData.data.slices[0].segments[0].operating_carrier_flight_number}</span>

            <td><span>{"Number of hops" + props.flightData.data.slices[0].segments.length}</span></td>
            <span>{"Country of origin: " + props.flightData.data.slices[0].origin.iata_country_code}</span>
            <td><span>{"Country of destination: " + props.flightData.data.slices[0].destination.iata_country_code}</span></td>
            <span>{"Aircraft type: " + props.flightData.data.slices[0].segments[0].aircraft.name}</span>
            <td><span>{"Fare basis code: " + props.flightData.data.slices[0].segments[0].passengers[0].fare_basis_code}</span></td>

            <span>{"Aircraft type: " + props.flightData.data.slices[0].segments[0].aircraft.name}</span>
            <span>{"Fare basis code: " + props.flightData.data.slices[0].segments[0].passengers[0].fare_basis_code}</span>
          </div>
  }

  return  <div >
            <h1>Details about chosen flights:</h1>
            
            <div className="flightResults">
              <div>
                <p>{"Name of the company: " + props.flightData.data.owner.name}</p>
                <p>{"Available services: " + props.flightData.data.available_services}</p>
                
                <td>{"Documents required to travel: " + valueTravel}</td>
                <td><span>{"Passengers type: " + props.flightData.data.passengers.type}</span></td>

                <td>{"Total taxes: " + props.flightData.data.tax_amount + " " + props.flightData.data.tax_currency}</td>
                <td><span>{"Total kg of CO2 emissions: " + props.flightData.data.total_emissions_kg}</span></td>
              </div>
              <div>
                {listFlightDetailsCB}
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
              <button type="button" onClick={setToReturnACB}>Return to search</button>
            </div>
          </div>
}

export default DetailsView;
