function bookingView(props) {

	console.log(props.flightData);
	console.log(props.model);


	function handleCancelACB(event) {
        window.location.hash = "#homepage";
    }


	return (
      <div class="container">
			<div>
						<h4 className="header4"> Flight Information </h4>
						<div className="div-row confDate"> Departure date: {props.flightData.deptDate} </div>
	          <div className="div-row confDate"> Arrival date: {props.flightData.returnDate} </div>
						<div className="div-row confRoute"> From: {props.flightData.fromAirport} </div>
	          <div className="div-row confRoute"> To: {props.flightData.toAirport} </div>
			</div>


			  <form>
			    <div class="row">
			      <h4 className="header4">Account</h4>
			      <div class="input-group input-group-icon">
			        <input type="text" placeholder="Full Name"/>
			        <div class="input-icon"><i class="fa fa-user"></i></div>
			      </div>
			      <div class="input-group input-group-icon">
			        <input type="email" placeholder="Email Adress"/>
			        <div class="input-icon"><i class="fa fa-envelope"></i></div>
			      </div>
			      <div class="input-group input-group-icon">
			        <input type="password" placeholder="Password"/>
			        <div class="input-icon"><i class="fa fa-key"></i></div>
			      </div>
			    </div>
			    <div class="row">
			      <div class="col-half">
			        <h4 className="header4">Date of Birth</h4>
			        <div class="input-group">
			          <div class="col-third">
			            <input type="text" placeholder="DD"/>
			          </div>
			          <div class="col-third">
			            <input type="text" placeholder="MM"/>
			          </div>
			          <div class="col-third">
			            <input type="text" placeholder="YYYY"/>
			          </div>
			        </div>
			      </div>
			      <div class="col-half">
			        <h4 className="header4">Gender</h4>
			        <div class="input-group">
			          <input id="gender-male" type="radio" name="gender" value="male"/>
			          <label for="gender-male">Male</label>
			          <input id="gender-female" type="radio" name="gender" value="female"/>
			          <label for="gender-female">Female</label>
			        </div>
			      </div>
			    </div>
			    <div class="row">
			      <h4 className="header4">Payment Details</h4>
			      <div class="input-group">
			        <input id="payment-method-card" type="radio" name="payment-method" value="card" checked="true"/>
			        <label for="payment-method-card"><span><i class="fa fa-cc-visa"></i>Credit Card</span></label>
			        <input id="payment-method-paypal" type="radio" name="payment-method" value="paypal" disabled={true}/>
			        <label for="payment-method-paypal"> <span><i class="fa fa-cc-paypal" ></i>Paypal</span></label>
			      </div>
			      <div class="input-group input-group-icon">
			        <input type="text" placeholder="Card Number"/>
			        <div class="input-icon"><i class="fa fa-credit-card"></i></div>
			      </div>
			      <div class="col-half">
			        <div class="input-group input-group-icon">
			          <input type="text" placeholder="Card CVC"/>
			          <div class="input-icon"><i class="fa fa-user"></i></div>
			        </div>
			      </div>
			      <div class="col-half">
			        <div class="input-group">
			          <select>
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
			          <select>
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
			    </div>
			    <div class="row">
			      <h4>Terms and Conditions</h4>
			      <div class="input-group">
			        <input id="terms" type="checkbox"/>
			        <label for="terms">I accept the terms and conditions for signing up to this service, and hereby confirm I have read the privacy policy.</label>
			      </div>
			    </div>
			  </form>
			</div>






    );

}


export default bookingView;
