// SELECT ALL ELEMENTS

const form = document.getElementById('form');
const fname = document.querySelector('.fname');
const lname = document.querySelector('.lname');
const mail = document.querySelector('.mail');
const tel = document.querySelector('.tel');
const pass = document.querySelector('.pass');
const confirm = document.querySelector('.confirm');
const btn = document.querySelector('button');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    formValidation();
});

// CHECK FORM //

function formValidation() {
    let reMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let reTel = /^\d+$/;
    let reChars = /^[A-Za-z]+$/;
    let passOK = false;
    const fnameValue = fname.value.trim();
    const lnameValue = lname.value.trim();
    const mailValue = mail.value.trim();
    const telValue = tel.value.trim();
    const passValue = pass.value.trim();
    const confirmValue = confirm.value.trim();

    if (fnameValue.match(reChars) !== null && fnameValue !== '' && fnameValue.length < 32) {
        showSuccess('fname');
    }
    else {
        showFail('fname');
    }
    if (lnameValue.match(reChars) !== null && lnameValue !== '' && lnameValue.length < 32) {
        showSuccess('lname');
    }
    else {
        showFail('lname');
    }
    if (mailValue.match(reMail) !== null && mailValue !== '' && mailValue.length < 48) {
        showSuccess('mail');
    }
    else {
        showFail('mail');
    }
    if (telValue.match(reTel) !== null && telValue.length > 5 && telValue.length < 15) {
        showSuccess('tel');
    }
    else {
        showFail('tel');
    }
    if (passValue !== '' && passValue.length > 7 && passValue.length < 128) {
        showSuccess('pass');
        passOK = true;
    }
    else {
        showFail('pass');
        passOK = false;
    }
    if (confirmValue == passValue && confirmValue !== '' && passOK == true) {
        showSuccess('confirm');
    }
    else {
        showFail('confirm');
    }
};
// CHECK RESULTS //

function showFail(element) {
    const errorElement = document.querySelector(`div.${element}.error`);
    const errorElement2 = document.querySelector(`input.${element}`)
    errorElement.className = `${element} error true`;
    errorElement2.className = `${element} notok`;
};

function showSuccess(element) {
    const successElement = document.querySelector(`div.${element}.error`);
    const errorElement2 = document.querySelector(`input.${element}`)
    successElement.className = `${element} error false`;
    errorElement2.className = `${element} ok`;

}