function getMyEle(id) {
  return document.getElementById(id);
}

function createDiv(n) {
  var tagDiv = document.createElement("div");

  var tagP = document.createElement("p");
  if (n % 2 === 0) {
    tagP.className = "p-3 bg-primary";
    tagP.innerHTML = "Div chẵn " + n;
    showResult.appendChild(tagP);
  } else {
    tagP.className = "p-3 bg-danger";
    tagP.innerHTML = "Div lẻ " + n;
    showResult.appendChild(tagP);
  }
  return tagDiv;
}

function getLengthDivs() {
  var divs =
}

document.getElementById("addDiv").addEventListener("click", function () {

})