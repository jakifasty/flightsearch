function DetailsView(props){
  
  console.log("here value flighData");
  console.log(props.flightData);
  let numOfHops = props.flightData.data.slices[0].segments.length;

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
    
    return <div>
            <h2>{"Flight " + props.flightData.data.slices[0].segments[index].operating_carrier.iata_code + " " + props.flightData.data.slices[0].segments[index].operating_carrier_flight_number}</h2>
            <h3>{props.flightData.data.slices[0].segments[index].origin.city_name + " " + props.flightData.data.slices[0].segments[index].origin.iata_code + " (Terminal " + props.flightData.data.slices[0].segments[index].origin_terminal + ") - " + props.flightData.data.slices[0].segments[index].destination.city_name + " " + props.flightData.data.slices[0].segments[index].destination.iata_code + " (Terminal " + props.flightData.data.slices[0].segments[index].destination_terminal + ") "}</h3>
            <span>{"Country of origin: " + props.flightData.data.slices[0].segments[index].origin.iata_country_code}</span>
            <p><span>{"Country of destination: " + props.flightData.data.slices[0].segments[index].destination.iata_country_code}</span></p>
            <span>{"Aircraft type: " + props.flightData.data.slices[0].segments[index].aircraft.name}</span>
            <p>{"Departure time: " + props.flightData.data.slices[0].segments[index].departing_at}</p>
            <p>{"Destination time: " + props.flightData.data.slices[0].segments[index].arriving_at}</p>
            <p>{"Duration: " + props.flightData.data.slices[0].segments[index].duration}</p>

          </div>
  }
  let index = 0;
  return  <div>
            <h1>Details about chosen flights:</h1>
            
            <div className="flightDetails">
              <div>
                <img src={"https://content.r9cdn.net/rimg/provider-logos/airlines/v/"+props.flightData.data.slices[0].segments[0].operating_carrier.iata_code+".png?crop=false&width=100&height=90&fallback=default1.png"} alt=""></img>

                <p>{"Name of the company: " + props.flightData.data.owner.name}</p>

                <p>{"Documents required to travel: " + valueTravel}</p>

                <span>{"Flying from: " + props.flightData.data.slices[0].origin.city_name + " " + props.flightData.data.slices[0].origin.iata_code + " - " + props.flightData.data.slices[0].origin.iata_country_code}</span>
                <p><span>{"Flying to: " + props.flightData.data.slices[0].destination.city_name + " " + props.flightData.data.slices[0].destination.iata_code + " - " + props.flightData.data.slices[0].destination.iata_country_code}</span></p>

                <p>{"Total base: " + props.flightData.data.base_amount + " " + props.flightData.data.base_currency}</p>
                <p>{"Total taxes: " + props.flightData.data.tax_amount + " " + props.flightData.data.tax_currency}</p>

                <p>{"Total CO2 emissions: " + props.flightData.data.total_emissions_kg + " kg"}</p>
              
                <p><span>{"Number of connections: " + (props.flightData.data.slices[0].segments.length - 1)}</span></p>

                <td></td>
              </div>
                {listFlightDetailsCB(index)}
                {listFlightDetailsCB(index+1)}
            </div>
            
            <tr>
            {/*JSON.stringify(props.flightData)*/}
            {/*JSON.stringify(props.flightData.conditions.change_before_departure)*/}
            {/*JSON.stringify(props.flightData.conditions.change_before_departure)*/}
            {/*JSON.stringify(props.flightData.slices[0].segments[0].operating_carrier.iata_code)*/}
            </tr>
            <div>
              <button type="button" onClick={setToReturnACB}>Return to search</button>
              <button type="button" onClick={clickAddToCartCB} disabled={props.isFlightInCart}>Add to cart</button>
              <button type="button" onClick={clickAddToCartCB} disabled={props.isFlightInCart}>Book</button>
            </div>
          </div>
}

export default DetailsView;
