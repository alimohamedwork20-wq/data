let plan = document.getElementById("plan");
let price = document.getElementById("price");
let addd = document.getElementById("addd");
let content = document.getElementById("content");
let total = document.getElementById("total");
let sub = document.getElementById("sub");

plan.innerHTML = localStorage.getItem("plan:");
price.innerHTML = localStorage.getItem("price:");

let data = [];
let datas = localStorage.getItem("addOns:");
if (datas) {
  data = JSON.parse(datas);
}

for (let i = 0; i < data.length; i++) {
  addd.innerHTML += `<div class='contentHTML'>
    <div class="adds"><p>${data[i].add_on}</p></div>
    <div class="price-adds"><p>${data[i].price}</p></div></div>`;
}
addd.style.display = "flex";
addd.style.flexDirection = "column";

let value = localStorage.getItem("price:") || "0";
// لتحويل القيمه الى رقم للجمع
let number = Number(value.match(/\d+/)?.[0] || 0);

// ======= total ========
let numberr = [];
if(datas){
  numberr = datas.match(/\d+/g)||0;
}

let totals;
let sum = 0;
for (let j = 0; j < numberr.length; j++) {
  sum += Number(numberr[j]);
}
sum = Number(sum + number);
console.log(number)
total.innerHTML = `+$${sum}/mo`;
// ------- maseagge --------- //

let ok = document.getElementById("button-yas");
let no = document.getElementById("button-no");
let masseage = document.getElementById("masseage");

function masseages() {
  masseage.style.display = "block";
}

sub.onclick = function () {
  masseages();
};
function noo(){
  masseage.style.display = "none";
}