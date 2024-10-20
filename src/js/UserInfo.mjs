import { formDataToJSON, setLocalStorage } from "./utils.mjs";

export default class UserInfo {
    
    async saveData(){
        const formElement = document.forms["userInfoForm"];
        const json = formDataToJSON(formElement);
        setLocalStorage("UserAnswers", json);
    }

    async savePreferences(){
        const formElement = document.forms["userPreferenceForm"];
        const json = formDataToJSON(formElement);
        setLocalStorage("UserPreferences", json);
    }
}