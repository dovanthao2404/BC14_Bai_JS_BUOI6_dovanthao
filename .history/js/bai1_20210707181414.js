


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
  var showResult = document.getElementById("divResult");
  showResult.innerHTML += result;
}

showResult();