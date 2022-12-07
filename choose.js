document.getElementById("submit").onclick = function() {
    e = document.getElementById("eventChosen");
    text = e.options[e.selectedIndex].text;
    document.getElementById("signedUp").innerHTML += text + ", ";
}
document.getElementById("remove").onclick = function() {
    document.getElementById("signedUp").innerHTML = "";
}