let bd = new Date(1996, 2, 20);
let current_year;
let next_year;
let current_year_bd;
let age, past, next;
let i = 0.1;
let res;
let now;
display_age = document.querySelector('.timer');
progress = document.querySelector('.progress_done');
left = document.querySelector('.left');
right = document.querySelector('.right');


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
        display_age.textContent = (Math.round((age + decimal) * (10 ** 10)) / (10 ** 10)).toFixed(10);

        year_done = Math.round((now - prev_new_year) * 100 / (new Date(current_year + 1,0,1) - prev_new_year));

        left.textContent = current_year
        right.textContent = current_year + 1
        progress.style.width = year_done + '%';
        progress.style.opacity = 1;
    }, 100);
}


window.onload = function () {
    start();
};