modal = document.querySelector (".modal.gallery")
modal_image = document.querySelector (".modal.gallery img")
close_area = document.querySelector (".modal.gallery .wrapper")

function togle_modal () {
    modal.classList.toggle ("hide")
} 

// Get gallery click
gallery.addEventListener ("click", function (e) {
    image_url = e.target.getAttribute("src")
    
    // Show gallery modal
    if (image_url) {
        modal_image.setAttribute ("src", image_url)
        togle_modal () 
    }

})

// Hide gallery
modal.addEventListener ("click", function (e) {
    if (e.target.nodeName == "DIV") {
        togle_modal ()
    }
})

