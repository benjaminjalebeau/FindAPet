import { renderListWithTemplate, getLocalStorage } from "./utils.mjs";


// Template for a breed card on the breedspage
function breedCardTemplate(breed) {
    return `<li class="breedCard">
      <a href="/infoPage/index.html?breed=${breed.name}">
        <img src="${breed.image_link}" alt="Picture of a ${breed.name}" />
        <h3 class="cardName">${breed.name}</h3>
      </a>
    </li>`;
  }


export default class BreedList {
    constructor(dataSource, listElement){
        this.dataSource = dataSource;
        this.listElement = listElement;
    }

    async init() {
        const answers = getLocalStorage("UserAnswers");
        const shedding = answers.sheddingLevel
        const barking = answers.barkingLevel
        const energy = answers.energyLevel
        const trainability = answers.trainabilityLevel
        const proctectiveness = answers.protectiveLevel
        
        const list = await this.dataSource.getNinjaDogAPIdata(
            shedding, barking, energy, trainability, proctectiveness
        );
        this.renderList(list)
    }

    renderList(list){
        renderListWithTemplate(breedCardTemplate, this.listElement, list)
    }
}