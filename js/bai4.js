// tạo 1 div
function createDiv(n) {
  var tagDiv = document.createElement("div");

  var tagP = document.createElement("p");
  if (n % 2 === 0) {
    tagP.className = "p-3 bg-danger m-0 text-light";
    tagP.innerHTML = "Div chẵn " + n;
    tagDiv.appendChild(tagP);
  } else {
    tagP.className = "p-3 bg-primary m-0 text-light";
    tagP.innerHTML = "Div lẻ " + n;
    tagDiv.appendChild(tagP);
  }
  return tagDiv;
}

// lấy chiều dài danh sách div
function getLengthDivs() {
  var divs = document.querySelectorAll("#divContent div");
  return divs.length;
}

// Tạo 10 div
getMyEl("addDiv").addEventListener("click", function () {
  var divContent = getMyEl("divContent");
  var lengthDivs = getLengthDivs();
  for (var i = lengthDivs + 1; i <= lengthDivs + 10; i++) {
    var tagDiv = createDiv(i);
    divContent.appendChild(tagDiv);
  }
})

// reset
getMyEl("reset").addEventListener("click", function () {
  getMyEl("divContent").innerHTML = '';
})