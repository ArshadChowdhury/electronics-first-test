import "./style.scss";

document.querySelector("#app").innerHTML = `
<main class="main-container">
  <nav class="nav-container">
    <img src="/logo.webp" class="logo" alt="">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
      class="mobile-nav">
      <path stroke-linecap="round" stroke-linejoin="round"
        d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
    </svg>
    <div class="navbar">
      <ul class="first-nav-items">
        <li>Trending</li>
        <li>Pre-orders</li>
        <li>Upcoming</li>
        <li>Support 24/7</li>
      </ul>
      <ul class="second-nav-items">
       <li class="nav-items-with-icons">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="other-icons">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
          </svg>
          PC
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="other-icons drop-down-icons">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </li>
        <li class="nav-items-with-icons">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="other-icons">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
          </svg>
          Playstation
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="other-icons drop-down-icons">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </li>
        <li class="nav-items-with-icons">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="other-icons">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
          Xbox
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="other-icons drop-down-icons">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </li>
        <li class="nav-items-with-icons">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="other-icons">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
          </svg>
          Nintendo
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="other-icons drop-down-icons">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </li>
        <li class="search-box">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="search-icon">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="serch-bar-close">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </li>
      </ul>
      <div class="dropdown-container">
        <div class="dropdown-view">
          <div class="dropdown-header">
            <h4>Platforms</h4>
            <button class="view-all-button">View all</button>
          </div>
          <div class="dropdown-items">
            <ul>
            </ul>
          </div>
        </div>
        <div class="dropdown-view">
          <div class="dropdown-header">
            <h4>Prepaid Cards</h4>
            <button class="view-all-button">View all</button>
          </div>
          <div class="dropdown-items">
            <ul>
              <li>Steam Gift Cards</li>
              <li>IG Gift Cards</li>
              <li>Blizzard Gift Cards</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <aside class="rightside-buttons">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="cart-and-profile-icons">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
        </svg>
      </div>
      <div class="user-profile-icon">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="cart-and-profile-icons">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
      </div>
    </aside>
  </nav>
  <section class="hero-container">
    <div class="hero-text">
      <span class="days-badge">In 15 days</span>
      <span class="early-access-text">Starfield Digital Premium <br> Edition + Early Access</span>
      <div class="hero-price">
        <span class="discount-badge">-25%</span>
        <span class="hero-price-text">74.89$</span>
      </div>
    </div>
  </section>
  <section class="trending-container">

    <div></div>
  </section>
</main>
`;

const dropDownData = {
  PC: [
    "Steam",
    "Ubisoft Connect",
    "EA App",
    "Battle.net",
    "Rockstar",
    "GOG.com",
    "Microsoft Store",
    "Epic",
  ],
  Playstation: ["Playstation Store", "PS Plus", "PS Now"],
  Xbox: ["Xbox Store", "Xbox Game Pass"],
  Nintendo: ["Nintendo eShop", "Switch Online"],
};

const dropdownItems = document.querySelector(".dropdown-items ul");
const dropdownContainers = Array.from(
  document.getElementsByClassName("nav-items-with-icons")
);
const dropdownMenus = document.querySelectorAll(".nav-items-with-icons");
const searchBox = document.querySelector(".search-box");
const searchClose = document.querySelector(".serch-bar-close");
const inputBox = document.createElement("input");
const leftsideDrawer = document.createElement("div");

leftsideDrawer.className = "leftside-drawer";

document.body.appendChild(leftsideDrawer);

const mobileNavSvg = document.querySelector(".mobile-nav");

mobileNavSvg.addEventListener("click", () => {
  leftsideDrawer.classList.toggle("open");
});

const drawerItemsUl = document.createElement("ul");

const drawerItemTitles = ["Home", "Profile", "Settings", "Logout"];

drawerItemTitles.forEach((title) => {
  const li = document.createElement("li");
  li.textContent = title;
  drawerItemsUl.appendChild(li);
});

leftsideDrawer.appendChild(drawerItemsUl);
const closeButton = document.createElement("button");
closeButton.className = "close-button";

leftsideDrawer.appendChild(closeButton);

closeButton.addEventListener("click", () => {
  leftsideDrawer.classList.remove("open");
});

document.body.appendChild(leftsideDrawer);

dropdownContainers.forEach((container) => {
  container.addEventListener("click", (event) => {
    const selectedPlatform = container.textContent.trim();
    const platformData = dropDownData[selectedPlatform];

    if (platformData) {
      dropdownItems.innerHTML = "";
      platformData.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        dropdownItems.appendChild(listItem);
      });

      const dropdownContainer = document.querySelector(".dropdown-container");
      dropdownContainer.style.display == "block"
        ? (dropdownContainer.style.display = "none")
        : (dropdownContainer.style.display = "block");
    }
  });
});

searchBox.addEventListener("click", () => {
  inputBox.classList.add("input-box");
  inputBox.setAttribute("type", "text");
  inputBox.setAttribute("placeholder", "Minecraft, RPG, Multiplayer...");

  searchClose.style.display = "block";

  searchClose.addEventListener("click", () => {
    inputBox.style.display = "none";
    console.log(searchClose.style);
    searchClose.style.display = "none";
  });

  dropdownMenus.forEach((menuItem) => {
    menuItem.innerHTML = "";
    menuItem.appendChild(inputBox);
  });
});
