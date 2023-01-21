//시계코드
const clock = document.querySelector('.second_clock');
const todayDate = document.querySelector('.second_date');



function getTime(){
    const time = new Date();
    
    const hour = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    const year = time.getFullYear(); // 년도
    const month = time.getMonth() + 1;  // 월
    const date = time.getDate();  // 날짜

    const WEEKDAY = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const day = WEEKDAY[time.getDay()];
    
    clock.innerHTML = `${hour<10 ? `0${hour}`:hour}:${minutes<10 ? `0${minutes}`:minutes}:${seconds<10 ? `0${seconds}`:seconds}`
    todayDate.innerHTML = `${year}년 ${month}월 ${date}일 ${day}`
}

function init(){
    setInterval(getTime, 1000);
}

init();



