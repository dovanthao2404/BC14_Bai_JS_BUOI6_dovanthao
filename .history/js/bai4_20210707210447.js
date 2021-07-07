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
  var divs = document.querySelectorAll("#divContent div");
  return divs.length;
}

getMyEle("addDiv").addEventListener("click", function () {
  var divContent = getMyEle("divContent");
  var lengthDivs = getLengthDivs();
  for (var i = 0; i < 10; i++) {
    var tagDiv = createDiv(i);
    divContent.appendChild(tagDiv);
  }
})