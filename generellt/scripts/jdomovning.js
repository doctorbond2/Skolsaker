const evenAndOdd = [2, 5, 10, 15, 20, 25, 30, 50, 60, 92];
const testSubjects = [
  {
    name: "Jeremy Jahn Jacobs",
    age: 423,
    amountOfPets: 1,
    email: "beware.shumail.org",
    favoriteAuthor: "Jeorsh arg arg Martin",
    lovesWinter: true,
  },
  {
    name: "Fredrik Lövfen",
    age: 30 + 23,
    amountOfPets: 1 + 4,
    email: "samtidenochframtiden.se",
    favoriteAuthor: "lasse berghagen",
    lovesWinter: true,
  },
  {
    name: "HugoX",
    age: 0,
    amountOfPets: 9999,
    email: "argosaxl.argxl",
    favoriteAuthor: "Leffe borg",
    lovesWinter: false,
  },
];

const p1E = document.createElement("p");
p1E.innerText = "Hej från Javascript!";
document.body.appendChild(p1E);

const h1E = document.createElement("h1");
h1E.innerText = "Rubrik från javascript!";
document.body.insertBefore(h1E, p1E);

const b1E = document.createElement("button");
b1E.innerText = "p-color";
document.body.append(b1E);

const b2E = document.createElement("button");
document.body.appendChild(b2E);
b2E.innerText = "Change background";

buttonListener(b1E, "p", "red");
buttonListener(b2E, "body", "beige");

eNOList(evenAndOdd);

const div1E = document.createElement("div");
div1E.setAttribute("id", "profile-cards");
div1E.setAttribute(
  "style",
  "width:100%; height: 30vh; background-color: beige; display: flex;"
);
div1E.innerHTML = "packholder";
document.body.insertBefore(div1E, document.querySelector("ul").nextSibling);
renderCards(div1E);

function buttonListener(target, tag, color) {
  let targetElement = target;
  console.log(targetElement);
  targetElement.addEventListener("click", () => {
    const pAll = document.querySelectorAll(tag);
    pAll.forEach((x) => {
      console.log(tag);
      tag === "body" || tag === "html"
        ? (x.style.backgroundColor = color)
        : (x.style.color = color);
    });
  });
}

function eNOList(array) {
  let unsortedList = document.createElement("ul");
  unsortedList.innerText = "Unsorted list";
  document.body.appendChild(unsortedList);
  array.forEach((x) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = x;
    unsortedList.appendChild(listItem);
  });

  let listItems = unsortedList.querySelectorAll("li");
  let listTimer = 0;

  listItems.forEach((x) => {
    listTimer++;
    if (listTimer >= 5) {
      listTimer = 0;
      x.style.color = "green";
    } else {
      x.innerText % 2 === 0
        ? (x.style.color = "red")
        : (x.style.color = "blue");
    }
  });
}

function renderCards(rendertarget) {
  testSubjects.forEach((x, i) => {
    console.log(i);
    const { name, age, amountOfPets, email, favoriteAuthor, lovesWinter } = x;
    rendertarget.innerHTML += `
    <div>
    <h2>${name}</h2>
    <h3>${age}</h3>
    <h3>${amountOfPets}</h3>
    <h4>${email}</h4>
    <h4>${favoriteAuthor}</h4>
    <h5>${lovesWinter}</h5>
    </div>
    `;
    rendertarget.appendChild;
  });
}

// name: "Jeremy Jahn Jacobs",
// age: 423,
// amountOfPets: 1,
// email: "beware.shumail.org",
// favoriteAuthor: "Jeorsh arg arg Martin",
// lovesWinter: true,
