import { renderListWithTemplate, getLocalStorage } from "./utils.mjs";


// Template for a breed card on the breedslist view
function breedCardTemplate(breed) {
    return `<li class="breedCard">
      <a href="/infoPage/index.html?breed=${breed.name}">
        <div class="flip-card">
          <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src="${breed.image_link}" alt="Picture of a ${breed.name}" />
            <h3 class="cardName">${breed.name}</h3>
          </div>
          <div class="flip-card-back">
            <h3 class="cardName">${breed.name}</h3>
            <ul>
              <img class="flippedImage" src="${breed.image_link}" alt="Picture of a ${breed.name}" />
              <li>Life Expectancy: ${breed.min_life_expectancy} - ${breed.max_life_expectancy} years</li>
              <li>Weight: ${breed.min_weight_female} - ${breed.max_weight_male} lbs</li>
              <li>Height: ${breed.min_height_female} - ${breed.max_height_male} inches</li>
            </ul>

          </div>
        </div>
      </div>  
      </a>
    </li>`;
  }

//
export default class BreedList {
    constructor(dataSource, listElement){
        this.dataSource = dataSource;
        this.listElement = listElement;
        this.matchValue = 5;
    }

    async init() {
        //Will call an api using the answers given by the user. 
        let url = this.dataSource.createBreedListURL(0);
        let list = await this.dataSource.getNinjaDogAPIdata(url);
        //If no results are found, parameters will be adjusted until results are found.
        if(list.length === 0)
          for (let i = 1; i < 5; i++){
            url = await this.dataSource.createBreedListURL(i);
            list = await this.dataSource.getNinjaDogAPIdata(url);
            this.matchValue -= 1;
            if(list.length > 0){break}
          }
        //Once results have been found, a template will be used to generate the breedlist view.
        document.querySelector("#matchMessage").innerHTML = this.returnMatchMessage();
        this.renderList(list)
    }
    //Generates content using a template and stored api data.
    renderList(list){
        renderListWithTemplate(breedCardTemplate, this.listElement, list)
    }

    //This will return a message depending on how many parameters were asjusted to get results.
    returnMatchMessage(){
      switch (this.matchValue){
        case 5:
          return "Match Strength: Great! These breeds will fit your lifestyle very well!";
        case 4:
          return "Match Strength: Good! These breeds will fit your lifestyle well!";
        case 3:
          return "Match Strength: Decent. These breeds will be an okay fit to your lifestyle.";
        case 2:
          return "Match Strength: Poor. There weren't breeds that fit well into your lifestyle, but these will be your best bet.";
        case 1:
          return "Match Strength: Very Poor. Perhaps a dog won't fit well into your lifestyle, but try looking at these breeds.";
      }

    }
}