document.addEventListener('DOMContentLoaded',function() {
    /* Function */
    function timeNow() {
        /* date variable */
        let today = new Date();
        let date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
        let time = document.getElementById('time');
        /* Div variable */
        let display = document.getElementById('display');
        let display2 = document.getElementById('display2');
        let bg = document.getElementById('bg');
        /* Logic */
        if (today.getHours() >= 0) {
            display.innerHTML = 'Good Morning Huy.';
            display2.innerHTML = 'Have a good day!';
            time.innerHTML = date;
            time.style.color = 'black'
            display.style.color = 'black';
            display2.style.color = 'black';
            bg.style.backgroundImage = "url('images/Morning.jpg')";
        }
        if (today.getHours() >= 12) {
            display.innerHTML = 'Good afternoon Huy.';
            display2.innerHTML = 'Wish you an energetic afternoon!';
            time.innerHTML = date;
            time.style.color = 'lightcyan'
            display.style.color = 'lightcyan';
            display2.style.color = 'lightcyan';
            bg.style.backgroundImage = "url('images/Afternoon.jpg')";
        }
        if (today.getHours() >= 18) {
            display.innerHTML = 'Good evening Huy.';
            display2.innerHTML = 'How was your day?';
            time.innerHTML = date;
            time.style.color = 'gold'
            display.style.color = 'gold';
            display2.style.color = 'gold';
            bg.style.backgroundImage = "url('images/Evening.jpg')";
        }
        if (today.getHours() >= 22) {
            display.innerHTML = 'Time to sleep.';
            display2.innerHTML = 'Good night!';
            time.innerHTML = date;
            bg.style.backgroundImage = "url('images/Night.jpg')";
        }
    };
    /* Clock*/
    function showTime(){
        /* Variable */
        date = new Date();
        let h = date.getHours();
        let m = date.getMinutes();
        let s = date.getSeconds();
        let session = "AM";
        /* Logic */
        if(h == 0){
            h = 12;
        }
        if(h > 12){
            h = h - 12;
            session = "PM";
        }
        h = (h < 10) ? "0" + h : h;
        m = (m < 10) ? "0" + m : m;
        s = (s < 10) ? "0" + s : s;
        let time = h + ":" + m + ":" + s + " " + session;
        document.getElementById("MyClockDisplay").innerText = time;
        document.getElementById("MyClockDisplay").textContent = time;
        setTimeout(showTime, 1000);
    }
    showTime();
    timeNow();
});