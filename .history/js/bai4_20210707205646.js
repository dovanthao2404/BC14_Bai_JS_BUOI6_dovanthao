function createDiv(n) {
  var tagDiv = document.createElement("div");

  var tagP = document.createElement("p");
  tagP.className = "p-3 bg-info rounded";
  tagP.innerHTML = "Số nguyên dương nhỏ nhất: " + result;
  showResult.appendChild(tagP);
  return tagDiv;
}