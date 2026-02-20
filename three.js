let card1 = document.getElementById("card1");
let card2 = document.getElementById("card2");
let card3 = document.getElementById("card3");
let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let sub = document.getElementById("sub");

box1.onclick = function () {
  if (box1.checked) {
    card1.style.background = "#762ad219";
  } else {
    card1.style.background = "transparent";
  }
};

box2.onclick = function () {
  if (box2.checked) {
    card2.style.background = "#762ad219";
  } else {
    card2.style.background = "transparent";
  }
};

box3.onclick = function () {
  if (box3.checked) {
    card3.style.background = "#762ad219";
  } else {
    card3.style.background = "transparent";
  }
};
function chick() {
  let adds = [];
  if (box1.checked) {
    adds.push({
      add_on: "Online service",
      price: "+$1/mo",
    });
  }
  if (box2.checked) {
    adds.push({
      add_on: "Larger storage",
      price: "+$2/mo",
    });
  }
  if (box3.checked) {
    adds.push({
      add_on: "Customizable Profile",
      price: "+$2/mo",
    });
  }
  let data = localStorage.setItem("addOns:", JSON.stringify(adds));
}
sub.onclick = function () {
  chick();
};
