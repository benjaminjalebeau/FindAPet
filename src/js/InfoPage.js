import { loadHeaderNavFooter, getParams } from "./utils.mjs";
import BreedInfo from "./BreedInfo.mjs";
import ExternalServices from "./ExternalServices.mjs";



// Renders header and footer
loadHeaderNavFooter();

let breedName = getParams("breed");
console.log("this is the " + breedName);
let dataSource = new ExternalServices();

let info = new BreedInfo(dataSource, breedName);
info.init();