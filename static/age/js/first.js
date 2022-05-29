csrftoken = document.querySelector('[name="csrfmiddlewaretoken"]').value
display_age = document.querySelector('.timer');
progress = document.querySelector('.progress_done');
left = document.querySelector('.left');
percent = document.querySelector('.percent');
right = document.querySelector('.right');

async function get_user_bd() {
    let url = window.location.href + 'bday/';

    answer = await fetch(url, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "cache-control": "no-cache",
            csrfmiddlewaretoken: csrftoken
        }
    }).then(response => {
        return response.json();
    }).catch((error) => {
        console.error(error);
    });

    bd_as_array = answer['birthday'].split("-");
    console.log(bd_as_array);
    
    return new Date(bd_as_array[0], bd_as_array[1] - 1, bd_as_array[2]);
}


function start(bd) {
    let current_year;
    let current_year_bd;
    let age, past, next;
    let now;
    let bd_day = bd.getDate();
    let bd_month = bd.getMonth();
    let bd_year = bd.getFullYear();


    setInterval(function () {
        now = new Date();
        current_year = now.getFullYear();
        prev_new_year = new Date(current_year, 0, 1);
        current_year_bd = new Date(current_year, bd_month, bd_day);

        if (now >= current_year_bd) {
            age = current_year - bd_year;
            past = current_year_bd;
            next = new Date(current_year + 1, bd_month, bd_day);
        } else {
            age = current_year - bd_year - 1;
            past = new Date(current_year - 1, bd_month, bd_day);
            next = current_year_bd;
        }

        decimal = (now - past)/(next - past);
        display_age.textContent = (Math.round((age + decimal) * (10 ** 10)) / (10 ** 10)).toFixed(10);

        year_done = Math.round((now - prev_new_year) * 100 / (new Date(current_year + 1,0,1) - prev_new_year));

        left.textContent = current_year;
        right.textContent = current_year + 1;
        percent.textContent = year_done + '%';
        progress.style.width = year_done + '%';
        progress.style.opacity = 1;
    }, 100);
}


window.onload = async function () {
    value = await get_user_bd()
    start(value);
};