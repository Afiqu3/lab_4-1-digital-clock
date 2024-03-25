const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const tg = document.getElementById("dh1");
const d1 = document.getElementById("div1");
const d2 = document.getElementById("div2");
const d3 = document.getElementById("div3");
function time(){
    let cur = new Date();
    curMonth = cur.getMonth();
    tg.innerHTML = cur.getDate() + ", " + months[curMonth] + " " + cur.getFullYear();
    d1.innerHTML = cur.getHours();
    d2.innerHTML = cur.getMinutes();
    d3.innerHTML = cur.getSeconds();
}
setInterval(time, 1000)
