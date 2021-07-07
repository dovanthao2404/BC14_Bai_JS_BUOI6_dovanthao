// Kiểm tra có phải là số nguyên tố không
function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (var i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
    if (n % i === 0)
      return false;
  }
  return true;
}

// tạo chuỗi kết quả
function inResult(n) {
  var htmls = '';
  for (var i = 1; i <= n; i++) {
    if (isPrime(i)) {
      htmls += i + "\t";
    }
  }
  return htmls;
}

function checkValidEx5() {
  var result = checkEntry("numberZ", "notifiZ", 2, 0) &&
    checkIsNumber("numberZ", "notifiZ", 2, 1) &&
    checkIntegerNumber("numberZ", "notifiZ", 2, 2) &&
    checkValueNumber("numberZ", "notifiZ", 2, 3, 2);
  return (result) ? true : false;
}

getMyEl("btnResultEx5").addEventListener("click", function () {
  var result = checkValidEx5();
  if (result) {
    var n = +getMyEl("numberZ").value;
    var resultContent = inResult(n);
    document.getElementById("result").innerHTML = "Dãy số nguyên tố từ 1 đến " + n + " là: <br>" + resultContent;
  } else {
    document.getElementById("result").innerHTML = "";
  }
})


getMyEl("removeResult").addEventListener("click", function () {
  getMyEl("result").innerHTML = ''
})