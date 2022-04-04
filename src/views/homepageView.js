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
    function toTextInputACB(event){
        props.searchForAirport(event.target.value)
    }

    function getListACB(e){
        var k = Object.keys(e)[0]

        if(k== undefined){
            console.log("UnDEFINDEDFS")
            return <datalist id="listID"></datalist>
        }

        e = e[k]

        if (k.length == 2){
            console.log("OOOOOO")
           
          return <datalist className="textOverflow" id="listID">
              { e.map(function (airport){
                var key = Object.keys(airport)
                airport = airport[key]
                 return <option className="textOverflow">{airport.airportName + "("+key+")"}</option>
             }
             )}
          </datalist> 
        }
        
        console.log("Returng last")

        return <datalist className="textOverflow" id="listID" >
            <option className="textOverflow"> {e.airportName + "("+k+")"} </option>
        </datalist>
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
                    <input className="center" type="search" list="listID" name="From" placeholder="From" onChange={fromTextInputACB}></input>
                    <input className={props.tripType ==="One"? "hidden": "center"} type="text"  list="Airports" name="Destination" placeholder="Destination" onChange={toTextInputACB}></input>
                    <input className="center" placeholder="test" type="date" name="trip-start"
                            min={today} max={twoYearsAfterToday}>
                    </input>
                    <input className={props.tripType ==="One"? "hidden": "center"}type="date" name="trip-back"
                            min={today} max={twoYearsAfterToday}>
                    </input>
                </div>
                <div className="outsideBox"></div>
                <button disabled={false/*!props.validRequest*/} onClick={sendMail}>Search</button>
                <input type="search" list="listID" placeholder="Pick a destination..." onChange={toTextInputACB} onSelect={console.log("Selected")}></input>
                {getListACB(props.airportResults)}
            </div>
            
    );

}



    /*
    
<input type="search" list="languages" placeholder="Pick a programming language..">

<datalist id="languages">
  <option value="PHP" />
  <option value="C++" />
  <option value="Java" />
  <option value="Ruby" />
  <option value="Python" />
  <option value="Go" />
  <option value="Perl" />
  <option value="Erlang" />
</datalist>
     
    */
export default HomepageView;