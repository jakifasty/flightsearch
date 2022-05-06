function HomepageResultsView(props){

  function fromSelectFilterTypeACB(event) {
    props.onSelectFilterType(event.target.value);
  }
  function listResultsCB(flight){

    //let flightTime = parseInt('', 16); //convert from minutes in hexadecimal to hours in decimal
    
    console.log(flight.slices);
    
    return (
      /*      <><div className="search-params">
        <select className="dropbtn" onChange={fromSelectFilterTypeACB}>
          <option value="price-up">One-way</option>
          <option value="price-down">Round-trip</option>
          <option value="flight-duration">Duration</option>
        </select>
    </div>*/
      <tr className="flightResults" key={flight.id} onClick={function (event){window.location.hash="#details"; props.onChooseFlight(flight)}}>         
        
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
          {"Duration " + flight.slices[0].segments[0].duration }
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
    /*<tr>
          <td>
          {flight.origin}
          </td>
          <td>
          {flight.destination}
          </td>
          <td>
          {flight.price}
          </td>
          <td>
          {flight.main_airline}
          </td>
          <td>
          {flight.departure_date}
          </td>
      </tr>*/
  }

  return (
          <div>
            {props.results.map(listResultsCB)}
          </div>
          /*<div>
            <table>
              <thead>
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
                  Depart Date
                </th>
              </thead>
            </table>
            See offers in console
          </div>*/
  );
}
export default HomepageResultsView;
