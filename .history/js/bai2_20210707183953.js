

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

function total(x, n) {
  for ()
}