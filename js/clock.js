const clock = document.querySelector("h2.clock");
const dates = document.querySelector("h2.date");

function getClock() {
    const date = new Date();
    // new Date object는 네가 이걸 호출하는 당시의 현재 날짜랑 시간을 알려준다.
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    const years = String(date.getFullYear()).padStart(2,"0");
    const month = String(date.getMonth()+1).padStart(2,"0");
    const datess = String(date.getDate()).padStart(2,"0");
    //const day = String(date.getDay()).padStart(2,"0");
    //padEnd함수도 존재한다 , pad(padding이란 뜻이다.)
    //padStart(2,"0")함수는 문자열 길이가 2가 아니면 앞에 0을 추가한다는 뜻이다.
    //if (day === 04) {
    //   day = console.log(Thursday);
    //}
   
    clock.innerText = `${hours}:${minutes}:${seconds}`;
    dates.innerText = `${years}/${month}/${datess}`;
}




getClock();
setInterval(getClock, 1000);
