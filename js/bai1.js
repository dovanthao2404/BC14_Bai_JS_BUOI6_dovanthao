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
  tagP.innerHTML = "Số n nguyên dương nhỏ nhất thỏa điều kiện 1 + 2 + ... + n > 10000 là: " + result;
  showResult.appendChild(tagP);
}

showResult();