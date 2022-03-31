function confirmationView(props) {

	function printPageACB() {
		window.print();
	}

	return (
        <div className="confirmation">
			<div className="div-table">
					<div className="div-row confDate"> {props.flightData.date} </div>
					<div className="div-row confRoute"> {props.flightData.route} </div>
					<div className="div-row confNumber"> {props.flightData.confirmationNumber} </div>
					<div className="div-row confText"> Mobile check-in is not available for this route. </div>
	
					<div className="div-row>
						<div className="div-row confButton"> <button onclick={printPageACB}>Print This Page</button> </div>
						<div className="div-row confButton"><button>Email confirmation</button></div>			
					</div>   
			</div>
		</div>
    );

}


export default confirmationView;