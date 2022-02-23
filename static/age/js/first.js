let bd = new Date(1996, 2, 20);
let current_year;
let next_year;
let current_year_bd;
let age, past, next;
let i = 0;
let res;
let now;
display_age = document.querySelector('#age');
display_dec = document.querySelector('#decimal');
progress_bar = document.querySelector('progress')


function start() {
    setInterval(function () {
        now = new Date();
        current_year = now.getFullYear();
        prev_new_year = new Date(current_year, 0, 1);
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

        decimal = (now - past)/(next - past);
        display_age.textContent = age;
        display_dec.textContent = '.' + Math.round(decimal * (10 ** 10));


        progress_bar.value = now - prev_new_year;
        progress_bar.max = new Date(current_year + 1,0,1) - prev_new_year;
    }, 100);
}


window.onload = function () {
    start();
};