let number = parseInt(prompt("giai thua cua number la :"))
   alert(tinhgiaithua(number)) ;
function tinhgiaithua(number) {
    let result = 1;
    for (let i = 1; i <= number; i++){
        result = result * i;
    }
        return result;
}