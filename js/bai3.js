// tính giai thừa
function factorialCalculation(n) {
  var factorial = 1;
  for (var i = 1; i <= n; i++) {
    factorial *= i;
  }
  return factorial;
}

function checkValidEx3() {
  var result1 = checkEntry("numberN", "notifiN", 1, 0) &&
    checkIsNumber("numberN", "notifiN", 1, 1) &&
    checkValueNumber("numberN", "notifiN", 1, 2, 0) &&
    checkIntegerNumber("numberN", "notifiN", 1, 3);
  return (result1) ? true : false;
}

getMyEl("btnResultEx3").addEventListener("click", function () {
  var result = checkValidEx3();
  var numberN = +getMyEl("numberN").value;
  var factorial = factorialCalculation(numberN);
  if (result) {

    getMyEl("resultEx3").classList.remove("d-none");
    getMyEl("resultEx3").classList.add("d-block");
    getMyEl("resultEx3").innerHTML = "Giai thừa của " + numberN + " là: " + factorial;

  } else {
    getMyEl("resultEx3").classList.add("d-none");
    getMyEl("resultEx3").classList.remove("d-block");
  }
})