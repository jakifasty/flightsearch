function bookingView(props) {

	console.log(props.flightData);
	console.log(props.model);


	return (
      <div className="book">
				<div className="div-table">
						<h4> Flight Information </h4>
						<div className="div-row confDate"> Departure date: {props.flightData.deptDate} </div>
	          <div className="div-row confDate"> Arrival date: {props.flightData.returnDate} </div>
						<div className="div-row confRoute"> From: {props.flightData.fromAirport} </div>
	          <div className="div-row confRoute"> To: {props.flightData.toAirport} </div>
						<h4> Personal Information </h4>
						<div> <input type="text" id="name" name="user_name" placeholder="Full Name"/> </div>
						<div> <input type="email" id="mail" name="user_email" placeholder="Email Adress"/> </div>
						<div>
							<h4> Date of Birth </h4>
							<input type="text" id="DD" name="DD" placeholder="DD"/>
							<input type="text" id="DD" name="MM" placeholder="MM"/>
							<input type="text" id="YYYY" name="YYYY" placeholder="YYYY"/>
						</div>
						<div>
							<h4> Gender </h4>
							<input type="radio" id="gender-male" name="gender" value="male"/> <label htmlFor="gender-male">Male</label>
							<input type="radio" id="gender-female" name="gender" value="female"/> <label htmlFor="gender-female">Female</label>
						</div>

						<div>
							<h4> Payment details </h4>
							<input type="radio" id="payment-method-card" name="payment-method" value="card" checked="true"/> <label htmlFor="payment-method-card">Credit Card</label>
							<input type="radio" id="payment-method-paypal" name="payment-method" value="paypal" disabled={true}/> <label htmlFor="payment-method-paypal">Paypal</label>
						</div>

						<div>
							<h4> Terms and Conditions </h4>
							<input type="checkbox" id="terms" name="terms" value="terms"/> <label htmlFor="terms">I accept the terms and conditions for signing up to this service, and hereby confirm I have read the privacy policy.</label>
						</div>

						<div className="div-row">
								<div className="div-row confButton"><button>Finish</button></div>
						</div>
			</div>
		</div>
    );

}


export default bookingView;
