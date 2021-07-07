function getResult() {
  var i = 0;
  var sum = 0;
  while (sum <= 10000) {
    i++;
    sum += i;
  }
  return i;
}

function showResult() {
  var result = getResult();
  var showResult = getMyEl("showResult");
  var tagP = document.createElement("p");
  tagP.className = "p-3 bg-info rounded";
  tagP.innerHTML = "Số nguyên dương nhỏ nhất: " + result;
  showResult.appendChild(tagP);
}

showResult();