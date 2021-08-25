var selector_nav = "header > nav"

function hide_show (selector="", toggle=false, hide=false, show=false) {
    // Add or remove hide class from specific element 
    
    elem = document.querySelector (selector)

    console.log (toggle, hide, show)

    if (toggle) {
        elem.classList.toggle("hide")
        console.log ("toggle")
    }

    if (hide) {
        elem.classList.add("hide")
        console.log ("hide")
    }

    if (show) {
        elem.classList.remove("hide")
        console.log ("show")
    }
}

function responsive () {
    // Update page option when resize

    // Hide / Show burger menu with media query
    if (window.matchMedia("(max-width: 950px)").matches) {
        hide_show (selector_nav, false, true, false)
        console.log ("tablet")
        
    }
    
    if (window.matchMedia("(min-width: 951px)").matches) {
        hide_show (selector_nav, false, false, true)
        console.log("desktop")
    }
}

// Update responsive when page load
responsive ()

// Detect windows resize
window.addEventListener('resize', responsive, false)

// Hide / Show burger menu when press button
var btn_menu = document.querySelector (".icon-menu")
btn_menu.addEventListener ("click", function() {
    hide_show (selector_nav, toggle=true)
}, false )





