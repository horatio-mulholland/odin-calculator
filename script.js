
const upper = document.querySelector("#upper");
const lower = document.querySelector("#lower");

document.querySelectorAll(".number").forEach((number) => {
    number.addEventListener("click", () => {
        lower.textContent += number.textContent;
    });
});

document.querySelector("#point").addEventListener("click", () => {
    if (!lower.textContent.includes(".")) {
        lower.textContent += ".";
    }
});

document.querySelector("#backspace").addEventListener("click", () => {
    lower.textContent = lower.textContent.slice(0, -1);
});

let plus = (x, y) => x + y;
let minus = (x, y) => x - y;
let times = (x, y) => x * y;
let divide = (x, y) => x / y;

let first = undefined;
let second = undefined;
let operator = undefined;

document.querySelector("#plus").addEventListener("click", () => {
    first = +lower.textContent;
    upper.textContent = first.toString() + " + ";
    lower.textContent = "";
    operator = plus;
});

document.querySelector("#minus").addEventListener("click", () => {
    first = +lower.textContent;
    upper.textContent = first.toString() + " - ";
    lower.textContent = "";
    operator = minus;
});

document.querySelector("#times").addEventListener("click", () => {
    first = +lower.textContent;
    upper.textContent = first.toString() + " * ";
    lower.textContent = "";
    operator = times;
});

document.querySelector("#divide").addEventListener("click", () => {
    first = +lower.textContent;
    upper.textContent = first.toString() + " / ";
    lower.textContent = "";
    operator = divide;
});

document.querySelector("#equals").addEventListener("click", () => {
    second = +lower.textContent;
    upper.textContent += second.toString();
    lower.textContent = operator(first, second).toString();
    first = undefined;
    second = undefined;
    operator = undefined;
});

document.querySelector("#clear").addEventListener("click", () => {
    lower.textContent = "";
    upper.textContent = "";
});
