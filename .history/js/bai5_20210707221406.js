

function getMyEle(myId) {
  return document.getElementById(myId);
}

// Mảng chứa các thông báo
var notifications = [
  "Vui lòng nhập vào n!",
  "n là một số!",
  "n là một số nguyên!",
  "n phải lớn hơn 1!",
]

// Kiểm tra người dùng có nhập không
function checkEntry(idCheck, idNotifi, indexNotifi) {
  var contentToCheck = getMyEle(idCheck).value;
  var notifi = getMyEle(idNotifi);
  if (contentToCheck === "") {
    notifi.innerHTML = notifications[indexNotifi];
    return false;
  }
  notifi.innerHTML = '';
  return true;
}

// Kiểm tra người dùng nhập vào có phải là số không
function checkIsNumber(idCheck, idNotifi, indexNotifi) {
  var contentToCheck = +getMyEle(idCheck).value;
  var notifi = getMyEle(idNotifi);
  if (isNaN(contentToCheck)) {
    notifi.innerHTML = notifications[indexNotifi];
    return false;
  }
  notifi.innerHTML = '';
  return true;
}

// Kiểm tra người dùng nhập có phải là số mũ lớn hơn 1 không
function checkValueNumber(idCheck, idNotifi, indexNotifi) {
  var contentToCheck = +getMyEle(idCheck).value;
  var notifi = getMyEle(idNotifi);
  if (contentToCheck <= 1) {
    notifi.innerHTML = notifications[indexNotifi];
    return false;
  }
  notifi.innerHTML = '';
  return true;
}

// Kiểm tra người dùng có nhập và số nguyên hay không
function checkIntegerNumber(idCheck, idNotifi, indexNotifi) {
  var contentToCheck = +getMyEle(idCheck).value;
  var notifi = getMyEle(idNotifi);
  if (contentToCheck % 1 !== 0) {
    notifi.innerHTML = notifications[indexNotifi];
    return false;
  }
  notifi.innerHTML = '';
  return true;
}

// Kiểm tra có phải là số nguyên tố không
function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (var i = 2; i < Math.floor(Math.sqrt(n)); i++) {
    if (n % i === 0)
      return false;
  }
  return true;
}

//
function inResult(n) {
  var htmls = '';
  for (var i = 1; i <= n; i++) {
    if (isPrime(i)) {
      htmls += i + "\t";
    }
  }
  console.log(htmls);
  return htmls;
}

function checkValid() {
  var result = checkEntry("numberN", "notifiN", 0) &&
    checkIsNumber("numberN", "notifiN", 1) &&
    checkIntegerNumber("numberN", "notifiN", 2) &&
    checkValueNumber("numberN", "notifiN", 3);
  return (result) ? true : false;
}

getMyEle("getResult").addEventListener("click", function () {
  var result = checkValid();
  console.log(result);
  if (result) {
    var n = +getMyEle("numberN").value;
    var resultContent = inResult(n);
    document.getElementById("result").innerHTML = inResult(n);
  }
})