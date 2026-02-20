let namee = document.getElementById('name')
let email = document.getElementById('email')
let number = document.getElementById('number')
let error = document.getElementById('error')
let sub = document.getElementById('sub')

function isValidEmail(email) {
    let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

function check() {
    if (namee.value === '' || email.value === '' || number.value === '') {
        error.innerHTML = 'Please enter the data'
        error.style.opacity = '1';
    }
    else if (!isValidEmail(email.value)) {
        error.innerHTML = 'Please enter a valid email';
        error.style.opacity = '1';
    }
    else if(isNaN(number.value)){
        error.innerHTML = 'Please enter your number'
        error.style.opacity = '1';
    }
    else {
        let data = {
            names : namee.value,
            email : email.value,
            number : number.value,
        }
        localStorage.setItem('userData',JSON.stringify(data))

        window.location.href = "two.html";
    }
}
