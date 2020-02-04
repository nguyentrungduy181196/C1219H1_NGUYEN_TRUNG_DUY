let Account = /^[_a-z0-9]{6,}$/;
function run(str) {
    Account = /^[_a-z0-9]{6,}$/;
if (Account.test(str)){
    return true;
}else {
    return false;
}
}
let zipcode = "123abc_";
    document.write(run(zipcode));
 zipcode = "_abc123";
document.write(run(zipcode));
zipcode = "______";
document.write(run(zipcode));
zipcode = "123456";
document.write(run(zipcode));
zipcode = "abcedfg";
document.write(run(zipcode));
zipcode = "..@";
document.write(run(zipcode));
zipcode = "12345";
document.write(run(zipcode));
zipcode = "1234_";
document.write(run(zipcode));
zipcode = "abcde";
document.write(run(zipcode));