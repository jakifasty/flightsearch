function HomepageResultsView(props){
  function listResultsCB(flight){

    let flightTime = flight.slices[0].duration
    if(flightTime.startsWith("PT")){
      flightTime = flightTime.substring(2)
    }
    else{
      flightTime = flightTime.substring(1).replace("T","")
    }



    return (
      <span className="flightResults" key={flight.id} onClick={function (event){window.location.hash="#details"; props.onChooseFlight(flight)}}>
        <div>
          <img src={"https://content.r9cdn.net/rimg/provider-logos/airlines/v/"+flight.slices[0].segments[0].operating_carrier.iata_code+".png?crop=false&width=100&height=90&fallback=default1.png"} alt=""></img>
        </div>
        <div>
          {flight.owner.name + "    " }
        </div>

        <div>
          {flight.slices[0].segments[0].departing_at + "    " }
        </div>
        <div>
          {flight.slices[0].segments[0].arriving_at + "    " }
        </div>

        <div>
          {flight.slices[0].origin.name + ", Terminal " + flight.slices[0].origin_terminal + "    " }
        </div>
        <div>
          {flight.slices[0].destination.name + ", Terminal " + flight.slices[0].destination_terminal + "    "}
        </div>

        <div>
          {"Duration " + flightTime}
        </div>

        <div>
          {"Flight " + flight.slices[0].segments[0].operating_carrier.iata_code + flight.slices[0].segments[0].operating_carrier_flight_number}
        </div>

        <div>
          {flight.slices[0].fare_brand_name + " fare    " }
        </div>

        <div>
          {flight.total_amount + " " + flight.total_currency + "    "}
        </div>

      </span>
    );
  }
  function sortACB(flight1,flight2){
    switch(props.sortType){
      case 'PriceUp':
        return flight1.total_currency  < flight2.totalCurrency
      default:
        break

    }
  }
  function onScrollACB(){
    props.onScrollEnd()
 }

 function onSelectDisplayAmountACB(event){
  props.setDisplayAmount(event.target.value)
 }

  return (
          <div>
            {window.addEventListener('scroll',onScrollACB)}
            Display:
            <select onInput={onSelectDisplayAmountACB}>
              <option value={10}> 10 </option>
              <option value={20}> 20 </option>
              <option value={50}> 50 </option>
              <option value="autoEnable"> auto </option>
            </select>
            {props.results.data.offers.sort(sortACB).slice(0,props.displayAmount).map(listResultsCB)}
          </div>
  );
}
export default HomepageResultsView;
