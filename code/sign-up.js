
modal = document.querySelector (".modal.thanks")
close_button = document.querySelector (".modal.thanks .close")

function togle_modal () {
    modal.classList.toggle ("hide")
} 

close_button.addEventListener ("click", function (e) {
    togle_modal ()
})


url = window.location.href
if (url.includes ("thanks")) {
    togle_modal ()
}