// function for the API to pull page text from wikipedia page, limited to 500 characters. Requires breed name pulled from different api.
// Function will need to be modified to insert text to an html element instead of the console.
export async function wikiAPI(breedName){
  const url = "https://en.wikipedia.org/w/api.php?origin=*&action=query&prop=extracts&exlimit=1&titles=" + breedName + "&explaintext=1&exsectionformat=plain&format=json"
  const options = {method: 'GET'};

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    const pageNumber = String(Object.keys(result.query.pages)[0])
    const pageText = result.query.pages[pageNumber].extract
    const wikiURL = "https://en.wikipedia.org/wiki/" + breedName
    console.log(pageText.slice(0, 500) + "...   Look at the full page here: " + wikiURL.replace(/ /g,"_"));
  } catch (error) {
    console.log("Sorry, it looks like we can't get you a desription of this breed at this time...");
  }
}




/******************************************
Below are insturctions on how to call various API's
*************************************************/

/*const url = 'https://dogbreeddb.p.rapidapi.com/?ordering=-breedName';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'cd6d7c0911mshe4bdcca6ddf3846p154c76jsnf7c7b3588405',
		'x-rapidapi-host': 'dogbreeddb.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}*/


/*const url = 'https://dogbreeds.p.rapidapi.com/api/dog-breeds/list/profiles';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'cd6d7c0911mshe4bdcca6ddf3846p154c76jsnf7c7b3588405',
		'x-rapidapi-host': 'dogbreeds.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}*/

// API for getting do ginfo based off various paramters. name, min and max height, shedding, barking, energy, proctectivness, trainability, 
// life expectancy.

/*var shedding = "shedding=1-5"
var barking = "&barking=2"
var energy = "&energy=7"
var trainability = "&trainability=1"
var proctectivness = "&protectiveness=3"

const url = 'https://api.api-ninjas.com/v1/dogs?' + shedding //+ barking + energy //+ trainability + proctectivness
const options = {
    method: 'GET',
	headers: {
        'X-API-Key': 'oFTV0vhXPjAdfyjjlcBp+g==9kJdYIVHSfUol9pL'
    }
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
} catch (error) {
	console.error(error);
}*/


/* API for getting basic info about breeds and images. Weight, life span, breed Group, bred_for, name, 
const headers = new Headers({
  "Content-Type": "application/json",
  "x-api-key": "live_zoJTjPpO6YGh46BzPq6JE0HnR2hXm8RKHXFzaDvXZQSfaCDAmhuxvNB0i1IsN1yi"
});

var requestOptions = {
  method: 'GET',
  headers: headers,
  redirect: 'follow'
};

fetch("https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=100", requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error)); */
/*var json = [];
  for (let i = 1; i < 30; i++){
    const url = 'https://dogapi.dog/api/v2/breeds?page[number]=' + i
    const options = {
      method: 'GET'
    };
  
    try {
    const response = await fetch(url, options);
    const result = await response.json();
    result.data.map((entry) => json.push(entry))
    } catch (error) {
      console.error(error);
    }

  }
console.log(json);
  */

