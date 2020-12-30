let display = document.getElementById('counter');
let main = document.querySelector('main');
let section = document.querySelector('.counter-section');


function getTimeToGo(){
    const PUBLIC_DATE = new Date(2021,0,6,7,0);
    //const PUBLIC_DATE = new Date(2020,0,6,7,0);
    let now = new Date();
    now = Date.now();
    return Number.parseInt((PUBLIC_DATE-now)/1000);
}

function addZero(number){
if(number<10)
    return `0${number}`;
else
    return number;

}

function formatTime(timeToGo){
    let seconds = Number.parseInt(timeToGo%60);
    let minutes = Number.parseInt((timeToGo/60)%60);
    let hours = Number.parseInt((timeToGo/3600)%24);
    let days = Number.parseInt(timeToGo/(24*3600));

    let msg = `${addZero(days)}:${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}`;
    return msg;
}

function setChanges(){
    let timeToGo = getTimeToGo();
    if(timeToGo>0){
        display.innerText=formatTime(timeToGo);
        //main.style.display="none";
    }else{
        main.style.display="";
        display.parentNode.style.display="none";
        //section.style.display="none";
        clearInterval(refreshCounter);
    }
}

setChanges()
let refreshCounter = setInterval(setChanges,1000)


