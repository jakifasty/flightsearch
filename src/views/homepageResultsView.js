function HomepageResultsView(props){
  function listResultsCB(flight){

    //console.log(flight.slices[0].origin.iata_code);
    return (
      <tr className="" key={flight.id} onClick={function (event){window.location.hash="#details"; props.onChooseFlight(flight)}}>
          <td>
            {flight.slices[0].origin.name}
          </td>
          <td>
            {flight.slices[0].destination.name}
          </td>
          <td>
            {flight.total_amount+" "+flight.total_currency}
          </td>
          <td>
            {flight.owner.name}
          </td>
          <td>
            {flight.slices[0].segments[0].departing_at}
          </td>
          <td>
            {flight.slices[0].segments.length}
          </td>
      </tr>
    );
  }

  return (
          <div>
            <table>
              <thead>
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
              </thead>
              <tbody>
                {props.results.data.offers.map(listResultsCB)}
              </tbody>
            </table>
          </div>
  );
}
export default HomepageResultsView;
