/* Functional JSX component. Name starts with capital letter */
function HomepageView(props){

    
    function fromChangeAmountPeopleACB(event){
        props.onChangeAmountPeople(event.target.value)
    }
    
    function fromTextInputACB(event){
        props.onFromTextChange(event.target.value)
    }
    function fromSelectTripTypeACB(event){
        props.onSelectTripType(event.target.value)
    }
    function sendMail(){
    }

    var date = new Date()
    var today = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()
    var twoYearsAfterToday = (parseInt(today.split("-")[0])+2)+today.slice(today.indexOf("-"),today.length)
    return (

            <div className="mainBackground">
                <h1 style={{color: '#DA291CFF'}}>FlightSearch</h1>

                <select className="dropbtn" onChange={fromSelectTripTypeACB}>
                    <option value="One">One-way</option>
                    <option value="Round">Round-trip</option>
                </select>

                <div className="dropdown">
                    <select className="dropbtn">
                        <option className="hidden">People</option>
                    </select>
                    <div className="dropdown-content">
                        <div>Adults 18+ :
                            <button disabled={props.amountOfAdults <1} onClick={fromChangeAmountPeopleACB} value="Adult -">-</button>
                            {props.amountOfAdults}
                            <button  disabled={props.amountOfPeople >=9} onClick={fromChangeAmountPeopleACB} value="Adult +">+</button>
                        </div>
                        <div>Youths 1-18 :
                            <button disabled={props.amountOfYouths <1} onClick={fromChangeAmountPeopleACB} value="Youth -">-</button>
                            {props.amountOfYouths}
                            <button disabled={props.amountOfPeople >=9} onClick={fromChangeAmountPeopleACB} value="Youth +">+</button>
                        </div>
                    </div>
                </div>
                <div className="outsideBox">
                    <input className="center" type="text" name="From" placeholder="From" onChange={fromTextInputACB}></input>
                    <input className={props.tripType ==="One"? "hidden": "center"} type="text" name="Destination" placeholder="Destination"></input>
                    <input className="center" placeholder="test" type="date" name="trip-start"
                            min={today} max={twoYearsAfterToday}>
                    </input>
                    <input className={props.tripType ==="One"? "hidden": "center"}type="date" name="trip-back"
                            min={today} max={twoYearsAfterToday}>
                    </input>
                </div>
                <div className="outsideBox"></div>
                <button disabled={false/*!props.validRequest*/} onClick={sendMail}>Search</button>
            </div>
            
    );

}

    /*
     
    */
export default HomepageView;