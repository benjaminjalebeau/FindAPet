import { loadHeaderNavFooter, getLocalStorage } from "./utils.mjs";
import BreedList from "./BreedList.mjs";
import ExternalServices from "./ExternalServices.mjs";
//import { wikiAPI } from "./api";


// Renders header and footer
loadHeaderNavFooter();

//Checks to make sure both forms were filled out and stored in local storage.
if(!getLocalStorage("UserAnswers") || !getLocalStorage("UserPreference") ){
    //If either form is not filled, will return a message.
    document.querySelector("#incompleteFormMessage").innerHTML = "Please go back to the home page and submit both forms!";
} else{
    // If both forms were filled out, will generate the breed list
    let dataSource = new ExternalServices();
    const htmlTag = document.querySelector(".breedList");
    let list = new BreedList(dataSource, htmlTag);
    list.init();
    
}



