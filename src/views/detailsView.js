function DetailsView(props){
  console.log("here value flighData");
  console.log(props.flightData);
  console.log(props.flightData.data.passenger_identity_documents_required);

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
              <button type="button" onClick={setToReturnACB}>Return to search</button>
            </div>
          </div>
}

export default DetailsView;
