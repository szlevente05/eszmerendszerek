//Variables

const body = document.querySelector("body");
const toggle = document.getElementById("toggle");
const table = document.getElementsByClassName("table")[0];
const btn1 = document.getElementById("nac");
const btn2 = document.getElementById("lib");
const btn3 = document.getElementById("kon");
const btn4 = document.getElementById("sum");
const nacio = document.getElementsByClassName("nacio")[0];
const liber = document.getElementsByClassName("liber")[0];
const konzerv = document.getElementsByClassName("konzerv")[0];
let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;

//Dark mode switch

toggle.onclick = function(){
    toggle.classList.toggle("active");
    body.classList.toggle("active");
    table.classList.toggle("table-dark");
    btn1.classList.toggle("btn-dark");
    btn1.classList.toggle("btn-light");
    btn2.classList.toggle("btn-dark");
    btn2.classList.toggle("btn-light");
    btn3.classList.toggle("btn-dark");
    btn3.classList.toggle("btn-light");
    btn4.classList.toggle("btn-dark");
    btn4.classList.toggle("btn-light");
}

//Button event - 1

btn1.onclick = () => {
    count1++;
    if (count1%2 == 0){
        nacio.style.display = "none";
    } else{
        nacio.style.display = "block";
    }
}

//Button event - 2

btn2.onclick = () => {
    count2++;
    if (count2%2 == 0){
        liber.style.display = "none";
    } else{
        liber.style.display = "block";
    }
}

//Button event - 3

btn3.onclick = () => {
    count3++;
    if (count3%2 == 0){
        konzerv.style.display = "none";
    } else{
        konzerv.style.display = "block";
    }
}

//Button event - 4

btn4.onclick = () => {
    count4++;
    if (count4%2 == 0){
        nacio.style.display = "none";
        liber.style.display = "none";
        konzerv.style.display = "none";
    } else{
        nacio.style.display = "block";
        liber.style.display = "block";
        konzerv.style.display = "block";
    }
}

//©2022 - All Rights Reserved