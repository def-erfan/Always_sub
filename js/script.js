let nav = document.getElementById("nav")
let prev_scroll_pos = window.pageYOffset
window.onscroll = function() {
    let current_scroll_pos = window.pageYOffset
    if (prev_scroll_pos > current_scroll_pos) {
        document.getElementById("nav").style.top = "-2px";
    }
    else {
        if (current_scroll_pos > 100){
            document.getElementById("nav").style.top = "-150px";
        }
    }
    
    prev_scroll_pos = current_scroll_pos;
}


// ------------------------------------------------------------------------------------------------
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


// ------------------------------------------------------------------------------------------------
let mobile_arrow_icon_games = document.getElementById("mobile-services-arrow-icon-games")
let categories_links_div_mobile_games = document.getElementById("categories-links-div-mobile-games")
let is_mobile_services_games_shown = false

let mobile_arrow_icon_platforms = document.getElementById("mobile-services-arrow-icon-platforms")
let categories_links_div_mobile_platforms = document.getElementById("categories-links-div-mobile-platforms")
let is_mobile_services_platforms_shown = false

function open_menu(list_name) {
    if (list_name === "games"){
        if (is_mobile_services_games_shown){
            mobile_arrow_icon_games.style.rotate = "0deg"
            categories_links_div_mobile_games.style.display = "none"
            is_mobile_services_games_shown = false
        }
        else{
            mobile_arrow_icon_games.style.rotate = "180deg"
            categories_links_div_mobile_games.style.display = "flex"
            is_mobile_services_games_shown = true
        }
        
    }

    else if (list_name == "platforms"){
        if (is_mobile_services_platforms_shown){
            mobile_arrow_icon_platforms.style.rotate = "0deg"
            categories_links_div_mobile_platforms.style.display = "none"
            is_mobile_services_platforms_shown = false
        }
        else{
            mobile_arrow_icon_platforms.style.rotate = "180deg"
            categories_links_div_mobile_platforms.style.display = "flex"
            is_mobile_services_platforms_shown = true
        }
    }

}


// ------------------------------------------------------------------------------------------------
let mobile_nav_services_holder = document.getElementById("mobile-nav-services-holder")
let open_mobile_slider_button = document.getElementById("open-mobile-slider-button")
let close_mobile_slider_button = document.getElementById("close-mobile-slider-button")
let is_mobile_slider_open = false

function open_mobile_nav_services_slider() {
    if (is_mobile_slider_open){
        mobile_nav_services_holder.style.transform = "translate(100%)"
        is_mobile_slider_open = false
    }
    else{
        mobile_nav_services_holder.style.transform = "none"
        is_mobile_slider_open = true
    }
}


// ------------------------------------------------------------------------------------------------
let password_input = document.getElementById("password-input")
let password_eyes_div = document.getElementById("password-eyes-div")
addEventListener("keypress", function name() {
    if (password_input.value === ""){
        password_eyes_div.style.display = "none"
    }
    else{
        password_eyes_div.style.display = "flex"
    }
})