import { getLocalStorage } from "./utils.mjs";

function checkFilter(filterstrength){ 
  
}
//As stated, converts an api response to a json file.
function convertToJson(res) {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Bad Response");
    }
  }

// class handles all api functionality.
export default class ExternalServices {
    //Pulls data from wikipedia api to get info based of breed name. 
    //Works with name returned from ninjaDogAPI
    async getWikiAPIdata(breedName){
      const url = "https://en.wikipedia.org/w/api.php?origin=*&action=query&prop=extracts&exlimit=1&titles=" + breedName + "&explaintext=1&exsectionformat=plain&format=json"
      const options = {method: 'GET'};
      
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        const pageNumber = String(Object.keys(result.query.pages)[0])
        const pageText = result.query.pages[pageNumber].extract
        const wikiURL = "https://en.wikipedia.org/wiki/" + breedName
        return pageText.slice(0, 500) + "...   Look at the full page here: " + wikiURL.replace(/ /g,"_")
      } catch (error) {
        console.log("Sorry, it looks like we can't get you a desription of this breed at this time...");
      }
    }
    //Generates url based off of user answers. 
    //Applies a filter that removes the least important parameters based off filterstrength parameter.
    createBreedListURL(filterStrength){
      const baseURL = `https://api.api-ninjas.com/v1/dogs?`;
      let url = baseURL;
      let param;
      let ansKey;
      let prefKey;

      const ans = getLocalStorage("UserAnswers");
      const pref = getLocalStorage("UserPreference");
      //Adds parameter to url if filter check was passed.
      for(let i = 0; i < 5; i++){
        ansKey = Object.keys(ans)[i];
        param = ans[ansKey];
        if(ansKey === "protectiveness" || ansKey === "trainability"){
          if (Number(param) > 1 + filterStrength){
            url += `${ansKey}=${param}&`;
            console.log(ansKey + "added to url: " + param);
          }
        } else{
          if (Number(param) < 5 - filterStrength){
            url += `${ansKey}=${param}&`;
            console.log(ansKey + "added to url: " + param);
          }
        }
      }
      //If no other parameters passed the filter check, 
      //passes the default param set by the second form on the main page
      if (url === baseURL){
        prefKey = pref.defaultParam
        param = ans[prefKey];
        url += `${prefKey}=${param}&`;
      }
      console.log(url)
      return url
    }

    //API data from ninjaAPI Uses 5 parameters to get a list of breeds. 
    //Parameters are defined by user and are in local storage under key: "UserAnswers"
    async getNinjaDogAPIdata(url){

        //const url = `https://api.api-ninjas.com/v1/dogs?shedding=5&barking=2&energy=3&trainability=4&protectiveness=5`
        //const url = `https://api.api-ninjas.com/v1/dogs?shedding=5&energy=5`
        const options = {
            method: 'GET',
            headers: {'X-API-Key': 'oFTV0vhXPjAdfyjjlcBp+g==9kJdYIVHSfUol9pL'}
          };
        
        try {
          const response = await fetch(url, options);
          const result = convertToJson(response);
          console.log(result);
          return result
        } catch (error) {
          console.error(error);
        }
    }

    //API data from ninjaAPI Uses 1 parameter to get a single breed. 
    //Parameters will be taken from a url parameter
    async getNinjaDogAPIdataByName(name){

        const url = `https://api.api-ninjas.com/v1/dogs?name=${name}`
        const options = {
            method: 'GET',
            headers: {'X-API-Key': 'oFTV0vhXPjAdfyjjlcBp+g==9kJdYIVHSfUol9pL'}
          };
    
        try {
          const response = await fetch(url, options);
          const result = convertToJson(response);
          console.log(result);
          return result
        } catch (error) {
          console.error(error);
        }
    }
  
}
