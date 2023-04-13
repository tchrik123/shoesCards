const mainElement = document.querySelector("main");
const menBtn = document.querySelector("#menBtn");
const womenBtn = document.querySelector("#womenBtn");
const kidsBtn = document.querySelector("#kidsBtn");

let activeType = "men";

const dummyData = {
  men: [
    {
      brand: "Adibas",
      model: "Gazelle",
      style: "sneakers",
      price: 150,
      size: ["m", "l", "xl"],
    },
    {
      brand: "Puma",
      model: "jordan",
      style: "sport",
      price: 200,
      size: ["s", "m", "xl"],
    },
    {
      brand: "Nike",
      model: "top sider",
      style: "classic",
      price: 250,
      size: ["xs", "m", "xl"],
    },
  ],
  women: [
    {
      brand: "gucci",
      model: "kaloshi",
      style: "other",
      price: 50,
      size: ["m", "l", "xl"],
    },
    {
      brand: "pradda",
      model: "Sandals",
      style: "other",
      price: 20,
      size: ["xs", "m", "xl"],
    },
    {
      brand: "chanel",
      model: "boot",
      style: "other",
      price: 130,
      size: ["s", "m", "xl"],
    },
  ],
  kids: [
    {
      brand: "VERSACE YOUNG",
      model: "Sneakers ",
      style: "sneakers",
      price: 150,
      size: ["xs", "m", "xl"],
    },
    {
      brand: "DOLCE & GABBANA",
      model: "jordan",
      style: "sport",
      price: 150,
      size: ["s", "m", "xl"],
    },
    {
      brand: "Nike",
      model: "Boots",
      style: "classic",
      price: 150,
      size: ["m", "l", "xl"],
    },
  ],
};

function activeButtonBg() {
  switch (activeType) {
    case "men": {
      menBtn.setAttribute("class", "active");
      womenBtn.removeAttribute("class");
      kidsBtn.removeAttribute("class");
      break;
    }
    case "women": {
      womenBtn.setAttribute("class", "active");
      menBtn.removeAttribute("class");
      kidsBtn.removeAttribute("class");
      break;
    }
    case "kids": {
      kidsBtn.setAttribute("class", "active");
      menBtn.removeAttribute("class");
      womenBtn.removeAttribute("class");
      break;
    }
    default: {
      menBtn.setAttribute("class", "active");
      womenBtn.removeAttribute("class");
      kidsBtn.removeAttribute("class");
      break;
    }
  }
}

menBtn.addEventListener("click", () => {
  activeType = "men";
  activeButtonBg();
  createCard();
});
womenBtn.addEventListener("click", () => {
  activeType = "women";
  activeButtonBg();
  createCard();
});
kidsBtn.addEventListener("click", () => {
  activeType = "kids";
  activeButtonBg();
  createCard();
});

function createCard() {
  mainElement.replaceChildren();

  dummyData[activeType].forEach((element) => {
    const cardDiv = document.createElement("div");
    cardDiv.className = "card";

    const cardImage = document.createElement("img");
    cardImage.setAttribute("src", "./images/shoes.avif");
    cardImage.setAttribute("alt", element.model);

    const infoDiv = document.createElement("div");

    const h2 = document.createElement("h2");
    h2.innerText = element.brand;
    const h3 = document.createElement("h3");
    h3.innerText = element.model;
    const h4 = document.createElement("h4");
    h4.innerText = element.style;
    const priceP = document.createElement("p");
    priceP.innerText = `$ ${element.price}`;
    const sizeP = document.createElement("p");
    const button = document.createElement("button");
    button.innerText = "Add To Cart";

    infoDiv.append(h2, h3, h4, priceP, sizeP, button);

    cardDiv.appendChild(cardImage);
    cardDiv.appendChild(infoDiv);

    mainElement.appendChild(cardDiv);
  });
}
createCard();
