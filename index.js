// Write your code here!
document.querySelector("main").remove();
let newHeader = document.createElement("h1");
// let newHeader = document.getElementById("victory");
newHeader.innerHTML = "Dan is the champion";
newHeader.id = "victory";
document.body.appendChild(newHeader);