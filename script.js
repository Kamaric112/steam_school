const display = document.querySelector("#display");
const displayHeroText = document.querySelector("#Hero_Title");
const searchInput = document.querySelector("#searchForm");
const searchButton = document.querySelector("#store_search_link");
const categoryGroup = document.querySelector(".categoryGroup");
const BASE_URL = `https://cs-steam-game-api.herokuapp.com/`;

// first load
renderGenre();
renderGame("features", "");

searchInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    renderGame("q", `${searchInput.value}`);
  }
});

searchButton.addEventListener("click", () => {
  renderGame("q", `${searchInput.value}`);
});

const getData = async (query, value = "") => {
  //fetch function
  try {
    let url = `${BASE_URL}`;
    if (query === "features") {
      url = `${BASE_URL}features`;
    } else {
      url = `${BASE_URL}games?${query}=${value}`;
    }

    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("error", error);
  }
};

const renderGame = async (query, value) => {
  display.innerHTML = `<div class="infinity-1"></div>`;

  const res = await getData(query, value);
  display.innerHTML = "";

  console.log(res);
  res.data.forEach((game) => {
    const newDiv = document.createElement("div");
    if (game["price"] === 0) {
      newDiv.innerHTML = `<div class="game_wrapper">
            <div class="cover" onClick="appDetail(${game["appid"]})">
            <img src="${game["header_image"]}" data-id="${game["appid"]}"/>
            <div class="game_info">
            <p>${game["name"]}</p>
            <p>FREE</p>
            </div>
            </div>
            </div>`;
    } else {
      newDiv.innerHTML = `<div class="game_wrapper">
            <div class="cover" onClick="appDetail(${game["appid"]})">
            <img src="${game["header_image"]}" data-id="${game["appid"]}"/>
            <div class="game_info">
            <p>${game["name"]}</p>
            <p>$${game["price"]}</p>
            </div>
            </div>
            </div>`;
    }

    display.appendChild(newDiv);
  });
};

const getGenre = async () => {
  //fetch function
  try {
    url = `https://cs-steam-game-api.herokuapp.com/genres`;
    const res = await fetch(url);
    const data1 = await res.json();
    console.log(data1);
    return data1;
  } catch (error) {
    console.log("error", error);
  }
};

const renderGenre = async () => {
  try {
    const res = await getGenre();
    const data = res["data"];
    console.log(data);
    data.forEach((genre) => {
      const x = document.createElement("li");
      x.innerHTML = `${genre.name}`;
      x.addEventListener("click", () => {
        displayHeroText.innerHTML = `${genre.name.toUpperCase()} GAMES`;
        renderGame("genres", `${genre.name}`);
      });
      categoryGroup.appendChild(x);
    });
  } catch (error) {
    console.log("error", error);
  }
};

//game detail when clicked

const getSpecificGame = async (value) => {
  //fetch function

  try {
    url = `https://cs-steam-game-api.herokuapp.com/single-game/${value}`;
    const res = await fetch(url);
    const data1 = await res.json();
    console.log(data1);
    return data1;
  } catch (error) {
    console.log("error", error);
  }
};

const appDetail = async (value) => {
  display.innerHTML = `<div class="infinity-1"></div>`;
  const res = await getSpecificGame(value);
  const data = await res["data"];
  displayHeroText.innerHTML = `${data.name}`;
  display.innerHTML = "";
  console.log(data);
  const newdiv = document.createElement("div");
  newdiv.innerHTML = `<div class="game_detail">
    <div class="title_contain">
      <div class="title">${data.name}</div>
      <div class="price">${data.price}$</div>
    </div>
    <div class="game_info">
      <img
        src="${data.header_image}"
        alt=""
      />
      <div class="game_desc">
        <div class="detail_description">
          ${data.description}.
        </div>
        <div class="detail_info">
          <div class="release_date">Release Date: ${data.release_date.slice(
            0,
            9
          )}</div>
          <div class="developer">Developer: ${data.developer}</div>
          <div class="publisher">Publisher: ${data.developer}</div>
          <div class="review"> Positive Ratings: ${data.positive_ratings}</div>
          <div class="review"> Positive Ratings: ${data.negative_ratings}</div>
        </div>
      </div>
    </div>
    <div class="tags_info">
      <div class="tag">
        <a href="#")">${data.genres[0]}</a>
      </div>
      <div class="tag">
        <a href="#">${data.genres[1]}</a>
      </div>
      <div class="tag">
        <a href="#">${data.genres[2]}</a>
      </div>
    </div>
  </div>`;

  display.appendChild(newdiv);
  const tagBtn = document.querySelector(".tag");
  tagBtn.addEventListener("click", () => {
    renderGame("genres", `${data.genres}`);
  });
};

//Get the return to top button
const mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
