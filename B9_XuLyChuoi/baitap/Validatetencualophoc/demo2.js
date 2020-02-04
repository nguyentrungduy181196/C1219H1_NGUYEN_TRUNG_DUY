let lop = /^[C|A|P]+[0-9]{4,}[G|H|I|K|L|M]$/;
function run(str) {
    lop = /^[C|A|P]+[0-9]{4,}[G|H|I|K|L|M]$/;
    if (lop.test(str)){
        return true;
    }else {
        return false;
    }
}
let macode = "C0123G";
    document.write(run(macode));
macode = "A1234I";
    document.write(run(macode));
macode = "P9876M";
    document.write(run(macode));
macode = "A4567H";
    document.write(run(macode));
macode = "M1231G";
    document.write(run(macode));
macode = "L9876N";
    document.write(run(macode));
macode = "U3456D";
    document.write(run(macode));