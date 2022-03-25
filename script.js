function moDusty(event) {
  var nSpan = document.createElement("span");
  nSpan.classList.add("dusty");
  nSpan.innerHTML = "⋆";
  nSpan.style.color = "hsl(50, 50%, 50%)";
  nSpan.style.top = event.offsetY + (Math.random() * 60 - 30) + "px";
  nSpan.style.left = event.offsetX + (Math.random() * 25 - 25) + "px";
  nSpan.style.fontSize = Math.random() * (16 - 4) + 4 + "px";

  event.srcElement.appendChild(nSpan);
}

function animEnd(event) {
  event.target.parentNode.removeChild(event.srcElement);
}

var elDusty = document.getElementById("dusty");
elDusty.addEventListener("mousemove", moDusty, false);
elDusty.addEventListener("webkitAnimationEnd", animEnd, false);
