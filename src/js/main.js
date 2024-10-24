import { loadHeaderNavFooter, loadUserForm } from "./utils.mjs";
import UserInfo from "./UserInfo.mjs";



// Renders header and footer
loadHeaderNavFooter();

//Creates UserInfo Object to Process Form Results.
let userAnswers = new UserInfo();

//Waits for Save Answer button to be selected.
document.querySelector("#userInfoForm").addEventListener("submit", (e) => {
    e.preventDefault();
    //calls User Info Module, to save answers to local storage
    document.querySelector("#submitAnswersMessage").innerHTML = "Answers Saved! Make sure you fill out the Preference Form Below!"
    userAnswers.saveData();
    
  });

//Waits for Save Preference button to be selected.
document.querySelector("#userPreferenceForm").addEventListener("submit", (e) => {
  e.preventDefault();
  //calls User Info Module, to save answers to local storage
  document.querySelector("#submitPreferencesMessage").innerHTML = "Preference Saved! If both forms were submitted, select the breed list tab!"
  userAnswers.savePreference();
  
  
});

// listening for click on the clear button, will clear local storage/all form data.
document.querySelector("#clearAnswers").addEventListener("click", (e) => {
    localStorage.clear();
    document.querySelector("#submitAnswersMessage").innerHTML = "Answers have been cleared"
    document.querySelector("#submitPreferencesMessage").innerHTML = "Preferences have been cleared"
  });
