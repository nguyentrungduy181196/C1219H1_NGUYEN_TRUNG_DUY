function nhietdo(C,F,K ) {
    this.C = C;
    this.F = (9/5)*C  + 32;
    this.k =  C  + 273;

}
let  Temperature = new nhietdo(25);
document.write("độ C sang F là :" +  Temperature.F);
document.write('<br/>');
document.write("độ C sang K là :" +  Temperature.k);

