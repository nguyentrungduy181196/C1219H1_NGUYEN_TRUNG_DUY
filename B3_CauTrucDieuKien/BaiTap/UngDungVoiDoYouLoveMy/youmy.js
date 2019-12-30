function SayYes() {
    alert("Yes me too <3");
}

function SayNo() {
    let x = Math.round(Math.random() * window.innerHeight) * 0.3;
    let y = Math.round(Math.random() * window.innerWidth)* 0.3;
    document.getElementById('not').style.left = x + 'px';
    document.getElementById('not').style.top = y + 'px';
}
