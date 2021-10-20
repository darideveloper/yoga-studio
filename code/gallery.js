modal_g = document.querySelector (".modal.gallery")
modal_image = document.querySelector (".modal.gallery img")
modal_figure = document.querySelector (".modal.gallery figure")
close_area = document.querySelector (".modal.gallery .wrapper")

height = window.screen.height
width = window.screen.width

function togle_modal_gallery () {
    modal_g.classList.toggle ("hide")
} 

// Get gallery click
gallery.addEventListener ("click", function (e) {
    image_url = e.target.getAttribute("src")
    
    // Show gallery modal and update gallery elem
    if (image_url) {

        // Update image size
        if (width < height) {
            modal_figure.style.width = "100vw"
            modal_figure.style.height = "auto"
        }

        // Active modal
        modal_image.setAttribute ("src", image_url)
        togle_modal_gallery () 
    }

})

// Hide gallery
modal_g.addEventListener ("click", function (e) {
    if (e.target.nodeName == "DIV") {
        togle_modal_gallery ()
    }
})

