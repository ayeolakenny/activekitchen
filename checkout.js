let checkoutOrder = document.querySelector('.checkoutOrder').innerText = sessionStorage.getItem('orderToPass');
let checkoutName = document.querySelector('.checkoutName').innerText = localStorage.getItem('formName');
let checkoutPrice = document.querySelector('.checkoutPrice').innerText = sessionStorage.getItem('priceToPass');
let checkoutMobile = document.querySelector('.checkoutMobile').innerText = localStorage.getItem('formNumber');
let checkoutEmail = document.querySelector('.checkoutEmail').innerText = localStorage.getItem('formEmail');

let checkoutOrder2 = document.querySelector('.checkoutOrder2').value = sessionStorage.getItem('orderToPass');
let checkoutName2 = document.querySelector('.checkoutName2').value = localStorage.getItem('formName');
let checkoutPrice2 = document.querySelector('.checkoutPrice2').value = sessionStorage.getItem('priceToPass');
let checkoutMobile2 = document.querySelector('.checkoutMobile2').value = localStorage.getItem('formNumber');
let checkoutEmail2 = document.querySelector('.checkoutEmail2').value = localStorage.getItem('formEmail');
