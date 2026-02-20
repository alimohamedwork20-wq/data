
let card1 = document.querySelector(".one-cards");
let card2 = document.querySelector(".two-cards");
let card3 = document.querySelector(".three-cards");

card1.onclick = function() {
    card1.classList.add("activ");
    card2.classList.remove("activ");
    card3.classList.remove("activ");
}

card2.onclick = function() {
    card2.classList.add("activ");
    card1.classList.remove("activ");
    card3.classList.remove("activ");
}

card3.onclick = function() {
    card3.classList.add("activ");
    card1.classList.remove("activ");
    card2.classList.remove("activ");
}

let month = document.getElementById('month');
let year = document.getElementById('year');
let h3 = document.getElementById('h3');
let h = document.getElementById('h');
let dolar1 = document.getElementById('dolar1');
let dolar2 = document.getElementById('dolar2');
let dolar3 = document.getElementById('dolar3');
let sub = document.getElementById('sub');
let back = document.getElementById('back');

let isMonthly = true;

function monthly() {
    if (isMonthly) {
        month.style.opacity = "1";
        year.style.opacity = "0";
    } else {
        month.style.opacity = "0";
        year.style.opacity = "1";
    }
    isMonthly = !isMonthly;



    if(month.style.opacity == '1'){
        h3.style.transform = 'scale(1.1)'
        h3.style.color = '#33115d'
        dolar1.innerHTML = '$9/mo'
        dolar2.innerHTML = '$12/mo'
        dolar3.innerHTML = '$15/mo'
    }else{
        h3.style.transform = 'scale(1.0)'
        h3.style.color = 'black'
    }

    if(year.style.opacity == '1'){
        h.style.transform = 'scale(1.1)'
        h.style.color = '#33115d'
        dolar1.innerHTML = '$14/ye'
        dolar2.innerHTML = '$20/ye'
        dolar3.innerHTML = '$35/ye'
    }else{
        h.style.transform = 'scale(1.0)'
        h.style.color = 'black'
    }
}
monthly()
// حفظ نتيجه الاختيار
function chick(){

    // =====================  card 1  =====================//

    if(card1.classList.contains('activ') && month.style.opacity == '1'){
        let plan = 'Arcade(monthly)'
        let price = '$9/mo'
        let h1 = localStorage.setItem('plan:',plan)
        let p = localStorage.setItem('price:',price)
    }
    else if(card1.classList.contains('activ') && month.style.opacity == '0'){
        let plan = 'Arcade(yearly)'
        let price = '$14/ye'
        let h1 = localStorage.setItem('plan:',plan)
        let p = localStorage.setItem('price:',price)
    }
    
    // =====================  card 2  =====================//
    
    else if(card2.classList.contains('activ') && month.style.opacity == '1'){
        let plan = 'Advanced(monthly)'
        let price = '$12/mo'
        let h1 = localStorage.setItem('plan:',plan)
        let p = localStorage.setItem('price:',price)
    }
    else if(card2.classList.contains('activ') && month.style.opacity == '0'){
        let plan = 'Advanced(yearly)'
        let price = '$20/ye'
        let h1 = localStorage.setItem('plan:',plan)
        let p = localStorage.setItem('price:',price)
    }
    // =====================  card 3  =====================//

    else if(card3.classList.contains('activ') && month.style.opacity == '1'){
        let plan = 'Pro(monthly)'
        let price = '$15/mo'
        let h1 = localStorage.setItem('plan:',plan)
        let p = localStorage.setItem('price:',price)
    }
    else if(card3.classList.contains('activ') && month.style.opacity == '0'){
        let plan = 'Pro(yearly)'
        let price = '$35/ye'
        let h1 = localStorage.setItem('plan:',plan)
        let p = localStorage.setItem('price:',price)
    }
}
sub.onclick = function(){
    chick()
}
