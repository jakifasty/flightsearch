/* Functional JSX component. Name starts with capital letter */
function HomepageView(props){

    
    function changeAmountPeopleACB(event){
        props.onChangeAmountPeople(event.target.value)
    }
    

    function fromSelectTripTypeACB(event){
        props.onSelectTripType(event.target.value)
    }

    function sendMail(){
        console.log("TODO")
    }

    function fromTextInputACB(event){
        if(event.target.value.length>3){
            if(event.target.list.options.namedItem(event.target.value) !== null){
                props.onFromAirportSelect(event.target.value)
            }
            return
        }
        props.onSearchForAirport(event.target.value)
    }

    function changeFromDateACB(event){
        props.onSelectFromDate(event.target.value)
    }
    function changeReturnDateACB(event){
        props.onSelectReturnDate(event.target.value)
    }

    function toTextInputACB(event){
        if(event.target.value.length>3){
            if(event.target.list.options.namedItem(event.target.value) !== null){
                props.onToAirportSelect(event.target.value)
            }
            return
        }
        props.onSearchForAirport(event.target.value)
    }

    

    //TODO move this (Date) to apropriate place(Most likely model)
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
                            <button disabled={props.amountOfAdults <1} onClick={changeAmountPeopleACB} value="Adult -">-</button>
                            {props.amountOfAdults}
                            <button  disabled={props.amountOfPeople >=9} onClick={changeAmountPeopleACB} value="Adult +">+</button>
                        </div>
                        <div>Youths 1-18 :
                            <button disabled={props.amountOfYouths <1} onClick={changeAmountPeopleACB} value="Youth -">-</button>
                            {props.amountOfYouths}
                            <button disabled={props.amountOfPeople >=9} onClick={changeAmountPeopleACB} value="Youth +">+</button>
                        </div>
                    </div>
                </div>
                <div className="outsideBox">
                    <input className="center" type="search" list="listID" name="From" placeholder="From..." onChange={fromTextInputACB}></input>
                    <input className="center" type="search"  list="listID" name="Destination" placeholder="Pick a destination..." onChange={toTextInputACB}></input>
                    <input className="center" placeholder="test" type="date" name="trip-start"
                            min={today} max={twoYearsAfterToday} onChange={changeFromDateACB}>
                    </input>
                    <input className={props.tripType ==="One"? "hidden": "center"}type="date" name="returnDate"
                            min={today} max={twoYearsAfterToday} onChange={changeReturnDateACB}>
                    </input>
                </div>
                <div className="outsideBox"></div>
                <button disabled={false/* TODO !props.isValidRequest*/} onClick={sendMail}>Search</button>
                {getAirportList(props.airportResults)}
            </div>
            
    );

}

function getAirportList(e){
    if(e == undefined){
        return <datalist id="listID"></datalist>
    }
    var k = Object.keys(e)[0]

    if(k== undefined){
                    return <datalist id="listID"></datalist>
    }

    e = e[k]

    if (k.length === 2){           
      return <datalist className="textOverflow" id="listID">
          { e.map(function (airport){
            var key = Object.keys(airport)
            airport = airport[key]
             return <option id ={airport.airportName} value ={airport.airportName} className="textOverflow">{airport.country + ", "+ airport.region+ " ("+key+")"}</option>
         }
         )}
      </datalist> 
    }
    return <datalist className="textOverflow" id="listID">
        <option id ={e.airportName} value ={e.airportName} className="textOverflow"> {e.country + ", "+ e.region+" ("+k+")"} </option>
    </datalist>
}

   
export default HomepageView;