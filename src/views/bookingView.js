function bookingView(props) {

	console.log(props.flightData);


	return (
      <div className="book">
				<div className="div-table">
						<div className="div-row confDate"> Departure date: {props.flightData.deptDate} </div>
	          <div className="div-row confDate"> Arrival date: {props.flightData.returnDate} </div>
						<div className="div-row confRoute"> From: {props.flightData.fromAirport} </div>
	          <div className="div-row confRoute"> To: {props.flightData.toAirport} </div>
						<label for="name" required>Name:</label> <input type="text" id="name" name="user_name"/>
						<label for="surname" required>Surname:</label> <input type="text" id="surname" name="user_surname"/>
						<label for="mail" required>E-mail:</label> <input type="email" id="mail" name="user_email"/>
						<div className="div-row">
								<div className="div-row confButton"><button>Finish</button></div>
						</div>
			</div>
		</div>
    );

}


export default bookingView;
