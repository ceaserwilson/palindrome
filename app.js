// ***** select items  *********
const notify = document.querySelector(".alert");
const form = document.querySelector(".pal-form");
const pal = document.getElementById("pal");
const clearBtn = document.querySelector(".clear-btn");
const palContainer = document.querySelector(".pal-container");
const palList = document.querySelector(".pal-list");
// *******  add event listeners    *********
// submit forms
form.addEventListener("submit", addPal);
// clear items
clearBtn.addEventListener("click", clearItems);

// *******   functions   **********

function addPal(e) {
  e.preventDefault();
  const value = pal.value.toString();
  let opp = value.split("").reverse().join("");
  if (value && value == opp && value !== `mum`) {
    createListItem(opp);
    displayAlert(`${value} is a Palindrome`, "success");
    palContainer.classList.add("show-container");
  } else if (value && value === `mum`) {
    createListItem(opp);
    displayAlert(`aren't you a smart ass`, "success");
    palContainer.classList.add("show-container");
  } else if (value && value != opp) {
    displayAlert(`${value} is not a Palindrome`, "danger");
  } else {
    displayAlert(`please enter text`, `danger`);
  }
  setBackToDefault();
  console.log(palList.children);
}

// display alert
function displayAlert(text, action) {
  notify.textContent = text;
  notify.classList.add(`alert-${action}`);

  //   remove alert
  setTimeout(() => {
    notify.textContent = "";
    notify.classList.remove(`alert-${action}`);
  }, 1200);
}

// create list items
function createListItem(opp) {
  const element = document.createElement("article");
  // add id
  element.id = `${opp}`;
  // add class
  element.classList.add("pal-item");
  // inner html
  element.innerHTML = `<p class="title" id='${opp}'>${opp}</p>`;
  // append child
  palList.appendChild(element);
}
// set back to default
function setBackToDefault() {
  pal.value = "";
}

// clear items
function clearItems() {
  const listItems = document.querySelectorAll(".pal-item");
  //   iterate over itmes
  if (listItems.length > 0) {
    listItems.forEach((item) => {
      palList.removeChild(item);
    });
  }
  //   remove container
  palContainer.classList.remove("show-container");
  //   alert list cleared
  displayAlert(`list cleared`, `danger`);
  setBackToDefault();
}
