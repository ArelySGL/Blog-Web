var modal = document.getElementById("privacyModal");

var btn = document.getElementById("openModal");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.getElementById("contactForm").onsubmit = function(event) {
    event.preventDefault();
    
    var nombre = document.getElementById("nombre").value;
    
    alert("Mensaje enviado, gracias " + nombre);
    
    this.reset();
};
