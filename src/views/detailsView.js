function DetailsView(props){
  console.log("here value flighData");
  console.log(props.flightData);

  function clickAddToCartCB(flight){
		window.location.hash="#search";
		return props.onAddToFinalList(flight);
	}

  function clickRemoveFromCart(flight){
    return props.searchFlights(flight);
  }

  function setToReturnkACB() {
    window.location.hash="#search";
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

  return  <div >
            Details about chosen flight {details}
            <div className="flightResults">
              <div>
                <span><h1>{props.flightData.data.id}</h1></span>
              </div>
            </div>
            <tr>
            {/*JSON.stringify(props.flightData)*/}
            </tr>
            <div>
              <button type="button" onClick={clickAddToCartCB} disabled={props.isFlightInCart}>Add to cart</button>
              <button onclick={setToReturnkACB}>Return to search</button>
            </div>
          </div>
}

export default DetailsView;
