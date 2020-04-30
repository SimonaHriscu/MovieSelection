//Hover effect

const items = document.querySelectorAll("li");

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
  descriptionBox.classList.add("displayDescription");
  if (event.target == items[0]) {
    posterImg.style.backgroundImage = "url('/img/1.Friends.jpg')";
  } else if (event.target == items[1]) {
    posterImg.style.backgroundImage = "url('/img/2.brother.jpg')";
    movieDescription.textContent = "In the deep south during the 1930s, three escaped convicts search for hidden treasure while a relentless lawman pursues them."
  } else if (event.target == items[2]) {
    posterImg.style.backgroundImage = "url('/img/3.tais-toi.jpg')";
    movieDescription.textContent = "One prisoner tells to another that he hid a very large amount of money before the arrest. Together they manage to escape, but this is where their adventures are just beginning."
  } else if (event.target == items[3]) {
    posterImg.style.backgroundImage = "url('/img/4.stealmillion.jpg')";
    movieDescription.textContent = "A woman who must steal a statue from a Paris museum to help conceal her father's art forgeries is assisted by a man."
  } else if (event.target == items[4]) {
    posterImg.style.backgroundImage = "url('/img/5.Womaningold.jpg')";
    movieDescription.textContent = "Maria Altmann, an octogenarian Jewish refugee, takes on the Austrian government to recover artwork she believes rightfully belongs to her family."
  }
}
//hide the description box
const descriptionBox = document.querySelector(".description-box");
descriptionBox.classList.add("hideDescription");
const posterImg = document.querySelector(".poster");
const movieDescription = document.querySelector("p");

//Event Listeners
items.forEach((item) => {
  item.addEventListener("mouseover", changeBackground);
  item.addEventListener("click", displayDescr);
  item.addEventListener("mouseout", backToDefault);
});
