async function fetchProducts(url) {
  try {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error, "error");
  }
}

const startUp = async () => {
  const productData = await fetchProducts(
    "/tasks-ndemin/CLASS-SWAPI/scripts/shopitems.json"
  );
  const fetchButton = document.querySelector(".start-button");
  fetchButton.addEventListener("click", () => {
    renderProducts(productData);
  });
  const myModal = document.getElementById("myModal");
  const myInput = document.getElementById("myInput");

  myModal.addEventListener("shown.bs.modal", () => {
    myInput.focus();
  });
};

function renderProducts(data) {
  const robotCheck = document.querySelector(".checkbox-robot");
  console.log(robotCheck.checked);
  if (!robotCheck.checked) {
    return alert("Please verify that you are human");
  }
  const products = data.ShopItems;
  const renderIntervalMS = 100;

  products.forEach((x, i) => {
    const contentContainer = document.querySelector(".content-container");
    contentContainer.innerHTML = "";
    setTimeout(() => {
      const cardWrap = document.createElement("a");
      cardWrap.style.display = "block";
      cardWrap.classList.add("card-wrap", "col-lg-4", "col-sm-12");
      cardWrap.setAttribute("data-bs-toggle", "modal");
      cardWrap.setAttribute("data-bs-target", "#exampleModal");
      cardWrap.addEventListener("click", () => {
        const modalBody = document.querySelector(".modalbody");
        modalBody.innerHTML = cardWrap.innerHTML;
      });
      const card = document.createElement("div");
      cardWrap.appendChild(card);
      card.setAttribute(
        "class",
        "border border-success p-2 mb-2 border-opacity-25"
      );
      card.name = `card-${i}`;
      card.id = `card-${i}`;
      card.classList.add("container");
      contentContainer.appendChild(cardWrap);
      Object.values(x).forEach((y, z) => {
        let p = Object.keys(x)[z];
        let cardItem = "";
        switch (p) {
          case "name":
            cardItem = document.createElement("h2");
            cardItem.innerHTML = y;
            break;
          case "type":
            cardItem = document.createElement("h4");
            cardItem.innerHTML = y;
            break;
          case "color":
            cardItem = document.createElement("h4");
            cardItem.innerHTML = y;
          case "brand":
            cardItem = document.createElement("h4");
            cardItem.innerHTML = y;
            break;
          case "price":
            cardItem = document.createElement("p");
            cardItem.innerHTML = `€${y}`;
            break;
          default:
            console.error("Invalid API");
            break;
        }
        cardItem.id = `id-${p}-${String(y).charAt(0)}-${i}`;

        card.appendChild(cardItem);
      });
    }, i * renderIntervalMS);
  });
  const searchInput = document.querySelector(".search-input");
  searchInput.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase();
    products.forEach((item, index) => {
      const card = document.querySelector(`#card-${index}`);
      const cardWrap = card.parentNode;
      if (!item.name.toLowerCase().includes(value)) {
        card.parentNode.style.display = "none";
        console.log(card.parentNode.classList);
      } else {
        card.parentNode.style.display = "flex";
        console.log(card.parentNode.classList);
      }
    });
  });
}
startUp();
