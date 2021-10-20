var header = document.querySelector("header")
var nav_elem = document.querySelector("header > nav")
var btn_menu = document.querySelector (".icon-menu")

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

if (window.matchMedia("(max-width: 950px)").matches) {
    nav_elem.classList.add ("hide")
} 


