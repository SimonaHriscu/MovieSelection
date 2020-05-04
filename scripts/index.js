//Import the object

import { data } from "./data.js";
let parsedData = JSON.parse(data);
const section = document.querySelector(".list-container");

//Creating the li
parsedData.forEach((obj) => {
 let { id, title } = obj;
let list = `<li id = ${id} class="items">${title}</li>`;
section.innerHTML += list;
})

//Creating the description box
const descriptionBox = document.querySelector(".description-box");
const items = document.querySelectorAll("li");
let cardContent = `
<div class="poster"><img src="" /></div>
<div class="description"><p></p></div>`;

descriptionBox.innerHTML += cardContent;


const posterImg = document.querySelector(".poster");
const movieDescription = document.querySelector("p");
const img = document.querySelector("img");

//Hide the description by default
descriptionBox.classList.add("hideDescription");


//Functions
function changeBackground() {
  this.style.backgroundColor = "#ffd369";
}
function backToDefault() {
  this.style.backgroundColor = "#ffffff";
  this.style.color = "#263f44";
}

function displayDescr(event) {
  this.style.backgroundColor = "#015668";
  this.style.color = "#ffd369";
  let data = parsedData.find((data) => data.id == this.id);
  descriptionBox.classList.add("displayDescription");
  movieDescription.innerHTML = data.description;
  img.src = data.image;
}

//Event Listeners
items.forEach((item) => {
  item.addEventListener("mouseover", changeBackground);
  item.addEventListener("click", displayDescr);
  item.addEventListener("mouseout", backToDefault);
});


