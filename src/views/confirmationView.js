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
				<div>
					<h4 className="header4"> Thank you for your reservation. Confirmation number: <b>{generateID()}</b>. <br/>
					We're dedicated to giving you the best experience possible. If you have any questions, feel free to get in touch. </h4>
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
