


function getResult() {
  var i = 0;
  var sum = 0;
  while (sum <= 10000) {
    i++;
    sum += i;
  }
}

function showResult() {
  var result = getResult();
  var showResult = document.getElementById("showResult");
  showResult.innerHTML += result;
}
showResult();