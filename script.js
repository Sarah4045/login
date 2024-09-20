document.getElementById('password').addEventListener('input', function () {
    const password = this.value;

    
    const lengthRequirement = document.getElementById('length');
    const uppercaseRequirement = document.getElementById('uppercase');
    const numberRequirement = document.getElementById('number');

    
    if (password.length >= 8) {
        lengthRequirement.classList.add('valid');
    } else {
        lengthRequirement.classList.remove('valid');
    }

    
    if (/[A-Z]/.test(password)) {
        uppercaseRequirement.classList.add('valid');
    } else {
        uppercaseRequirement.classList.remove('valid');
    }

   
    if (/\d/.test(password)) {
        numberRequirement.classList.add('valid');
    } else {
        numberRequirement.classList.remove('valid');
    }
});


document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Login successful!');
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';

});
