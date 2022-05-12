function DetailsView(props){

  function clickBookCB(flight){
    window.location.hash="#booking";
    props.onAddToFinalList(flight);
  }

  function clickAddToSideCB(flight){
    props.onAddToFinalList(flight);
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
  }catch(e){
    details = "undefined field in flight data";
  }

  let valueTravel = "";
  if (props.flightData.data.passenger_identity_documents_required == 'false'){
    valueTravel = "no ducuments required";
  }
  else{
    valueTravel = "specific documents required";
  }

  function listFlightDetailsCB(segment) {

    let flightTime = segment.duration
    if(flightTime.startsWith("PT")){
      flightTime = flightTime.substring(2)
    }
    else{
      flightTime = flightTime.substring(1).replace("T","")
    }

    let originTerminalAvailability = segment.origin_terminal;
    let destinationTerminalAvailability = segment.destination_terminal;

    if(!(originTerminalAvailability == "null")){originTerminalAvailability = 'not available';}
      
    if(!(destinationTerminalAvailability == 'null')){destinationTerminalAvailability = 'not available';}

    return  <div key={segment.id}>
              <h2>{"Flight " + segment.marketing_carrier.iata_code + " " + segment.marketing_carrier_flight_number}</h2>
              <h3>{segment.origin.city_name + " " + segment.origin.iata_code + " - " + segment.destination.city_name +  " " + segment.destination.iata_code}</h3>
              <span>{"Country of origin: " + segment.origin.iata_country_code}</span>
              <p><span>{"Country of destination: " + segment.destination.iata_country_code}</span></p>
              <span>{"Aircraft type: " + segment.aircraft.name}</span>
              <p>{"Departure time: " + segment.departing_at}</p>
              <p>{"Destination time: " + segment.arriving_at}</p>
              <p>{"Duration: " + flightTime}</p>
            </div> 
  }

  return  <div>
            <h1>Details about chosen flights:</h1>

            <div className="flightDetails">
              <div>
                <img src={"https://content.r9cdn.net/rimg/provider-logos/airlines/v/" + props.flightData.data.slices[0].segments[0].marketing_carrier.iata_code+".png?crop=false&width=100&height=90&fallback=default1.png"} alt=""></img>

                <p>{"Flight company: " + props.flightData.data.slices[0].segments[0].marketing_carrier.name}</p>

                <p>{"Flight operator: " + props.flightData.data.slices[0].segments[0].operating_carrier.name}</p>

                <p>{"Documents required to travel: " + valueTravel}</p>

                <span>{"Flying from: " + props.flightData.data.slices[0].origin.city_name + " " + props.flightData.data.slices[0].origin.iata_code + " - " + props.flightData.data.slices[0].origin.iata_country_code}</span>
                <p><span>{"Flying to: " + props.flightData.data.slices[0].destination.city_name + " " + props.flightData.data.slices[0].destination.iata_code + " - " + props.flightData.data.slices[0].destination.iata_country_code}</span></p>

                <p>{"Total base: " + props.flightData.data.base_amount + " " + props.flightData.data.base_currency}</p>
                <p>{"Total taxes: " + props.flightData.data.tax_amount + " " + props.flightData.data.tax_currency}</p>

                <p>{"Total CO2 emissions: " + props.flightData.data.total_emissions_kg + " kg"}</p>

                <p><span>{"Number of layovers: " + (props.flightData.data.slices[0].segments.length - 1)}</span></p>
                <div></div>
              </div>
                  {props.flightData.data.slices[0].segments.map(listFlightDetailsCB)}
              </div>
            <button className="searchButton" onClick={clickAddToSideCB} disabled={props.isFlightInList}>Add to sidelist</button>
            <button className="searchButton" onClick={clickBookCB} disabled={false}>Book</button>
            <button className="searchButton" onClick={setToReturnACB} disabled={false}>Return to search</button>
          </div>
}

export default DetailsView;
