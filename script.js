let hitRandomNumber = 0;
let score = 0;

function getHitNumber() {
    hitRandomNumber = Math.floor(Math.random() * 10)
    document.querySelector("#hit").textContent = hitRandomNumber;
}

getHitNumber();


let timer = 60;

function timerFunc() {
    let timerInt = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector("#timeVal").textContent = timer;
        } else {
            clearInterval(timerInt);
            document.querySelector(".bubbles").innerHTML = "<h1>Game Over!</h1>"
        }

    }, 1000)
}

timerFunc();


function makeBubbles() {

    let clutter = "";

    for (let i = 0; i < 100; i++) {
        bubRandomNumbers = Math.floor(Math.random() * 10);
        clutter += `<div class="bub">${bubRandomNumbers}</div>`
    }
    document.querySelector(".bubbles").innerHTML = clutter;
}

makeBubbles();


function increaseScore() {
    score += 10;
    document.querySelector("#score").textContent = score;
}

document.querySelector(".bubbles").addEventListener("click", function (data) {
    const match = Number(data.target.textContent);

    if (match === hitRandomNumber) {
        increaseScore();
        getHitNumber();
        makeBubbles();
    }
})




