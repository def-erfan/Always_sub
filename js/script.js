
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

    div.style.right = new_placement_value + "rem"
}

function hottest_products_scroll_left(holder) {
    let div = document.getElementById(holder)
    let right_px = window.getComputedStyle(div).right
    let right_rem = Number(right_px.slice(0, -2)) / 16
    let new_placement_value = right_rem - scroll_divs[holder]["space"]

    if (new_placement_value < -30){
        // Get the elements
        const last_element = document.getElementById(div.lastElementChild.id);

        // Remove element4 from its current position
        const removedElement = div.removeChild(last_element);

        // Insert element4 at the beginning
        
        div.insertBefore(removedElement, div.firstChild);
    }
    
    div.style.right = new_placement_value + "rem"

    console.log(window.getComputedStyle(div).left);
}


// // Get the elements
// const container = document.querySelector('div');
// const element4 = document.getElementById('4');

// // Remove element4 from its current position
// // Use parentNode.removeChild() instead of element.remove()
// const removedElement = container.removeChild(element4);

// // Insert element4 at the beginning
// container.insertBefore(removedElement, container.firstChild);