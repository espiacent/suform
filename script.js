// SELECT ALL ELEMENTS

const form = document.getElementById('form');
const fname = document.querySelector('.fname');
const lname = document.querySelector('.lname');
const mail = document.querySelector('.mail');
const tel = document.querySelector('.tel');
const pass = document.querySelector('.pass');
const confirm = document.querySelector('.confirm');
const btn = document.querySelector('button');

form.addEventListener('submit', (e) => {
    console.log('submit');
    e.preventDefault();
    formValidation();
});

btn.addEventListener('click', (e) => {
    console.log('click')
    e.preventDefault();
    formValidation();
});

function formValidation() {
    const fnameValue = fname.value.trim();
    const lnameValue = lname.value.trim();
    const mailValue = mail.value.trim();
    const telValue = tel.value.trim();
    const passValue = pass.value.trim();
    const confirmValue = confirm.value.trim();

    if (fnameValue === '') {
        console.log('fname empty');
    }
};