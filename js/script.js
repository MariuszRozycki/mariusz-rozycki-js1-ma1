// Question 1
const cat = {
  complain: function () {
    console.log("Meow!");
  }
};

console.log(cat.complain());



// Question 2
const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";



// Question 3
heading.style.fontSize = "2em";


// Question 4
heading.classList.add("subheading");


// Question 5
const paragraphs = document.querySelectorAll("p");

for (let paragraph of paragraphs) {

  paragraph.style.color = "red";

}


// Question 6
const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = `<p>New paragraph</p>`;
resultsContainer.style.backgroundColor = "yellow";


// Question 7
const cats = [
  {
    name: "Blob",
    age: 10
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21
  }
];

function showCatsNames(list) {
  for (let cat of list) {
    console.log(cat.name);
  }
}

showCatsNames(cats);