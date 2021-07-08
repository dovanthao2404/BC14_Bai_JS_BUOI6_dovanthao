// tính tổng
function total(x, n) {
  var total = 0;
  for (var i = 1; i <= n; i++) {
    total += x ** i;
  }
  return total;
}

function checkValidEx2() {
  var result1 = checkEntry("number-1", "notifi1", 0, 0) &&
    checkIsNumber("number-1", "notifi1", 0, 2);
  var result2 = checkEntry("number-2", "notifi2", 0, 1) &&
    checkIsNumber("number-2", "notifi2", 0, 3) &&
    checkIntegerNumber("number-2", "notifi2", 0, 4) &&
    checkValueNumber("number-2", "notifi2", 0, 5, 1);
  return (result1 && result2) ? true : false;
}

getMyEl("getResult").addEventListener("click", function () {
  var result = checkValidEx2();
  var number1 = +getMyEl("number-1").value;
  var number2 = +getMyEl("number-2").value;
  var sum = total(number1, number2);
  if (result) {
    getMyEl("resultEx2").classList.remove("d-none");
    getMyEl("resultEx2").classList.add("d-block");
    if (sum % 1 === 0) {
      getMyEl("resultEx2").innerHTML = sum;
    } else {

      getMyEl("resultEx2").innerHTML = sum.toFixed(2);
    }
  } else {
    getMyEl("resultEx2").classList.add("d-none");
    getMyEl("resultEx2").classList.remove("d-block");
  }
})