function HomepageResultsView(props){
  console.log(props.results);
  function listCB(dish){
    return <tr>
          <td>
          {dish.origin}
          </td>
          <td>
          {dish.destination}
          </td>
          <td>
          {dish.price}
          </td>
          <td>
          {dish.main_airline}
          </td>
          <td>
          {dish.depart_date}
          </td>
          </tr>
  }
  return (
          <div>
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
          </div>
  );
}
export default HomepageResultsView;
