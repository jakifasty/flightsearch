function DetailsView(props){
  console.log(props.flightData);
  return <div> Details about chosen flight {JSON.stringify(props.flightData)}</div>
}
export default DetailsView;
