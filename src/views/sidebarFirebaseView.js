//sidebarFIrebaseView.js React file

function sidebarFirebaseView(props){

    return(
            <div>
                <table>
                    <tr>
                        <td>
                            My travel plan
                        </td>
                        <td>
                            Total costs:
                        </td>
                        <td width="10px">
                        </td>
                        <td className="right">
                            {props.total_amount}
                            {props.total_currency}
                        </td>
                    </tr>
                </table>
                {renderFlights(props.onCurrentFlight, props.onRemove, props.flights)}
            </div>
    );
}

function renderFlights(onCurrentFlight, onRemove, flights){
    function flightsTableRowCB(flight){
        return (
                <tr key={flight.id}>
                    <td>
                        <button onclick={function clickButtonACB(event){onRemove(flight);}}>x</button>
                    </td>

                    <td>
                        <a onClick={function clickButtonACB(event){onCurrentFlight(flight);}} href='#details'>{flight.orgin}
                        {flight.destination}</a>
                    </td>
                </tr>
        );
    }
    return(
            <table>
                <tbody>
                    {console.log("print content here")}
                    {/*map(flightsTableRowCB)*/}
                    {flights.map(flightsTableRowCB)}
                </tbody>
            </table>
    );
}

export default sidebarFirebaseView;
