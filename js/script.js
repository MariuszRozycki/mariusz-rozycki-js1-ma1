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
    console.log("Cat name:", cat.name);
  }
}

showCatsNames(cats);


// Question 8 - I'm using here the same array cats as in question 7
function createCats(cats) {

  let html = "";

  for (let cat of cats) {
    let catName = cat.name;
    let catAge = "Age unknown";


    if (cat.age) {
      catAge = cat.age;
    }

    html += `<div>
              <h5>Cat name: ${catName}</h5>
              <p>Cat age: ${catAge}</p>
            </div>`
  }

  return html;

}

const html = createCats(cats);

const catContainer = document.querySelector(".cat-container");
catContainer.innerHTML = html;

