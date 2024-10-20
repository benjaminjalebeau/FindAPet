// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}


// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}

//This function returns the html from a partial file
async function loadPartial(path) {
  const res = await fetch(path);
  const partial = await res.text();
  return partial;
}

//This function inserts the partial's html into a parent element
export function renderWithPartial(
  partial,
  parentElement,
  position = "afterbegin",
) {
  parentElement.insertAdjacentHTML(position, partial);
}

//Renders teh header, nav and footer partials.
export async function loadHeaderNavFooter() {
  const footerPartial = await loadPartial("../partials/footer.html");
  const headerPartial = await loadPartial("../partials/header.html");
  const navPartial = await loadPartial("../partials/nav.html");

  const footerElement = document.querySelector("#footerPartial");
  const headerElement = document.querySelector("#headerPartial");
  const navElement = document.querySelector("#navPartial");

  renderWithPartial(footerPartial, footerElement);
  renderWithPartial(headerPartial, headerElement);
  renderWithPartial(navPartial, navElement);
}


// Renders the User Form
export async function loadUserForm() {
  const formPartial = await loadPartial("../partials/userInfoForm.html");
  const formElement = document.querySelector("#formPartial");
  renderWithPartial(formPartial, formElement);
}

// takes a form element and returns an object where the key is the "name" of the form input.
export function formDataToJSON(formElement) {
  const formData = new FormData(formElement),
    convertedJSON = {};

  formData.forEach(function (value, key) {
    convertedJSON[key] = value;
  });

  return convertedJSON;
}