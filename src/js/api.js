

/******************************************
Below are insturctions on how to call various API's Some used, some not.
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

