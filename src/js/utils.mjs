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



// takes a form element and returns an object where the key is the "name" of the form input.
export function formDataToJSON(formElement) {
  const formData = new FormData(formElement),
    convertedJSON = {};

  formData.forEach(function (value, key) {
    convertedJSON[key] = value;
  });

  return convertedJSON;
}

// render a list with template
export function renderListWithTemplate(
  templateFn,
  parentElement,
  list,
  position = "afterbegin",
  clear = false,
) {
  if (clear) {
    parentElement.innerHTML = "";
  }

  const htmlStrings = list.map((product) => templateFn(product));
  parentElement.insertAdjacentHTML(position, htmlStrings.join(" "));
}

// get URL Parameters
export function getParams(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const product = urlParams.get(param);
  return product;
}

//Checks to see if the forms have been filled out, if so, prevents link to breedlist.
export async function checkForms(){
  //Becuase the nav is loaded via funtion, a slight delay is needed to make sure
  // the dom gets updated before the link in the nav is selected.
  let linkElement = document.querySelector(".preventLink");
  linkElement.addEventListener("click", (e) => {
    if(!getLocalStorage("UserAnswers") || !getLocalStorage("UserPreference") ){
      document.querySelector(".alert").innerHTML = "Fill out both forms please!";
      e.preventDefault();
    }
  })
}