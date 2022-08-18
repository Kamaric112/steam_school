const display = document.querySelector("#display");
const displayTitle = document.querySelector("#displayTitle");
const searchInput = document.querySelector("#searchForm");
const searchButton = document.querySelector("#store_search_link");
const categoryGroup = document.querySelector(".categoryGroup");
const BASE_URL = `https://cs-steam-game-api.herokuapp.com/`

const getData = async(query,value ="") => {
    try {
        let url = `${BASE_URL}`
        if (query ==="features") {
            url = `${BASE_URL}features`
        }
        else {
            url = `${BASE_URL}games?${query}=${value}`
        } 
        
       
        const res =  await fetch(url)
        const data = await res.json()
        console.log(data)
        return data
        
    } catch (error){
        console.log("error",error)
    }
}


const renderGame = async (query,value) => {
    display.innerHTML=""
    const res = await getData(query,value)
    console.log(res)
    res.data.forEach((game) => {
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

const renderGenre = async () => { 
    try {
        const res= await getGenre()
        const data = res["data"]
        console.log(data)
        data.forEach((genre) => {
        const x = document.createElement("li")
        x.innerHTML = `${genre.name}`
        x.addEventListener("click",() => {
            renderGame("genres",`${genre.name}`)
        })
        categoryGroup.appendChild(x)
        
    })

    } catch (error) {
        console.log("error",error)
    }
}

renderGenre()

searchInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      renderGame('q',`${searchInput.value}`)
    }
  });

searchButton.addEventListener("click", () => {
    renderGame('q',`${searchInput.value}`)
})

// Note , take all the cases ( best games, genre games and specific game(clicked) and search game )

// first load 

renderGame("features","")




















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