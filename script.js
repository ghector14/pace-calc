function minutes() {
    var num1 = Number(document.formcalc.txtnum1.value);
    var num2 = Number(document.formcalc.txtnum2.value);
    var res = num2/num1;
    var pace = res.toString();
    var minutes = parseInt(pace);
    var seconds = (res - minutes)*60;
    var rounded = Math.round( seconds * 10 ) / 10;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = rounded;
}

function hours() {
    var num1 = Number(document.formcalc.txtnum1.value);
    var num2 = Number(document.formcalc.txtnum2.value);
    var res = num2/num1;
    var res60 = res * 60
    var pace = res.toString();
    var minutes = parseInt(pace);
    var seconds = (res - minutes)*60;
    var rounded = Math.round( seconds * 10 ) / 10;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = rounded;
}

function distance() {
    var x = document.getElementById("distance").value;
    document.getElementById("metric").innerHTML = x;
}

function times() {
    var time = document.getElementById("time").value;
        if (time == "hours") {
            hours();
        } else if (time == "minutes") {
            minutes()
        }
    return time;
}