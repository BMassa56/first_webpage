"use strict";
let text = document.querySelector('.nig');
let strText = text.textContent;
let arr = strText.split('');
let speed = 100;
text.textContent = "";

for (let i = 0; i < arr.length; i++) {
    text.innerHTML += "<span>" + arr[i] + "</span>";
}

let index = 0;
let timer = setInterval(onTick, speed);

function onTick() {
    const span = text.querySelectorAll('span')[index];
    span.classList.add('fade');
    index++;
    if (index === splitText.length) {
        complete();
        return;
    }
}

function complete() {
    clearInterval(timer);
    timer = null;
}