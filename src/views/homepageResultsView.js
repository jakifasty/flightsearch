function HomepageResultsView(props){

  function listResultsCB(flight){
    
    console.log(flight.slices);

    return (
        <tr className="flightResults" key={flight.id} onClick={function (event) { window.location.hash = "#details"; props.onChooseFlight(flight); } }>

          <td>
            {flight.owner.name + "    "}
          </td>

          <td>
            {flight.slices[0].segments[0].departing_at + "    "}
          </td>
          <td>
            {flight.slices[0].segments[0].arriving_at + "    "}
          </td>

          <td>
            {flight.slices[0].origin.name + ", Terminal " + flight.slices[0].origin_terminal + "    "}
          </td>
          <td>
            {flight.slices[0].destination.name + ", Terminal " + flight.slices[0].destination_terminal + "    "}
          </td>

          <td>
            {"Duration " + flight.slices[0].segments[0].duration}
          </td>

          <td>
            {"Flight " + flight.slices[0].segments[0].operating_carrier.iata_code + flight.slices[0].segments[0].operating_carrier_flight_number}
          </td>

          <td>
            {(flight.slices[0].segments.length - 1) + " layover/s"}
          </td>

          <td>
            {flight.slices[0].fare_brand_name + " fare    "}
          </td>

          <td>
            {flight.total_amount + " " + flight.total_currency + "    "}
          </td>

        </tr>
    );
  }

  return (
          <div>
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

              <div>
                {props.results.data.offers.map(listResultsCB)}
              </div>
              </tbody>
            </table>
          </div>
  );
}
export default HomepageResultsView;
