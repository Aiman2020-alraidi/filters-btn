const menu = [
  {
    title: "Buttermilk Pancakes",
    price: 15.99,
    category: "brreakfast",
    img: "./images/img-1.jpeg",
    message:
      "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
  },
  {
    title: "Diner Double",
    price: 13.99,
    category: "lunch",
    img: "./images/img-2.jpeg",
    message:
      "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
  },
  {
    title: "Godzilla Milkshake",
    price: 6.99,
    category: "shakes",
    img: "./images/img-3.jpeg",
    message:
      "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
  },
  {
    title: "Country Delight",
    price: 20.99,
    category: "lunch",
    img: "./images/img-4.jpeg",
    message:
      "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut",
  },
  {
    title: "Egg Attack",
    price: 22.99,
    category: "shakes",
    img: "./images/img-5.jpeg",
    message:
      "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",
  },
  {
    title: "Oreo Dream",
    price: 18.99,
    category: "breakfast",
    img: "./images/img-6.jpeg",
    message:
      "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",
  },
  {
    title: "Bacon Overflow",
    price: 8.99,
    category: "lunch",
    img: "./images/img-7.jpeg",
    message:
      "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",
  },
  {
    title: "American Classic",
    price: 12.99,
    category: "shakes",
    img: "./images/img-8.jpeg",
    message:
      "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut",
  },
  {
    title: "Quarantine Buddy",
    price: 16.99,
    category: "dinner",
    img: "./images/img-9.jpeg",
    message:
      "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
  },
  {
    title: "Steak Dinner",
    price: 39.99,
    category: "breakfast",
    img: "./images/item-10.jpeg",
    message:
      "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
  },
];
const sectionCenter = document.querySelector(".section-center");
const filterBtns = document.querySelectorAll(".btns");

// loading items
window.addEventListener("DOMContentLoaded", () => {
  menuItems(menu);
});

// filterBtn
filterBtns.forEach((btns) => {
  btns.addEventListener("click", (e) => {
    const category = e.currentTarget.dataset.id;
    const meunCategory = menu.filter((menuItem) => {
      if (menuItem.category === category) {
        return menuItem;
      }
    });
    if (category === "all") {
      menuItems(menu);
    } else {
      menuItems(meunCategory);
    }
  });
});

const menuItems = (item) => {
  let menuCatigories = item.map((items) => {
    return ` 
        <article class="menu">
          <img class="img-item" src="${items.img}" alt="${items.title}" title =${items.title}/>
          <div class="item-info">
            <header>
              <h4 class="small-heading">${items.title}</h4>
              <span>$${items.price}</span>
            </header>
            <p class="menu-text">
            ${items.message}
            </p>
          </div>
        </article>
      `;
  });
  sectionCenter.innerHTML = menuCatigories.join("");
};
