

function getMyId(myId) {
  return document.getElementById(myId);
}

// Mảng chứa các thông báo
var notifications = [
  "Vui lòng nhập vào n!",
  "Vui lòng nhập vào sô!",
  "Vui lòng nhập số >= 0",
  "Vui lòng nhập số nguyên!"
]

// Kiểm tra người dùng có nhập không
function checkEntry(idCheck, idNotifi, indexNotifi) {
  var contentToCheck = getMyId(idCheck).value;
  var notifi = getMyId(idNotifi);
  if (contentToCheck === "") {
    notifi.innerHTML = notifications[indexNotifi];
    return false;
  }
  notifi.innerHTML = '';
  return true;
}

// Kiểm tra người dùng nhập vào có phải là số không
function checkIsNumber(idCheck, idNotifi, indexNotifi) {
  var contentToCheck = +getMyId(idCheck).value;
  var notifi = getMyId(idNotifi);
  if (isNaN(contentToCheck)) {
    notifi.innerHTML = notifications[indexNotifi];
    return false;
  }
  notifi.innerHTML = '';
  return true;
}

// Kiểm tra người dùng nhập có phải là số không âm không
function checkValueNumber(idCheck, idNotifi, indexNotifi) {
  var contentToCheck = +getMyId(idCheck).value;
  var notifi = getMyId(idNotifi);
  if (contentToCheck < 0) {
    notifi.innerHTML = notifications[indexNotifi];
    return false;
  }
  notifi.innerHTML = '';
  return true;
}

// Kiểm tra người dùng có nhập và số nguyên hay không
function checkIntegerNumber(idCheck, idNotifi, indexNotifi) {
  var contentToCheck = +getMyId(idCheck).value;
  var notifi = getMyId(idNotifi);
  if (contentToCheck % 1 !== 0) {
    notifi.innerHTML = notifications[indexNotifi];
    return false;
  }
  notifi.innerHTML = '';
  return true;
}

// tính giai thừa
function factorialCalculation(n) {
  var factorial = 1;
  for (var i = 1; i <= n; i++) {
    factorial *= i;
  }
  return factorial;
}

function checkValid() {
  var result1 = checkEntry("numberX", "notifiX", 0) &&
    checkIsNumber("numberX", "notifiX", 2);
  return (result1) ? true : false;
}

getMyId("getResult").addEventListener("click", function () {
  var result = checkValid();
  var numberN = +getMyId("numberN").value;
  var factorial = factorialCalculation(numberN);
  if (result) {
    getMyId("result").classList.remove("d-none");
    getMyId("result").classList.add("d-block");
    if (sum % 1 === 0) {
      getMyId("result").innerHTML = sum;
    } else {

      getMyId("result").innerHTML = sum.toFixed(2);
    }
  } else {
    getMyId("result").classList.add("d-none");
    getMyId("result").classList.remove("d-block");
  }
})