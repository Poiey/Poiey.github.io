var Hours = ['零点', '一点', '二点', '三点', '四点', '五点', '六点', '七点', '八点', '九点', '十点', '十一点', '十二点', '十三点', '十四点', '十五点', '十六点', '十七点', '十八点', '十九点', '二十点', '二十一点', '二十二点', '二十三点'];
var Minutes = ['一分', '二分', '三分', '四分', '五分', '六分', '七分', '八分', '九分', '十分', '十一分', '十二分', '十三分', '十四分', '十五分', '十六分', '十七分', '十八分', '十九分', '二十分', '二十一分', '二十二分', '二十三分', '二十四分', '二十五分', '二十六分', '二十七分', '二十八分', '二十九分', '三十分', '三十一分', '三十二分', '三十三分', '三十四分', '三十五分', '三十六分', '三十七分', '三十八分', '三十九分', '四十分', '四十一分', '四十二分', '四十三分', '四十四分', '四十五分', '四十六分', '四十七分', '四十八分', '四十九分', '五十分', '五十一分', '五十二分', '五十三分', '五十四分', '五十五分', '五十六分', '五十七分', '五十八分', '五十九分', '六十分'];
var Second = ['一秒', '二秒', '三秒', '四秒', '五秒', '六秒', '七秒', '八秒', '九秒', '十秒', '十一秒', '十二秒', '十三秒', '十四秒', '十五秒', '十六秒', '十七秒', '十八秒', '十九秒', '二十秒', '二十一秒', '二十二秒', '二十三秒', '二十四秒', '二十五秒', '二十六秒', '二十七秒', '二十八秒', '二十九秒', '三十秒', '三十一秒', '三十二秒', '三十三秒', '三十四秒', '三十五秒', '三十六秒', '三十七秒', '三十八秒', '三十九秒', '四十秒', '四十一秒', '四十二秒', '四十三秒', '四十四秒', '四十五秒', '四十六秒', '四十七秒', '四十八秒', '四十九秒', '五十秒', '五十一秒', '五十二秒', '五十三秒', '五十四秒', '五十五秒', '五十六秒', '五十七秒', '五十八秒', '五十九秒', '六十秒'];
var Otimeout = document.querySelectorAll('.timeout');

var date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();
var nowsecond = 'rotate(' + -6 * (seconds - 1) + 'deg)'
Otimeout[0].style.transform = nowsecond;
var nowminutes = 'rotate(' + -6 * (minutes - 1) + 'deg)'
Otimeout[1].style.transform = nowminutes;
var nowhours = 'rotate(' + -15 * (hours) + 'deg)'
Otimeout[2].style.transform = nowhours;

(function () {

    //秒
    for (var i = 0; i < 60; i++) {
        var secbox = document.createElement('div');
        secbox.className = 'secbox'
        var Rotate = 'rotate(' + 6 * i + 'deg)'
        // console.log(Rotate)
        secbox.style.transform = Rotate
        secbox.innerText = Second[i]
        secbox.style.textAlign = 'right'
        Otimeout[0].appendChild(secbox);
    }

    //分
    for (var i = 0; i < 60; i++) {
        var minbox = document.createElement('div');
        minbox.className = 'minbox'
        var Rotate = 'rotate(' + 6 * i + 'deg)'
        // console.log(Rotate)
        minbox.style.transform = Rotate
        minbox.innerText = Minutes[i]
        minbox.style.textAlign = 'right'
        Otimeout[1].appendChild(minbox);
    }
    //时
    for (var i = 0; i < 24; i++) {
        var houbox = document.createElement('div');
        houbox.className = 'houbox'
        var Rotate = 'rotate(' + 15 * i + 'deg)'
        // console.log(Rotate)
        houbox.style.transform = Rotate
        houbox.innerText = Hours[i]
        houbox.style.textAlign = 'right'
        // houbox.style.textIndent = '1em'
        Otimeout[2].appendChild(houbox);
    }

    (function () {
        var count = seconds - 1;
        var con = minutes - 1;
        var cos = hours - 2;
        var timer = setInterval(function () {
            count++
            var rotate = 'rotate(' + -6 * count + 'deg)'
            Otimeout[0].style.transform = rotate
            if (count % 60 == 0) {
                con++;
                var rotate1 = 'rotate(' + -6 * con + 'deg)'
                Otimeout[1].style.transform = rotate1
                if (con % 60 == 0) {
                    cos++;
                    var rotate2 = 'rotate(' + -15 * cos + 'deg)'
                    Otimeout[2].style.transform = rotate2

                }
            }
        }, 1000)
    })();
})()

function $(id) {
    return document.querySelector(id)
}

