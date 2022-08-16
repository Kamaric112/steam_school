const display = document.querySelector("#display");
const displayTitle = document.querySelector("#displayTitle");
const searchInput = document.querySelector("#searchForm");
const searchButton = document.querySelector("#store_search_link");
const categoryGroup = document.querySelector(".categoryGroup");
let url = `https://cs-steam-game-api.herokuapp.com/`

const getData = async(endpoint,value ="") => {
    try {
        if (endpoint === "Action" || endpoint === "Casual" || endpoint === "Adventure" || endpoint === "Indie" || endpoint === "RPG" || endpoint === "Strategy" || endpoint === "Simulation") {
            url =`https://cs-steam-game-api.herokuapp.com/games?page=1&genres=${endpoint.toLowerCase()}`
        }
        
        else if (endpoint === `${searchInput.value}`) {
            url =`https://cs-steam-game-api.herokuapp.com/games?q=${endpoint}`
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

let data
const renderGame = async (element) => {
    display.innerHTML=""
    if (element === "best") {
         data = await getData("features")
    } else if (element === "Action"  || element === "Casual"  || element === "Adventure"  || element === "Indie"  || element === "RPG"  || element === "Strategy" || element === "Simulation"){
         data = await getData(`${element}`)
    } else if (element === `${searchInput.value}`) {
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

const genreType = document.querySelectorAll("ul.categoryGroup li")
genreType.forEach(genre => genre.addEventListener("click",(event) => {
    renderGame(genre.textContent)
}))




searchButton.addEventListener("click", () => {
    renderGame(searchInput.value)
})



// Note , take all the cases ( best games, genre games and specific game(clicked) and search game )

// first load 

renderGame("best")
getData("games")