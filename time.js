const now = new Date()
console.log(now)
console.log(now.getFullYear())
console.log(now.getMonth())
console.log(now.getDay())

function updateClock(){
    const time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();

    h = h<10 ? "0" + h : h;
    m = m<10 ? "0" + m : m;
    s = s<10 ? "0" + s : s;

    const timeNow = `${h}:${m}:${s}`
    document.getElementById('time').textContent = timeNow
}

setInterval(updateClock,1000)