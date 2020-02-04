let dienthoai = /^[0-9()]{4,}-[(0[)0-9\s.-]{9,15}$/;
function run(str) {
    dienthoai = /^[0-9()]{4,}-[(0[)0-9\s.-]{9,15}$/;
    if (dienthoai.test(str)){
        return true;
    }else {
        return false;
    }
}
let madt = "(84)-(0987654321)";
    document.write(run(madt));
madt = "(83)-(0967541313)";
    document.write(run(madt));
madt = "(79)-(0987777999)" ;
    document.write(run(madt));
madt = "(a3)-(9081271371)";
    document.write(run(madt));
madt = "(f4)-(3451234654)";
    document.write(run(madt));
madt = "(k10-(5764982134)";
    document.write(run(madt));