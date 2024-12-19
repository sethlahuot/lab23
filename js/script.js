function runningTime(){
    var today = new Date();
    var dm = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var monname = ['Januar', 'Februar', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var d = today.getDay();
    var da = today.getDate();
    var m = today.getMonth();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    var ampm = '';

    function TwoDigitNumber(number) {
        if (number < 10) {
            return '0' + number;
        } else {
            return number;
        }
    }

    function getOrdinalSuffix(date) {
        if (date % 10 === 1 && date % 100 !== 11) {
            return 'st';
        } else if (date % 10 === 2 && date % 100 !== 12) {
            return 'nd';
        } else if (date % 10 === 3 && date % 100 !== 13) {
            return 'rd';
        } else {
            return 'th';
        }
    }

    if (hours >= 12) {
        ampm = 'PM';
    } else {
        ampm = 'AM';
    }

    var suffix = getOrdinalSuffix(da);
    var display = dm[d] + ' ' + da + '<sup>' + suffix + '</sup>' + ' ' + monname[m] + '  ' + TwoDigitNumber(hours) + ':' + TwoDigitNumber(minutes) + ':' + TwoDigitNumber(seconds) + ' ' + ampm;
    document.getElementById('time').innerHTML = display;
}
setInterval(function() {runningTime()}, 1000);

function btnCal(){
    var mom = document.getElementById('mom').value;
    var dad = document.getElementById('dad').value;

    var chmom = mom.replace(/\s+/g, '').length;
    var chdad = dad.replace(/\s+/g, '').length;
    var parent = chmom + chdad;

    var image = document.getElementById('footer');
    image.style = 'display: block';

    if(parent % 2 === 0){
        image.innerHTML = `<img src="./img/girl.jpg" />`;
    }else{
        image.innerHTML = `<img src="./img/boy.jpg" />`;
    }
}

function btnClear() {
    document.getElementById('mom').value = '';
    document.getElementById('dad').value = '';
    document.getElementById('footer').innerHTML = '';
}