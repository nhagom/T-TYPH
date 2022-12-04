function showNav() {
    var x = document.getElementById("myNav");
    if (x.className == "headerNav") {
        x.className += " responsive"
    } else {
        x.className = "headerNav"
    }
}