
var modal_t = document.querySelector (".modal.thanks")
var close_button = document.querySelector (".modal.thanks .close")

function togle_modal_thanks () {
    modal_t.classList.toggle ("hide")
} 

close_button.addEventListener ("click", function (e) {
    togle_modal_thanks ()
})


url = window.location.href
if (url.includes ("thanks")) {
    togle_modal_thanks ()
}