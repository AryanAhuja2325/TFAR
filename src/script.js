var btn = document.getElementById('btn');
var ip = document.getElementById('ip');
var text = document.getElementById('ans');

var vids = ['../assets/thala.mp4', '../assets/thala2.mp4'];

btn.addEventListener('click', () => {
    var headingElement = document.querySelector('.heading');
    headingElement.innerHTML = "Behind Every Thing there is a Reason";

    text.innerHTML = "";
    text.style.display = "none";
    let vid = document.getElementById("vid");
    vid.src = " ";
    vid.hidden = true;
    var inputValue = ip.value;
    var msg = "";
    if (!isNaN(inputValue)) {
        var ans;
        if (inputValue > 10) {
            ans = 7 - sumOfDigits(inputValue);
        } else {
            ans = 7 - inputValue;
        }

        if (ans > 0) {
            var formattedSum = splitAndJoin(inputValue);
            msg = `${formattedSum}+${ans}=${7}`;
        } else if (ans === 0) {
            var formattedSum = splitAndJoin(inputValue);
            msg = `${formattedSum}=${7}`;
        }
        else {
            var formattedSum = splitAndJoin(inputValue);
            msg = `${formattedSum}-${Math.abs(ans)}=${7}`;
        }
        thala();
    } else if (typeof inputValue === "string") {
        var ansText = 7 - inputValue.length;
        if (ansText > 0) {
            var formattedInput = splitAndJoin(inputValue);
            msg = `${formattedInput}+${ansText}=${7}`;
        } else if (ansText === 0) {
            var formattedInput = splitAndJoin(inputValue);
            msg = `${formattedInput}=${7}`;
        }
        else {
            var formattedInput = splitAndJoin(inputValue);
            msg = `${formattedInput}-${Math.abs(ansText)}=${7}`;
        }
        thala();
    }

    text.innerHTML = msg;
    text.style.display = "inline-block";
    headingElement.innerHTML = "";
    headingElement.innerHTML = "Thala for a Reason";
});

const sumOfDigits = (a) => {
    var sum = 0;
    var rem = 0;
    while (a != 0) {
        rem = a % 10;
        sum += rem;
        a = Math.floor(a / 10);
    }
    return sum;
}

const splitAndJoin = (input) => {
    return input.toString().split('').join('+');
}

const thala = () => {
    let vid = document.getElementById("vid");
    vid.hidden = false;
    var rand = Math.floor((Math.random() * 2));
    console.log(rand);
    vid.src = vids[rand];
    vid.play();
    document.body.appendChild(vid);
}
