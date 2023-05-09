const timer = document.querySelector(".timer-wrapper");
const hours = timer.querySelector(".input-hours");
const min = timer.querySelector(".input-min");
const sec = timer.querySelector(".input-sec");
const btnStart = document.querySelector(".btn-start");
const btnReset = document.querySelector(".btn-reset");

window.addEventListener("load", () => {
    hours.value = "00";
    min.value = "00";
    sec.value = "00";
    btnStart.disabled = true;
    btnReset.disabled = true;
});

hours.addEventListener("change", () => {
    btnStart.disabled = false;
    btnReset.disabled = false;
})

min.addEventListener("change", () => {
    btnStart.disabled = false;
    btnReset.disabled = false;
})

sec.addEventListener("change", () => {
    btnStart.disabled = false;
    btnReset.disabled = false;
    console.log("change");
    if(hours.value === "00" && min.value === "00" && sec.value === "00") {
        alert("Finish");
        hours.value = "00";
        min.value = "00";
        sec.value = "00";
        btnStart.disabled = true;
        btnReset.disabled = true;
    }
})

const timeReset = () => {
    hours.value = "00";
    min.value = "00";
    sec.value = "00";
    btnStart.disabled = true;
    btnReset.disabled = true;
}

const timeConverter = (hours, min, sec) => {
    console.log(parseInt(hours) * 3600 + parseInt(min) * 60 + parseInt(sec));
    return parseInt(hours) * 3600 + parseInt(min) * 60 + parseInt(sec);
}

const timerEvent = (hours, min, sec, isPause) => {
    let hourChange = hours;
    let minChange = min;
    let secChange = sec;
    let timerId = setInterval(() => {
        console.log(hourChange, minChange, secChange);
        secChange--;
    }, 1000);
    const time = parseInt(hours) * 3600 + parseInt(min) * 60 + parseInt(sec);
    setTimeout(() => {clearInterval(timerId);}, time*1000);
}

btnStart.addEventListener("click", () => {
    if(btnStart.classList.contains("pause")) {
        btnStart.classList.remove("pause");
        timerEvent(hours.value, min.value, sec.value, true);
    } else {
        btnStart.classList.add("pause");
        timerEvent(hours.value, min.value, sec.value, false);
    }
    sec.value = "00";
    // if(sec.value === "00") {
    //     btnStart.classList.remove("pause");
    //     timeReset();
    // }
})

btnReset.addEventListener("click", () => timeReset())

