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

  return  <div >
            Details about chosen flight {/*props.flightData.slices[0].segments[0].operating_carrier.iata_code + props.flightData.slices[0].segments[0].operating_carrier_flight_number*/}
            {/*props.flightData.owner.name*/}
            <div className="flightResults">
              <div>
                <span><h1>{/*props.flightData*/}</h1></span>
              </div>
            </div>
            <tr>
            {JSON.stringify(props.flightData)}
            </tr>
            <div>
              <button type="button" onClick={clickAddToCartCB} disabled={props.isFlightInCart}>Add to cart</button>
              <button onclick={setToReturnkACB}>Return to search</button>
            </div>
          </div>
}

export default DetailsView;
