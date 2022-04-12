# -*- coding: utf-8 -*-
from bs4 import BeautifulSoup
import requests
import json
import re
alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
dictOfAirports ={}
for letter in alphabet:
    url = 'https://en.wikipedia.org/wiki/List_of_airports_by_IATA_airport_code:_'+letter
    response = requests.get(url)
    soup = BeautifulSoup(response.text,  'html5lib')
    table = soup.find('tbody')
    listOfFields = table.find_all('tr')
    currentPrefix = letter +'A'
    dictOfAirports[currentPrefix] ={}
    for e in listOfFields:
        anchor = e.find('span')
        if anchor is not None:
            currentPrefix = anchor.attrs.get('id')
            dictOfAirports[currentPrefix] ={}
        innerInfo = e.find_all('td')
        if innerInfo:
            iata = innerInfo[0].get_text()
            airportName = innerInfo[2].get_text()
            if not airportName.isalpha() :
                if airportName.endswith(')') or airportName.endswith(']'):
                    airportName = re.sub(r'(\[\d{1}\])|(\((.*)*\))','',airportName)
            location = innerInfo[3].get_text().split(',')
            country = location.pop().strip()
            if not location:
                region = country
            else:
                region = location.pop(0).strip()
            dictOfAirports[currentPrefix][iata]= {'airportName':airportName,'country':country,'region':region}
with open("src/data/airports.json", "w",encoding='utf8') as outfile:
    json.dump(dictOfAirports, outfile,ensure_ascii=False,indent=4)
