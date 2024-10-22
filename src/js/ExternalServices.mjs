

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
          const result = convertToJson(response);
          const pageNumber = String(Object.keys(result.query.pages)[0])
          const pageText = result.query.pages[pageNumber].extract
          const wikiURL = "https://en.wikipedia.org/wiki/" + breedName
          const content = pageText.slice(0, 500) + "...   Look at the full page here: " + wikiURL.replace(/ /g,"_");
          console.log(content);
          return content
        } catch (error) {
          const message = "Sorry, it looks like we can't get you a desription of this breed at this time...";
          console.log(message);
          return message;
        }
    }
    //API data from ninjaAPI Uses 5 parameters to get a list of breeds. 
    //Parameters are defined by user and are in local storage under key: "UserAnswers"
    async getNinjaDogAPIdata(shedding, barking, energy, trainability, protectiveness){

        const url = `https://api.api-ninjas.com/v1/dogs?shedding=${shedding}&barking=${barking}&energy=${energy}&trainability=${trainability}&protectiveness=${protectiveness}`
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
