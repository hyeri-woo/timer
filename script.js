const timer = document.querySelector(".timer-wrapper");
const inputList = timer.querySelectorAll("input");
const inputHours = timer.querySelector(".input-hours");
const inputMin = timer.querySelector(".input-min");
const inputSec = timer.querySelector(".input-sec");
const btnStart = document.querySelector(".btn-start");
const btnReset = document.querySelector(".btn-reset");

window.addEventListener("load", () => {
    inputHours.value = "00";
    inputMin.value = "00";
    inputSec.value = "00";
    btnStart.disabled = true;
    btnReset.disabled = true;
});

inputList.forEach((item, index) => {
    item.addEventListener("change", () => {
        if(item.value.length > 2) {
            alert("Invalid Number");
            item.value = "00";
        }
        if(index === 1) {
            if(parseInt(item.value) > 60) {
                alert("Invalid Number: Maximum minute = 60");
                item.value = "60";
            }
        }
        if(index === 2) {
            if(parseInt(item.value) > 60) {
                alert("Invalid Number: Maximum second = 60");
                item.value = "60";
            }
        }
        btnStart.disabled = false;
        btnReset.disabled = false;
        item.value = item.value.toString().padStart(2, "0");
    })
})

const timeReset = () => {
    btnStart.classList.remove("pause");
    inputHours.value = "00";
    inputMin.value = "00";
    inputSec.value = "00";
    btnStart.disabled = true;
    btnReset.disabled = true;
}

const timeConverter = (time) => {
    const hour = Math.floor(time/3600);
    const min = Math.floor((time - hour*3600)/60);
    const sec = time - hour*3600 - min*60;
    return [hour, min, sec];
}

let timerId;
function startTimer() {
    let time = parseInt(inputHours.value) * 3600 + parseInt(inputMin.value) * 60 + parseInt(inputSec.value);
    time--;
    function timerEvent () {
        let [hourChange, minChange, secChange] = timeConverter(time);
        time--;
        inputHours.value = hourChange.toString().padStart(2, "0");
        inputMin.value = minChange.toString().padStart(2, "0");
        inputSec.value = secChange.toString().padStart(2, "0");
    }
    timerId = setInterval(timerEvent, 1000);
    setTimeout(() => {
        clearInterval(timerId);
        timeReset();
        alert("Finish");
    }, (time+1)*1000+500);
}

function stopTimer() {
    clearInterval(timerId);
}


btnStart.addEventListener("click", () => {
    if(btnStart.classList.contains("pause")) {
        btnStart.classList.remove("pause");
        btnStart.textContent = "START";
        stopTimer();
    } else {
        btnStart.classList.add("pause");
        btnStart.textContent = "PAUSE";
        startTimer();
    }
})

btnReset.addEventListener("click", () => {
    stopTimer();
    timeReset();
})

