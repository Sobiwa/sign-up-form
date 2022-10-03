const password1 = document.querySelector('#pwd');
const password2 = document.querySelector('#confirmPwd');
const submit = document.querySelector('button');


const pwdMatch = document.querySelector('.pwdMatch');

function passwordMatch() {
    if (password1.value === password2.value) {
        pwdMatch.textContent = '';
        submit.removeAttribute('disabled');
    } else {
        pwdMatch.textContent = "*Passwords do not match";
        submit.setAttribute('disabled', '');
    }
}
