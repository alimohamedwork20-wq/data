let h1 = document.getElementById("h1");

let local = localStorage.getItem('userData')

let user = JSON.parse(local)
h1.textContent += ` ${user.names.toUpperCase()} ! `