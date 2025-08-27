let categories_menu_button = document.getElementById("categories-menu-button")
let categories_menu = document.getElementById("categories-menu")
// ----------
categories_menu_button.addEventListener("mouseover", ()=>{
    document.getElementById("categories-menu").style.display = "flex"
    document.getElementById("nav-bottom").style.paddingBottom = "0rem"
})
categories_menu_button.addEventListener("mouseout", ()=>{
    document.getElementById("categories-menu").style.display = "none"
    document.getElementById("nav-bottom").style.paddingBottom = "1rem"
})
// ----------
categories_menu.addEventListener("mouseover", ()=>{
    document.getElementById("categories-menu").style.display = "flex"
    document.getElementById("nav-bottom").style.paddingBottom = "0rem"
})
categories_menu.addEventListener("mouseout", ()=>{
    document.getElementById("categories-menu").style.display = "none"
    document.getElementById("nav-bottom").style.paddingBottom = "1rem"
})


let game_button = document.getElementById("game-button")
let platform_button = document.getElementById("platform-button")
let games_div = document.getElementById("games-div")
let platforms_div = document.getElementById("platforms-div")
let category_button_style = {
    "mouse-over": "5px solid red",
    "mouse-not-over": "5px solid #a1a1a1"}
// ----------
game_button.addEventListener("mouseover", ()=>{
    game_button.style.borderRight = category_button_style["mouse-over"]
    platform_button.style.borderRight = category_button_style["mouse-not-over"]
    games_div.style.display = "flex"
    platforms_div.style.display = "none"
})
// ----------
platform_button.addEventListener("mouseover", ()=>{
    platform_button.style.borderRight = category_button_style["mouse-over"]
    game_button.style.borderRight = category_button_style["mouse-not-over"]
    platforms_div.style.display = "flex"
    games_div.style.display = "none"
})