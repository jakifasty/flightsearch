function HomepageResultsView(props){
  function listResultsCB(flight){

    let flightTime = parseInt('flight.slices[0].segments[0].duration', 16); //convert from minutes in hexadecimal to hours in decimal
    

    return (
      <tr className="flightResults" key={flight.id} onClick={function (event){window.location.hash="#details"; props.onChooseFlight(flight)}}>         
        <td>
          <img src={"https://content.r9cdn.net/rimg/provider-logos/airlines/v/"+flight.slices[0].segments[0].operating_carrier.iata_code+".png?crop=false&width=100&height=90&fallback=default1.png"} alt=""></img>
        </td>
        <td>
          {flight.owner.name + "    " } 
        </td>

        <td>
          {flight.slices[0].segments[0].departing_at + "    " }
        </td>
        <td>
          {flight.slices[0].segments[0].arriving_at + "    " }
        </td>

        <td>
          {flight.slices[0].origin.name + ", Terminal " + flight.slices[0].origin_terminal + "    " }
        </td>
        <td>
          {flight.slices[0].destination.name + ", Terminal " + flight.slices[0].destination_terminal + "    "}
        </td>

        <td>
          {"Duration " + flightTime + "h   "}
        </td>

        <td>
          {"Flight " + flight.slices[0].segments[0].operating_carrier.iata_code + flight.slices[0].segments[0].operating_carrier_flight_number}
        </td>

        <td>
          {flight.slices[0].fare_brand_name + " fare    " }
        </td>

        <td>
          {flight.total_amount + " " + flight.total_currency + "    "}
        </td>

      </tr>
    );
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
            <table>
              {/*<thead>
              <tr>
                <th>
                  From
                </th>
                <th>
                  To
                </th>
                <th>
                  Price
                </th>
                <th>
                  Airline
                </th>
                <th>
                  Departure
                </th>
                <th>
                  Hops
                </th>
              </tr>
              </thead>*/}
              <tbody>
                {props.results.data.offers.map(listResultsCB).slice(0,props.displayAmount)}
              </tbody>
            </table>
          </div>
  );
}
export default HomepageResultsView;
