function promiseNoData(promiseState){

  let loading_gif = "https://traveloptionsng.com/wp-content/uploads/2019/09/gogo-loader-plane-transparent.gif";

  function render (promise, data, error){
    if(!promise){
      return <div></div>
    }else if( !data && !error){
      return(
            <div className="outsideBoxResults">
              <img height="200" src={loading_gif}></img>
            </div>
            )
    }else if(error){
      return (
                <div>ERROR</div>
            )
    }else{
      return false;
    }
  }
  return render(promiseState.promise, promiseState.data, promiseState.error);

}
export default promiseNoData;
