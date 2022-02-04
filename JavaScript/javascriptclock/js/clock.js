var name = prompt("İsminizi giriniz")
if (name != "") {
    document.getElementById("myName").innerHTML = name;
}
else {
    document.getElementById("myName").innerHTML = "misafir";
}

function showTime() {
    var date = new Date()
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59 


    //Başlarına sıfır ekliyoruz eğer 10'dan küçükse
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;


    var time = h + ":" + m + ":" + s;
    document.getElementById("myClock").innerHTML = time;
    setTimeout(showTime, 1000);
}
showTime()