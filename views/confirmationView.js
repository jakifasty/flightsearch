function confirmationView(props) {


	return (
        <div className="confirmation">
		<div className="div-table">
				<div className="div-row "> {props.flightData.date} </div>
                <div className="div-row "> {props.flightData.route} </div>
				<div className="div-row "> {props.flightData.confirmationNumber} </div>
				<div className="div-row "> Mobile check-in is not available for this route.</div>

                <div className="div-row "> <button onclick="window.print()">Print This Page</button> </div>

                
                <div className="div-row"><button>Email confirmation</button></div>
          
		</div>
		</div>
    );

}


export default confirmationView;