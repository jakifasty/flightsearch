# Flightsearch
Basic web application to search, (book) and get information about schedule passenger flights.

## What we have done
### Homepage
We have created a homepage where the user can enter all the information needed to find a flight.
This includes the model, view and presenter. 
Main feauters of this is a "Homemade API"(webscarper) to get the names and codes of all airports so a user can search for them.(Only through the codes atm).
Some css ( example buttons within a dropdown menu).
#### Files included
##### Branch homepage
flightsearch/src/data/airports.json (Airport data)
flightsearch/scripts/getAirportsImproved.py (Getting info about airports and saving data)
flightsearch/src/reactjs/homepagePresenter.js (Presenter) 
flightsearch/src/views/homepageView.js (View)
flightsearch/src/FlightModel.js (Model)

Files not included here but avaiable in the branch are nothing really worth mentioning or should be scraped and are not used.
## What has to be done
### Homepage
Some last checks for user input(example do we have all information needed for a search).
Minor functionalities missing(example model does not support retruning flights yet). 

