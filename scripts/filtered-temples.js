const menuButton = document.querySelector("#menu-button");
const mainNav = document.querySelector("#main-nav");

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.classList.toggle("open");

  mainNav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", isOpen);
  menuButton.setAttribute(
    "aria-label",
    isOpen ? "Close menu" : "Open menu"
  );
});


const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Seattle Washington",
    location: "Bellevue, Washington, United States",
    dedicated: "1980, November, 17",
    area: 110000,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/seattle-washington/400x250/seattle-washington-temple-lighted-1079843-wallpaper.jpg"
  },
  {
    templeName: "Dallas Texas",
    location: "Dallas, Texas, United States",
    dedicated: "1984, October, 19",
    area: 44207,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/dallas-texas/2018/400x250/Dallas-Texas-Temple10.jpg"
  },
  {
    templeName: "Boston Massachusetts",
    location: "Belmont, Massachusetts, United States",
    dedicated: "2000, October, 1",
    area: 69600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/boston-massachusetts/400x250/boston-temple-lds-945541-wallpaper.jpg"
  }
];

const templeContainer = document.querySelector(".temples-container");
const pageTitle = document.querySelector("#page-title");
const navLinks = mainNav.querySelectorAll("a[data-filter]");

const filters = {
  all: () => true,
  old: (temple) => Number(temple.dedicated.slice(0, 4)) < 1900,
  new: (temple) => Number(temple.dedicated.slice(0, 4)) > 2000,
  large: (temple) => temple.area > 90000,
  small: (temple) => temple.area < 10000,
};

const filterTitles = {
  all: "Home",
  old: "Old",
  new: "New",
  large: "Large",
  small: "Small",
};

function createTempleCard(temple) {
  const card = document.createElement("article");
  card.className = "temple-card";

  const image = document.createElement("img");
  image.src = temple.imageUrl;
  image.alt = `${temple.templeName} Temple`;
  image.loading = "lazy";

  const details = document.createElement("div");
  details.className = "temple-details";

  const name = document.createElement("h3");
  name.textContent = temple.templeName;

  const location = createTempleDetail("Location", temple.location);

  const [year, month, day] = temple.dedicated.split(", ");
  const dedicated = createTempleDetail("Dedicated", `${month} ${day}, ${year}`);

  const area = createTempleDetail(
    "Area",
    `${temple.area.toLocaleString("en-US")} sq ft`
  );

  details.append(name, location, dedicated, area);
  card.append(image, details);

  return card;
}

function createTempleDetail(label, value) {
  const detail = document.createElement("p");
  const labelElement = document.createElement("strong");

  labelElement.textContent = `${label}: `;
  detail.append(labelElement, value);

  return detail;
}

function renderTemples(filterName = "all") {
  const filterTemples = filters[filterName] ?? filters.all;
  const visibleTemples = temples.filter(filterTemples);

  templeContainer.replaceChildren(...visibleTemples.map(createTempleCard));
  pageTitle.textContent = filterTitles[filterName] ?? filterTitles.all;
}

mainNav.addEventListener("click", (event) => {
  const link = event.target.closest("a[data-filter]");

  if (!link) {
    return;
  }

  event.preventDefault();
  renderTemples(link.dataset.filter);

  navLinks.forEach((navLink) => {
    navLink.classList.toggle("active", navLink === link);
  });

  menuButton.classList.remove("open");
  mainNav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Open menu");
});

renderTemples();