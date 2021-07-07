

function getMyId(myId) {
  return document.getElementById(myId);
}

// Mảng chứa các thông báo
var notifications = [
  "Vui lòng nhập vào x!",
  "Vui lòng nhập vào n!",
  "x là một số!",
  "n là một số!",
  "n là một số nguyên!",
  "n phải lớn hơn 0!",
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

// Kiểm tra người dùng nhập có phải là số mũ lớn hơn 1 không
function checkValueNumber(idCheck, idNotifi, indexNotifi) {
  var contentToCheck = +getMyId(idCheck).value;
  var notifi = getMyId(idNotifi);
  if (contentToCheck <= 1) {
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

function checkValid() {
  var result2 = checkEntry("numberN", "notifiN", 1) &&
    checkIsNumber("numberN", "notifiN", 3) &&
    checkIntegerNumber("numberN", "notifiN", 4) &&
    checkValueNumber("numberN", "notifiN", 5);
  return (result1 && result2) ? true : false;
}

getMyId("getResult").addEventListener("click", function () {
  var result = checkValid();
  var numberX = +getMyId("numberX").value;
  var numberN = +getMyId("numberN").value;
  var sum = total(numberX, numberN);
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