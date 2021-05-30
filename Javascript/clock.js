const clockContainer = document.querySelector(".js-clock"),
    clockTitle = document.querySelector('h1');

function getTime(){
    const date = new Date(); // Date는 클래스이다. date 객체 생성
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : `${hours}`}:${minutes < 10 ? `0${minutes}`:`${minutes}`}:${
        seconds < 10 ? `0${seconds}`: `${seconds}`}`;//객체안에 text 집어넣기

}

function init(){
    getTime();
    setInterval(getTime,1000);  // getTime 함수를 불러오는데, 그 간격을 1초(1000ms)로 해라.
}
init();




