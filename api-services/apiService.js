var axios = require("axios");
const config = require('../config');
var mockData = require('../app/data/mock-data');
var convert = require('xml-js');

class ApiService{

    constructor(req, res){
      this.req = req;
      this.res = res;
    }

    InitiateApiCall() {
        var self = this;
        let query = self.req.query;
        let listOfLocations = [];
        let nextPageToken = '';
        let moreLocationsExist = false;
        
        listOfLocations = self.FillListOfLocations(query, listOfLocations, moreLocationsExist, nextPageToken, self);

        console.log('returning to route');
        console.log(listOfLocations);
        return listOfLocations;
    }

    buildUrlForHttpRequest(query, nextPageToken){
        let apiKey = "AIzaSyBE_xgviofVlo4peijo6gPlzzUCyipbHhU";
        // let apiKey = this.determineApiKey(query.customerName);
        var urlToReturn = (nextPageToken != '') 
            ? "https://maps.googleapis.com/maps/api/place/nearbysearch/"+query.outputType+"?pagetoken="+ nextPageToken+"&key=" + apiKey
            : "https://maps.googleapis.com/maps/api/place/nearbysearch/"+query.outputType+"?keyword="+query.customerName+"location=" + query.latitude + "," + query.longitude + "&rankby=distance&type="+query.locationType +"&key=" + apiKey;
        // console.log(urlToReturn);
        return urlToReturn
    }

    determineApiKey(customerNameFromQuery){
        switch(customerNameFromQuery.toLowerCase()) {
          case config.sunrise.name.toLowerCase():
            return config.sunrise.apikey;
          case config.happycu.name.toLowerCase():
            return config.happycu.apikey;
          case config.parisfcu.name.toLowerCase():
            return config.parisfcu.apikey;
          default:
            console.log("api key not found");
            return;
        }
    }

    FillListOfLocations(query, listOfLocations, moreLocationsExist, nextPageToken, self, resolve, reject){
        // console.log("list length " + listOfLocations.length)
        if (listOfLocations != query.numberOfLocations) {
            let queryUrl = self.buildUrlForHttpRequest(query, nextPageToken)
            return new Promise(function(resolve, reject) {
                // return mockData.results;
                try{
                    axios({
                        method:'get',
                        url:queryUrl,
                    }).then(function(result) {
                        if (result.status === 200) {
                            console.log(result)
                            
                            // if (query.outputType == "xml") {
                            //     console.log("isxml")
                            //     result.data = convert.xml2json(result.data, {compact: false, spaces: 4});
                            //     console.log("is converted")
                            //     console.log(result.data)
                            // }
                            if (result.data.status == "OVER_QUERY_LIMIT" || query.outputType == "xml"){
                                // console.log("setting mock data")
                                result.data = mockData;
                            }

                            if (result.data["next_page_token"] != '') {
                                moreLocationsExist = true
                                nextPageToken = result.data["next_page_token"]
                                // console.log("next page token " + nextPageToken);
                            }
                            // console.log(result.data.results)
                            result.data.results.forEach(function(item) {
                                if (listOfLocations.length != query.numberOfLocations) {
                                    listOfLocations.push(item);
                                }
                            })
                            if (listOfLocations.length != query.numberOfLocations && moreLocationsExist){
                                listOfLocations = self.FillListOfLocations(query, listOfLocations, moreLocationsExist, nextPageToken, self, resolve, reject)
                                // console.log(listOfLocations)
                            }
                            else {
                                // console.log("length " + listOfLocations.length)
                                moreLocationsExist = false;
                            }

                            resolve(listOfLocations)
                        }
                        else {
                            reject(Error(result.data));
                        }
                    });
                }
                catch(error){
                    reject(Error(error));
                }
            });
        }
    }
}


module.exports = ApiService;

