function confirmationView(props) {

	function printPageACB() {
		window.print();
	}

	function generateID (){
        return Math.random().toString(36).slice(2);
  };

	function handleCancelACB(event) {
        window.location.hash = "#homepage";
  }

	return (
		<div className="container">
				<div className="row">
					<div> <h2 class="centr"> Booking Successful </h2> </div>
					<div> <h1 id="check"> &#10004; </h1></div>
					<div><h4 className="header4 centr"> <p>Thank you for your reservation.</p>
																							<p>Confirmation number: <b>{generateID()}</b>.</p>
																							<p>We're dedicated to giving you the best experience possible. If you have any questions, feel free to get in touch.</p>
					</h4></div>
				</div>

					<div className="row">
						<div className="input-group">
								<div className="div-row confButton">
									<button className="inpt col-half btnBk" onClick={handleCancelACB}>Go back to homepage</button>
								</div>
						</div>
					</div>

		</div>
    );

}


export default confirmationView;
