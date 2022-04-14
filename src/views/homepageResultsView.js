function HomepageResultsView(props){

  console.log(props.results);

  function listResultsCB(flight){
    return (
      <span key={flight.id} onClick={function (event){window.location.hash="#details"; props.onChooseFlight(flight)}}>



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
            {props.flightResults.map(listResultsCB)}

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
