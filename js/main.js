function getMyEl(myId) {
  return document.getElementById(myId);
}

var notifications = [
  [
    "Vui lòng nhập vào x!",
    "Vui lòng nhập vào n!",
    "x là một số!",
    "n là một số!",
    "n là một số nguyên!",
    "n phải lớn hơn 0!",
  ], [
    "Vui lòng nhập vào n!",
    "Vui lòng nhập vào số!",
    "Vui lòng nhập số >= 0",
    "Vui lòng nhập số nguyên!"
  ], [
    "Vui lòng nhập vào n!",
    "n là một số!",
    "n là một số nguyên!",
    "n phải lớn hơn 1!",
  ]
]



// Kiểm tra người dùng có nhập không
function checkEntry(idCheck, idNotification, indexNotifiParent, indexNotification) {
  var contentCheck = getMyEl(idCheck).value;
  var notification = getMyEl(idNotification);
  if (contentCheck === '') {
    notification.innerHTML = notifications[indexNotifiParent][indexNotification];
    return false;
  } else {
    notification.innerHTML = '';
    return true;
  }
}

// Kiểm tra có phải là số không
function checkIsNumber(idCheck, idNotification, indexNotifiParent, indexNotification) {
  var number = +getMyEl(idCheck).value;
  var notification = getMyEl(idNotification);
  if (isNaN(number)) {
    notification.innerHTML = notifications[indexNotifiParent][indexNotification];
    return false;
  }
  notification.innerHTML = '';
  return true;
}



// Kiểm tra người dùng có nhập và số nguyên hay không
function checkIntegerNumber(idCheck, idNotification, indexNotifiParent, indexNotification) {
  var contentToCheck = +getMyEl(idCheck).value;
  var notifi = getMyEl(idNotification);
  if (contentToCheck % 1 !== 0) {
    notifi.innerHTML = notifications[indexNotifiParent][indexNotification];
    return false;
  }
  notifi.innerHTML = '';
  return true;
}

// Kiểm tra người dùng nhập có phải là số không âm không
function checkValueNumber(idCheck, idNotifi, indexNotifiParent, indexNotification, min) {
  var contentToCheck = +getMyEl(idCheck).value;
  var notifi = getMyEl(idNotifi);
  if (contentToCheck < min) {
    notifi.innerHTML = notifications[indexNotifiParent][indexNotification];

    return false;
  }
  notifi.innerHTML = '';
  return true;
}