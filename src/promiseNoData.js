function promiseNoData(props){
  let loading_gif = "https://traveloptionsng.com/wp-content/uploads/2019/09/gogo-loader-plane-transparent.gif";
  let lama = "https://www.icegif.com/wp-content/uploads/icegif-30.gif";
  function render (promise, data, error){
    if(!promise){

      return <div></div>
    }else if(promise && !data && !error){
      return  <img height="200" src={loading_gif}></img>
    }else if(error){
      return <div>{error}</div>
    }else return ""
  }
  return render(props.promise, props.data, props.error);
}
export default promiseNoData;
