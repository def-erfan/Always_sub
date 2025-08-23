let is_full_right = true
let is_full_left = false
let scroll_divs = {
    "products-holder-for-scroll-hottest-products-section": {"right": true, "left": false, "space": 14, "place_right": 0, "place_left": -42, "scroll_right": "hottest-products-scroll-right", "scroll_left": "hottest-products-scroll-left"},
    "products-holder-for-scroll-platforms-best-sales": {"right": true, "left": false, "space": 16, "place_right": 0, "place_left": -46.5, "scroll_right": "platforms-best-sales-scroll-right", "scroll_left": "platforms-best-sales-scroll-left"},
    "products-holder-for-scroll-platforms-best-discounts": {"right": true, "left": false, "space": 16, "place_right": 0, "place_left": -46.5, "scroll_right": "platforms-best-discounts-scroll-right", "scroll_left": "platforms-best-discounts-scroll-left"}
}

function hottest_products_scroll_right(holder) {
    let div = document.getElementById(holder)
    let right_px = window.getComputedStyle(div).right
    let right_rem = Number(right_px.slice(0, -2)) / 16
    let new_placement_value = right_rem + scroll_divs[holder]["space"]

    scroll_divs[holder]["right"] = false
    scroll_divs[holder]["left"] = false
    // is_full_right = false
    // is_full_left = false
    if (new_placement_value >= scroll_divs[holder]["place_right"]){
        new_placement_value = scroll_divs[holder]["place_right"]
        scroll_divs[holder]["right"] = true
        console.log(true, "right", new_placement_value);
        
        // is_full_right = true
    }

    div.style.right = new_placement_value + "rem"
    hide_scroll_button(holder)
}

function hottest_products_scroll_left(holder) {
    let div = document.getElementById(holder)
    let right_px = window.getComputedStyle(div).right
    let right_rem = Number(right_px.slice(0, -2)) / 16
    let new_placement_value = right_rem - scroll_divs[holder]["space"]

    scroll_divs[holder]["right"] = false
    scroll_divs[holder]["left"] = false
    is_full_left = false
    is_full_right = false
    if (new_placement_value <= scroll_divs[holder]["place_left"]){
        new_placement_value = scroll_divs[holder]["place_left"]
        scroll_divs[holder]["left"] = true
        console.log(true, "left", new_placement_value);
        
        // is_full_left = true
    }
    
    div.style.right = new_placement_value + "rem"

    console.log(window.getComputedStyle(div).left);
    hide_scroll_button(holder)
}

function hide_scroll_button(holder) {
    document.getElementById(scroll_divs[holder]["scroll_right"]).style.display = "flex"
    if (scroll_divs[holder]["right"]){
        document.getElementById(scroll_divs[holder]["scroll_right"]).style.display = "none"
    }
    
    document.getElementById(scroll_divs[holder]["scroll_left"]).style.display = "flex"
    if (scroll_divs[holder]["left"]){
        document.getElementById(scroll_divs[holder]["scroll_left"]).style.display = "none"
    }
}

Object.keys(scroll_divs).forEach(function name(params) {
    hide_scroll_button(params)
})

hide_scroll_button()
alert("hiiiiiiiiiiiiiii")


// Get the elements
const container = document.querySelector('div');
const element4 = document.getElementById('4');

// Remove element4 from its current position
element4.remove();

// Insert element4 at the beginning
container.insertBefore(element4, container.firstChild);