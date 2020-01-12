let r =parseFloat(prompt("ban kinh :"));
    alert("dien tich la:" +dientich(r));
    alert("chu vi la: " + chuvi(r));


function dientich(r) {
  return (r * r * Math.PI);
}
function chuvi(r) {
    return (2 * r * Math.PI);
}
