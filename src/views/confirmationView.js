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

	function handlePrintACB(event) {
		window.print();
	}

	return (
		<div className="container">
				<div className="row">
					<div> <h2 className="centr"> Booking Successful </h2> </div>
					<div> <h1 id="check"> &#10004; </h1></div>
					<div><h4 className="header4 centr"> <p>Thank you for your reservation.</p>
																							<p>Confirmation number: <b>{generateID()}</b>.</p>
																							<p>We hope you enjoy your trip.</p>
					</h4></div>
				</div>

					<div className="row">
						<div className="input-group">
								<div className="div-row confButton">
									<button className="inpt col-half btnBk" onClick={handlePrintACB}>Print This Page</button>
									<button className="inpt col-half btnBk" onClick={handleCancelACB}>Go Home</button>
								</div>
						</div>
					</div>

		</div>
    );

}


export default confirmationView;
