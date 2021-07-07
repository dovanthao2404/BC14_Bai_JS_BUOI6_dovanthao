

function getMyId(myId) {
  return document.getElementById(myId);
}

// Mảng chứa các thông báo
var notifications = [
  "Vui lòng nhập vào x!",
  "Vui lòng nhập vào n!",
  "x là một số!",
  "n là một số!"
]

// Kiểm tra người dùng có nhập không
function checkEntry(idCheck, idNotifi, indexNotifi) {
  var contentToCheck = getMyId(idCheck).nodeValue;
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
  var contentToCheck = +getMyId(idCheck).nodeValue;
  var notifi = getMyId(idNotifi);
  if (isNaN(contentToCheck)) {
    notifi.innerHTML = notifications[indexNotifi];
    return false;
  }
  notifi.innerHTML = '';
  return true;
}

// Kiểm tra người dùng nhập có phải là số mũ lớn hơn không không
function checkValueNumber(idCheck, idNotifi, indexNotifi) {
  var contentToCheck = +getMyId(idCheck).nodeValue;
  var notifi = getMyId(idNotifi);
  if (contentToCheck < 1) {
    notifi.innerHTML = notifications[indexNotifi];
    return false;
  }
  notifi.innerHTML = '';
  return true;
}

// tính tổng
function total(x, n) {
  var total = 0;
  for (var i = 1; i <= n; i++) {
    total += x ** i;
  }
  return total;
}

function checkValid() {
  var result1 = checkEntry("numberX", "notifiX", 0) &&
    checkIsNumber("numberX", "notifiX", 2);
  var result2 = checkEntry("numberN", "notifiN", 1) &&
    checkIsNumber("numberN", "notifiN", 3);
}
