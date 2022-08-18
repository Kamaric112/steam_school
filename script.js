const display = document.querySelector("#display");
const displayTitle = document.querySelector("#displayTitle");
const searchInput = document.querySelector("#searchForm");
const searchButton = document.querySelector("#store_search_link");
const categoryGroup = document.querySelector(".categoryGroup");
const getGenreBtn = document.querySelector(".getGenreList")
let url = `https://cs-steam-game-api.herokuapp.com/`

const getData = async(query,value ="") => {
    try {
        if (endpoint === "Action" || endpoint === "Free to play"|| endpoint === "Animation & modeling" || endpoint === "Video production" || endpoint === "Casual" || endpoint === "Adventure" || endpoint === "Indie" || endpoint === "Rpg" || endpoint === "Strategy" || endpoint === "Simulation") {
            url =`https://cs-steam-game-api.herokuapp.com/games?page=1&genres=${endpoint.toLowerCase()}`
        }
        else if (endpoint === `${searchInput.value}`) {
            url =`https://cs-steam-game-api.herokuapp.com/games?q=${endpoint}`
        } else if (endpoint==="genre") {
            url = `https://cs-steam-game-api.herokuapp.com/genres`
        }
        else {
            url = `https://cs-steam-game-api.herokuapp.com/${endpoint}/${value}`
        }
        
        const res =  await fetch(url)
        const data = await res.json()
        console.log(data)
        return data
        
    } catch (error){
        console.log("error",error)
    }
}


const getGenre = async() => {   //get genre data
    try {
        url = `https://cs-steam-game-api.herokuapp.com/genres`
        const res = await fetch(url)
        const data1 = await res.json()
        console.log(data1)
        return data1
    } catch (error) {
        console.log("error",error)
    }
}

const renderGenre = async () => { //render genre when clicked
    try {
        data1= await getGenre()
        
        console.log(data1)
        data1.data.forEach((genre,index) => {
        const newLi = document.createElement("li")
        newLi.classList.add("generatedGenres")
        newLi.innerHTML =`${genre.name[0].toUpperCase() + genre.name.slice(1)}`

        categoryGroup.appendChild(newLi)
        
    })
    const genreType= document.querySelectorAll(".generatedGenres")
    genreType.forEach(genre => genre.addEventListener("click",(event) => {
        renderGame(genre.textContent)
        console.log(genre.textContent)})
    )
    } catch (error) {
        console.log("error",error)
    }
}


let data
const renderGame = async (element) => {
    display.innerHTML=""
    if (element === "best") {
         data = await getData("features")
    } else if (element === "Action" || element === "Free to play"|| element === "Animation & modeling" || element === "Video production" || element === "Casual" || element === "Adventure" || element === "Indie" || element === "Rpg" || element === "Strategy" || element === "Simulation"){
         data = await getData(`${element}`)
    }  else if (element === `${searchInput.value}`) {
        data = await getData(`${searchInput.value}`)
    }

    data.data.forEach((game) => {
        const newDiv = document.createElement("div");
        if(game["price"] === 0 ) {
            newDiv.innerHTML = `<div class="game_wrapper">
            <div class="cover" onClick="appDetail(${game["appId"]})">
            <img src="${game["header_image"]}" data-id="${game["appId"]}"/>
            <div class="game_info">
            <p>${game["name"]}</p>
            <p>FREE</p>
            </div>
            </div>
            </div>`
    
        }
        else {
            newDiv.innerHTML = `<div class="game_wrapper">
            <div class="cover" onClick="appDetail(${game["appId"]})">
            <img src="${game["header_image"]}" data-id="${game["appId"]}"/>
            <div class="game_info">
            <p>${game["name"]}</p>
            <p>$${game["price"]}</p>
            </div>
            </div>
            </div>`
        }
        

      display.appendChild(newDiv)
    })
 
}



// Games output based on genre selection


getGenreBtn.addEventListener("click",() => {
    renderGenre()
     
 })
 

// const genreType = document.querySelectorAll("ul.categoryGroup li")
// genreType.forEach(genre => genre.addEventListener("click",(event) => {
//     renderGame(genre.textContent)
//     console.log(genre.textContent)
// }))



searchInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      renderGame(searchInput.value)
    }
  });

searchButton.addEventListener("click", () => {
    renderGame(searchInput.value)
})



// Note , take all the cases ( best games, genre games and specific game(clicked) and search game )

// first load 

renderGame("best")
getData("games")




















//Get the button
const mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

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