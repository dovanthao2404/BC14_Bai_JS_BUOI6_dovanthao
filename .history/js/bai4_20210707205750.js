function createDiv(n) {
  var tagDiv = document.createElement("div");

  var tagP = document.createElement("p");
  if (n % 2 === 0) {
    tagP.className = "p-3 bg-info rounded";
    tagP.innerHTML = "Div chẵn " + n;
    showResult.appendChild(tagP);
  } else {

    tagP.className = "p-3 bg-info rounded";
    tagP.innerHTML = "Div chẵn " + n;
    showResult.appendChild(tagP);
  }
  return tagDiv;
}