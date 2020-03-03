// Get my-model
var model = document.getElementById("my-model");

// Get shopping cart
var cart = document.getElementById("shopping");

// Get icon close
var close = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
cart.onclick = function () {
    model.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
close.onclick = function () {
    model.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == this.model) {
        model.style.display = "none";
    }
}