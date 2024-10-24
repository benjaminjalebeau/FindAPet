import { renderListWithTemplate, getLocalStorage } from "./utils.mjs";


// Template for a breed card on the breedslist view
function breedCardTemplate(breed) {
    return `<li class="breedCard">
      <a href="/infoPage/index.html?breed=${breed.name}">
        <img src="${breed.image_link}" alt="Picture of a ${breed.name}" />
        <h3 class="cardName">${breed.name}</h3>
      </a>
    </li>`;
  }

//
export default class BreedList {
    constructor(dataSource, listElement){
        this.dataSource = dataSource;
        this.listElement = listElement;
    }

    async init() {
        //Will call an api using the answers given by the user. 
        let url = this.dataSource.createBreedListURL(0);
        let list = await this.dataSource.getNinjaDogAPIdata(url);
        //If no results are found, parameters will be adjusted until results are found.
        if(list.length === 0)
          for (let i = 1; i < 5; i++){
            url = await this.dataSource.createBreedListURL(i);
            console.log(url);
            list = await this.dataSource.getNinjaDogAPIdata(url);
            if(list.length > 0){break}
          }
        //Once results have been found, a template will be used to generate the breedlist view.
        this.renderList(list)
    }
    //Generates content using a template and stored api data.
    renderList(list){
        renderListWithTemplate(breedCardTemplate, this.listElement, list)
    }
}