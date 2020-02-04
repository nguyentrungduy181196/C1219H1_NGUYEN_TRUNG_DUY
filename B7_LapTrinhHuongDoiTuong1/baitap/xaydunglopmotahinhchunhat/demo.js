function Rectangle(a,b) {
    this.a = a;
    this.b = b;
    this.s = function () {
       return (this.a * this.b);


    };
    this.p = function () {
        return (this.a +this.b) *2;

    }
}
run();
function run() {
   let c=document.getElementById("canvasexample");
    let ctx=c.getContext("2d");
   let a = parseFloat(prompt("chieu dai la: "));
   let b = parseFloat(prompt("chieu rong la: "));
    let rungo = new Rectangle(a,b)
    ctx.fillStyle ="#4CAF50";
    ctx.fillRect(20,20,100,100);
    document.write('<br/>');
    document.write("dien tich la: "+ rungo.s() );
    document.write('<br/>');
    document.write("chu vi la: "+ rungo.p() );



}