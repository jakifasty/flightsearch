function bookingView(props) {



	return (
        <div className="confirmation">
			<div className="div-table">
					<div className="div-row confDate"> Departure date: {props.flightData.deptDate} </div>
          <div className="div-row confDate"> Arrival date: {props.flightData.returnDate} </div>
					<div className="div-row confRoute"> From: {props.flightData.fromAirport} </div>
          <div className="div-row confRoute"> To: {props.flightData.toAirport} </div>
					<div className="div-row "> Confirmation number: <span class="confNumber">{props.flightData.confirmationNumber} </span> </div>
					<div className="div-row confText"> Mobile check-in is not available for this route. </div>

					<div className="div-row">
						<div className="div-row confButton"><button>Book this flight</button></div>
					</div>
			</div>
		</div>
    );

}


export default bookingView;
