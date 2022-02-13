let bd = new Date(1996, 2, 20);
let current_year;
let current_year_bd;
let age, past, next;
let i = 0;
let res;
let now;


function start(display) {
    setInterval(function () {
        now = new Date();
        current_year = now.getFullYear()
        current_year_bd = new Date(current_year, 2, 20);
        if (now >= current_year_bd) {
            age = current_year - bd.getFullYear();
            past = current_year_bd;
            next = new Date(current_year + 1, 2, 20);
        } else {
            age = current_year - bd.getFullYear() - 1;
            past = new Date(current_year - 1, 2, 20);
            next = current_year_bd;
        }

        value = (age + (now - past)/(next - past));
        display.textContent = (Math.round((value + Number.EPSILON) * (10 ** 10)) / (10 ** 10)).toFixed(10);
    }, 100);
}


window.onload = function () {
    display = document.querySelector('#timer');
    start(display);
};