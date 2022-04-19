import {API_URL, API_TOKEN, API_MARKER, API_ACCESS_TOKEN, API_KEY} from "./apiConfig"

function treatHTTPResponseACB(response){
  console.log(response)
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

/*function getFlightDetails(id){ //taken from GET Get Recipe Information

	const endpoint = 'recipes/' + id + '/information';
	return fetch(BASE_URL + endpoint, {
		"method": "GET",
		"headers":  {
			'X-Mashape-Key': API_KEY,
			"x-rapidapi-url": BASE_URL,
		}}).then(treatHTTPResponseACB);
}*/

function getOffers(data) {
  let headers = {
    "Api-Url" : "https://api.duffel.com/air/offer_requests?return_offers=true",
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
  let url = 'http://81.232.10.252:3000/CORS';//https://api.duffel.com/air/offer_requests?return_offers=true
  return fetch(url,{
      method : method,
      headers : headers,
      body : body,
      compress : compress,
    })
    .then(response => response.json())
    .catch(err => console.log(err));
}

export {getAirportsInCity, getOffers};
