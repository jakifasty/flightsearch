function HomepageResultsView(props){

  console.log(props.results);

  function listResultsCB(flight){
    //console.log(flight.slices[0].origin.iata_code);

    return (
      <span key={flight.id} onClick={function (event){window.location.hash="#details"; props.onChooseFlight(flight)}} className="flightResults">
        <tr className="infoSquare">
            {<td>{flight.id}</td>}
            <tr></tr>
            <td>{flight.total_amount}</td><tr></tr>
            <td>{flight.total_currency}</td>
            <td>{flight.main_airline}</td>
            <td>
              {flight.slices.origin}
            </td>
            <td>
              {flight.slices.destination}
            </td>
            <td>
              {flight.slices.departure_date}
            </td> 
            <td>
              {flight.slices.main_airline}
            </td>
        </tr>
      </span>
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
            {props.results.data.offers.map(listResultsCB)}
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
