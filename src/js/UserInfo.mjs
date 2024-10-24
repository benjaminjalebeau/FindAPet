import { formDataToJSON, setLocalStorage } from "./utils.mjs";
//Handles form data with local storage.
export default class UserInfo {
    
    async saveData(){
        const formElement = document.forms["userInfoForm"];
        const json = formDataToJSON(formElement);
        setLocalStorage("UserAnswers", json);
    }

    async savePreference(){
        const formElement = document.forms["userPreferenceForm"];
        const json = formDataToJSON(formElement);
        setLocalStorage("UserPreference", json);
    }
    
}