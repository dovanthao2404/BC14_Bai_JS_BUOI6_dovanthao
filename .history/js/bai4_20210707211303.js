function getMyEle(id) {
  return document.getElementById(id);
}

function createDiv(n) {
  var tagDiv = document.createElement("div");

  var tagP = document.createElement("p");
  if (n % 2 === 0) {
    tagP.className = "p-3 bg-primary m-0";
    tagP.innerHTML = "Div chẵn " + n;
    tagDiv.appendChild(tagP);
  } else {
    tagP.className = "p-3 bg-danger m-0";
    tagP.innerHTML = "Div lẻ " + n;
    tagDiv.appendChild(tagP);
  }
  return tagDiv;
}

function getLengthDivs() {
  var divs = document.querySelectorAll("#divContent div");
  return divs.length;
}

getMyEle("addDiv").addEventListener("click", function () {
  getMyEle("divContent").classList.remove("d-none");
  getMyEle("divContent").classList.add("d-block");
  var divContent = getMyEle("divContent");
  var lengthDivs = getLengthDivs();
  for (var i = lengthDivs + 1; i <= lengthDivs + 10; i++) {
    var tagDiv = createDiv(i);
    divContent.appendChild(tagDiv);
  }
})

getMyEle("reset").addEventListener("click", function () {
  getMyEle("divContent").innerHTML = '';
})