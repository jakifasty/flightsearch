function bookingView(props) {

	console.log(props.flightData);
	console.log(props.model);


	function handleCancelACB(event) {
        window.location.hash = "#homepage";
    }


	return (
      <div >
				<div >
						<h4 className="header4"> Flight Information </h4>
						<div className="div-row confDate"> Departure date: {props.flightData.deptDate} </div>
	          <div className="div-row confDate"> Arrival date: {props.flightData.returnDate} </div>
						<div className="div-row confRoute"> From: {props.flightData.fromAirport} </div>
	          <div className="div-row confRoute"> To: {props.flightData.toAirport} </div>
						<h4 className="header4"> Personal Information </h4>
						<div> <input type="text" id="name" name="user_name" placeholder="Full Name"/> </div>
						<div> <input type="email" id="mail" name="user_email" placeholder="Email Adress"/> </div>
						<div>
							<h4 className="header4"> Date of Birth </h4>
							<input type="text" id="DD" name="DD" placeholder="DD"/>
							<input type="text" id="DD" name="MM" placeholder="MM"/>
							<input type="text" id="YYYY" name="YYYY" placeholder="YYYY"/>
						</div>
						<div>
							<h4 className="header4"> Gender </h4>
							<input type="radio" id="gender-male" name="gender" value="male"/> <label htmlFor="gender-male">Male</label>
							<input type="radio" id="gender-female" name="gender" value="female"/> <label htmlFor="gender-female">Female</label>
						</div>

						<div>
							<h4 className="header4"> Payment details </h4>
							<input type="radio" id="payment-method-card" name="payment-method" value="card" defaultChecked/> <label htmlFor="payment-method-card">Credit Card</label>
							<input type="radio" id="payment-method-paypal" name="payment-method" value="paypal" disabled={true}/> <label htmlFor="payment-method-paypal">Paypal</label>
							<div>
								<input type="text" id="card-number" name="card-number" placeholder="Card Number"/>
								<input type="text" id="card-cvc" name="card-cvc" placeholder="Card CVC"/>
								<select name="card-month" id="card-month" className="dropbtn2">
								  <option value="jan">01 Jan</option>
								  <option value="feb">02 Feb</option>
								  <option value="mar">03 Mar</option>
								  <option value="apr">04 Apr</option>
									<option value="may">05 May</option>
									<option value="jun">06 Jun</option>
									<option value="jul">07 Jul</option>
									<option value="aug">08 Aug</option>
									<option value="sept">09 Sept</option>
									<option value="oct">10 Oct</option>
									<option value="nov">11 Nov</option>
									<option value="dec">12 Dec</option>
								</select>

								<select name="card-year" id="card-year" className="dropbtn2">
								  <option value="2022">2022</option>
								  <option value="2023">2023</option>
								  <option value="2024">2024</option>
								  <option value="2025">2025</option>
									<option value="2026">2026</option>
									<option value="2027">2027</option>
									<option value="2028">2028</option>
									<option value="2029">2029</option>
									<option value="2030">2030</option>
								</select>
							</div>
						</div>

						<div>
							<h4 className="header4"> Terms and Conditions </h4>
							<input type="checkbox" id="terms" name="terms" value="terms" defaultChecked disabled={true}/> <label htmlFor="terms">By clicking Finish, I accept the terms and conditions for signing up to this service, and hereby confirm I have read the privacy policy.</label>
						</div>

						<div className="div-row">
								<div className="div-row confButton"><button>Finish</button></div>
								<div className="div-row confButton"><button onClick={handleCancelACB}>Cancel</button></div>
						</div>
			</div>
		</div>
    );

}


export default bookingView;
