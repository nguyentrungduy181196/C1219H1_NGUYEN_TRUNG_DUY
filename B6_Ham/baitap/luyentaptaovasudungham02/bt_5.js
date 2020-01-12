let a = parseInt(prompt("so thu nhat: "));
let b = parseInt(prompt("so thu hai: "));
let c = parseInt(prompt("so thu ba: "));
giaitri(a,b,c);
function giaitri(a,b,c) {
   let  min = a;
    if (b < min) {
        min = b;
    }else if (c < min ) {
        min = c;
    }
    alert("gia tri nho nhat la: " + min);


}