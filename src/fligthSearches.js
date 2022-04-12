import {API_URL, API_TOKEN, API_MARKER, API_ACCESS_TOKEN} from "./apiConfig"

function treatHTTPResponseACB(response){
   /*TODO throw if the HTTP response is not 200, otherwise return response.json()*/
   if(response.status !== 200){
     throw new Error (response.status);
   }else{
     return response.json();
   }

}

function transformResultsACB(data){
  function extractACB(item){
    return item.AirportCode;
  }
  data = data.results.map(extractACB);
  return data;
}

function getAirportsInCity(params) {
  const options = {
  	method: 'GET',
  	headers: {
  		'X-RapidAPI-Host': 'world-airports-directory.p.rapidapi.com',
  		'X-RapidAPI-Key': '2c4bab0a8dmsh1f856fcfaecad74p194cb8jsnb0bb179161a5'
  	}
  };
  return fetch('https://world-airports-directory.p.rapidapi.com/v1/airports/'+ params.keyword + '?page=1&limit=20&sortBy=AirportName%3Aasc', options)
    .then(treatHTTPResponseACB)
    .then(transformResultsACB)
}/* end of second fetch parameter, object */

function getOffer(data) {
  let headers = {
    "Content-Type": "application/json",
    "Accept" : "application/json",
    "Accept-Encoding": "gzip",
    "Duffel-Version": "beta",
    "Authorization": "Bearer " + API_ACCESS_TOKEN
  };

  let body = JSON.stringify({
          data: {
            ...data,
          },
        });
  let method = 'POST'
  let compress = true;
  let url = 'https://api.duffel.com/air/offer_requests?return_offers=false';
  return fetch(url,{
      method : method,
      headers : headers,
      body : body,
      compress : compress,
    })
    .then(response => response.json())
    .catch(err => console.error(err));
}

export {getAirportsInCity, getOffer};
