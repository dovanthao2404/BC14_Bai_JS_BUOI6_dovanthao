

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

function inResult(n) {
  var htmls;
  for (var i = 1; i <= n; i++) {

  }
}

function checkValid() {
  var result = checkEntry("numberN", "notifiN", 1) &&
    checkIsNumber("numberN", "notifiN", 2) &&
    checkIntegerNumber("numberN", "notifiN", 3) &&
    checkValueNumber("numberN", "notifiN", 4);
  return (result) ? true : false;
}

getMyId("getResult").addEventListener("click", function () {
  var result = checkValid();
  if (result) {
    document.getElementById("result").innerHTML
  }
})