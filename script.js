document.querySelector(".links").addEventListener("click", function (event) {
    console.log(event.target);
    alert("loading weather report for " + event.target.innerText)
})

document.querySelector(".cookie-policy").addEventListener("click", function (event) {
    console.log(event.target.nodeName);
    if (event.target.nodeName === "BUTTON") {
        console.log("delete time");
        document.querySelector(".cookie-policy").remove()
    }
})

function Celsius_to_Fahrenheit(temp) {
    return Math.round(9 / 5 * temp + 32);
}

function Fahrenheit_to_Celsius(temp) {
    return Math.round(5 / 9 * (temp - 32));
}

document.querySelector(".temperature-scale").addEventListener("change", function (event) {
    console.log(event.target.value);
    for (let i = 1; i < 9; i++) {
        let tempSpan = document.querySelector("#temp" + i);
        let tempVal = parseInt(tempSpan.innerText);
        if (event.target.value == "°C") {
            tempSpan.innerText = Fahrenheit_to_Celsius(tempVal);
        } else {
            tempSpan.innerText = Celsius_to_Fahrenheit(tempVal);
        }
    }

})
