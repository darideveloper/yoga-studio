var header = document.querySelector("header")
var nav_elem = document.querySelector("header > nav")
var btn_menu = document.querySelector (".icon-menu")

const header_query = window.matchMedia ('screen and (max-width: 950px)')

if (window.matchMedia ("(max-width: 950px)").matches) {
    // Menu event listeners onkly for small screens

    header.addEventListener ("click", function(e) {
    
        // Show menu
        click_target = e.target.tagName
        button_targets = ["DIV", "SPAN"]    
        if (button_targets.includes(click_target)) {
            nav_elem.classList.remove ("hide")        
        } else {
            nav_elem.classList.add ("hide")  
        }
    })

}



if (window.matchMedia("(max-width: 950px)").matches) {
    // Hide original menu items
    nav_elem.classList.add ("hide")
} 

