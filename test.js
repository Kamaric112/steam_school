//********************NEW SCRIPT (PASTED TO SCRIPT.JS) ********************
// const display = document.querySelector("#display");
// const displayHeroText = document.querySelector("#Hero_Title");
// const searchInput = document.querySelector("#searchForm");
// const searchButton = document.querySelector("#store_search_link");
// const categoryGroup = document.querySelector(".categoryGroup");
// const BASE_URL = `https://cs-steam-game-api.herokuapp.com/`;

// // first load
// renderGenre();
// renderGame("features", "");

// searchInput.addEventListener("keypress", function (event) {
//   if (event.key === "Enter") {
//     event.preventDefault();
//     renderGame("q", `${searchInput.value}`);
//   }
// });

// searchButton.addEventListener("click", () => {
//   renderGame("q", `${searchInput.value}`);
// });

// const getData = async (query, value = "") => {
//   //fetch function
//   try {
//     let url = `${BASE_URL}`;
//     if (query === "features") {
//       url = `${BASE_URL}features`;
//     } else {
//       url = `${BASE_URL}games?${query}=${value}`;
//     }

//     const res = await fetch(url);
//     const data = await res.json();
//     console.log(data);
//     return data;
//   } catch (error) {
//     console.log("error", error);
//   }
// };

// const renderGame = async (query, value) => {
//   display.innerHTML = `<div class="infinity-1"></div>`;

//   const res = await getData(query, value);
//   display.innerHTML = "";

//   console.log(res);
//   res.data.forEach((game) => {
//     const newDiv = document.createElement("div");
//     if (game["price"] === 0) {
//       newDiv.innerHTML = `<div class="game_wrapper">
//             <div class="cover" onClick="appDetail(${game["appid"]})">
//             <img src="${game["header_image"]}" data-id="${game["appid"]}"/>
//             <div class="game_info">
//             <p>${game["name"]}</p>
//             <p>FREE</p>
//             </div>
//             </div>
//             </div>`;
//     } else {
//       newDiv.innerHTML = `<div class="game_wrapper">
//             <div class="cover" onClick="appDetail(${game["appid"]})">
//             <img src="${game["header_image"]}" data-id="${game["appid"]}"/>
//             <div class="game_info">
//             <p>${game["name"]}</p>
//             <p>$${game["price"]}</p>
//             </div>
//             </div>
//             </div>`;
//     }

//     display.appendChild(newDiv);
//   });
// };

// const getGenre = async () => {
//   //fetch function
//   try {
//     url = `https://cs-steam-game-api.herokuapp.com/genres`;
//     const res = await fetch(url);
//     const data1 = await res.json();
//     console.log(data1);
//     return data1;
//   } catch (error) {
//     console.log("error", error);
//   }
// };

// const renderGenre = async () => {
//   try {
//     const res = await getGenre();
//     const data = res["data"];
//     console.log(data);
//     data.forEach((genre) => {
//       const x = document.createElement("li");
//       x.innerHTML = `${genre.name}`;
//       x.addEventListener("click", () => {
//         displayHeroText.innerHTML = `${genre.name.toUpperCase()} GAMES`;
//         renderGame("genres", `${genre.name}`);
//       });
//       categoryGroup.appendChild(x);
//     });
//   } catch (error) {
//     console.log("error", error);
//   }
// };

// //game detail when clicked

// const getSpecificGame = async (value) => {
//   //fetch function

//   try {
//     url = `https://cs-steam-game-api.herokuapp.com/single-game/${value}`;
//     const res = await fetch(url);
//     const data1 = await res.json();
//     console.log(data1);
//     return data1;
//   } catch (error) {
//     console.log("error", error);
//   }
// };

// const appDetail = async (value) => {
//   display.innerHTML = `<div class="infinity-1"></div>`;
//   const res = await getSpecificGame(value);
//   const data = await res["data"];
//   displayHeroText.innerHTML = `${data.name}`;
//   display.innerHTML = "";
//   console.log(data);
//   const newdiv = document.createElement("div");
//   newdiv.innerHTML = `<div class="game_detail">
//     <div class="title_contain">
//       <div class="title">${data.name}</div>
//       <div class="price">${data.price}$</div>
//     </div>
//     <div class="game_info">
//       <img
//         src="${data.header_image}"
//         alt=""
//       />
//       <div class="game_desc">
//         <div class="detail_description">
//           ${data.description}.
//         </div>
//         <div class="detail_info">
//           <div class="release_date">Release Date: ${data.release_date.slice(
//             0,
//             9
//           )}</div>
//           <div class="developer">Developer: ${data.developer}</div>
//           <div class="publisher">Publisher: ${data.developer}</div>
//           <div class="review"> Positive Ratings: ${data.positive_ratings}</div>
//           <div class="review"> Positive Ratings: ${data.negative_ratings}</div>
//         </div>
//       </div>
//     </div>
//     <div class="tags_info">
//       <div class="tag">
//         <a href="#")">${data.genres[0]}</a>
//       </div>
//       <div class="tag">
//         <a href="#">${data.genres[1]}</a>
//       </div>
//       <div class="tag">
//         <a href="#">${data.genres[2]}</a>
//       </div>
//     </div>
//   </div>`;

//   display.appendChild(newdiv);
//   const tagBtn = document.querySelector(".tag");
//   tagBtn.addEventListener("click", () => {
//     renderGame("genres", `${data.genres}`);
//   });
// };

// //Get the return to top button
// const mybutton = document.getElementById("myBtn");

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function () {
//   scrollFunction();
// };

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }

// ********************OLD SCRIPT ********************
// const display = document.querySelector("#display");
// const displayTitle = document.querySelector("#displayTitle");
// const searchInput = document.querySelector("#searchForm");
// const searchButton = document.querySelector("#store_search_link");
// const categoryGroup = document.querySelector(".categoryGroup");
// const getGenreBtn = document.querySelector(".getGenreList");
// let url = `https://cs-steam-game-api.herokuapp.com/`;

// const getData = async (query, value = "") => {
//   try {
//     if (
//       endpoint === "Action" ||
//       endpoint === "Free to play" ||
//       endpoint === "Animation & modeling" ||
//       endpoint === "Video production" ||
//       endpoint === "Casual" ||
//       endpoint === "Adventure" ||
//       endpoint === "Indie" ||
//       endpoint === "Rpg" ||
//       endpoint === "Strategy" ||
//       endpoint === "Simulation"
//     ) {
//       url = `https://cs-steam-game-api.herokuapp.com/games?page=1&genres=${endpoint.toLowerCase()}`;
//     } else if (endpoint === `${searchInput.value}`) {
//       url = `https://cs-steam-game-api.herokuapp.com/games?q=${endpoint}`;
//     } else if (endpoint === "genre") {
//       url = `https://cs-steam-game-api.herokuapp.com/genres`;
//     } else {
//       url = `https://cs-steam-game-api.herokuapp.com/${endpoint}/${value}`;
//     }

//     const res = await fetch(url);
//     const data = await res.json();
//     console.log(data);
//     return data;
//   } catch (error) {
//     console.log("error", error);
//   }
// };

// const getGenre = async () => {
//   //get genre data
//   try {
//     url = `https://cs-steam-game-api.herokuapp.com/genres`;
//     const res = await fetch(url);
//     const data1 = await res.json();
//     console.log(data1);
//     return data1;
//   } catch (error) {
//     console.log("error", error);
//   }
// };

// const renderGenre = async () => {
//   //render genre when clicked
//   try {
//     data1 = await getGenre();

//     console.log(data1);
//     data1.data.forEach((genre, index) => {
//       const newLi = document.createElement("li");
//       newLi.classList.add("generatedGenres");
//       newLi.innerHTML = `${genre.name[0].toUpperCase() + genre.name.slice(1)}`;

//       categoryGroup.appendChild(newLi);
//     });
//     const genreType = document.querySelectorAll(".generatedGenres");
//     genreType.forEach((genre) =>
//       genre.addEventListener("click", (event) => {
//         renderGame(genre.textContent);
//         console.log(genre.textContent);
//       })
//     );
//   } catch (error) {
//     console.log("error", error);
//   }
// };

// let data;
// const renderGame = async (element) => {
//   display.innerHTML = "";
//   if (element === "best") {
//     data = await getData("features");
//   } else if (
//     element === "Action" ||
//     element === "Free to play" ||
//     element === "Animation & modeling" ||
//     element === "Video production" ||
//     element === "Casual" ||
//     element === "Adventure" ||
//     element === "Indie" ||
//     element === "Rpg" ||
//     element === "Strategy" ||
//     element === "Simulation"
//   ) {
//     data = await getData(`${element}`);
//   } else if (element === `${searchInput.value}`) {
//     data = await getData(`${searchInput.value}`);
//   }

//   data.data.forEach((game) => {
//     const newDiv = document.createElement("div");
//     if (game["price"] === 0) {
//       newDiv.innerHTML = `<div class="game_wrapper">
//             <div class="cover" onClick="appDetail(${game["appId"]})">
//             <img src="${game["header_image"]}" data-id="${game["appId"]}"/>
//             <div class="game_info">
//             <p>${game["name"]}</p>
//             <p>FREE</p>
//             </div>
//             </div>
//             </div>`;
//     } else {
//       newDiv.innerHTML = `<div class="game_wrapper">
//             <div class="cover" onClick="appDetail(${game["appId"]})">
//             <img src="${game["header_image"]}" data-id="${game["appId"]}"/>
//             <div class="game_info">
//             <p>${game["name"]}</p>
//             <p>$${game["price"]}</p>
//             </div>
//             </div>
//             </div>`;
//     }

//     display.appendChild(newDiv);
//   });
// };

// // Games output based on genre selection

// getGenreBtn.addEventListener("click", () => {
//   renderGenre();
// });

// // const genreType = document.querySelectorAll("ul.categoryGroup li")
// // genreType.forEach(genre => genre.addEventListener("click",(event) => {
// //     renderGame(genre.textContent)
// //     console.log(genre.textContent)
// // }))

// searchInput.addEventListener("keypress", function (event) {
//   if (event.key === "Enter") {
//     event.preventDefault();
//     renderGame(searchInput.value);
//   }
// });

// searchButton.addEventListener("click", () => {
//   renderGame(searchInput.value);
// });

// // Note , take all the cases ( best games, genre games and specific game(clicked) and search game )

// // first load

// renderGame("best");
// getData("games");

// //Get the button
// const mybutton = document.getElementById("myBtn");

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function () {
//   scrollFunction();
// };

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }
