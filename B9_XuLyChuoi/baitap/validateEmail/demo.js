let email =/^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/; 
function run(str) {
    email = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;

 if (email.test(str)){
    return  true;
}else {
    return false;
}
}
let zipcode = "a@gmail.com";
    document.write(run(zipcode));
zipcode = "ab@yahoo.com";
    document.write(run(zipcode));
zipcode = "abc@hotmail.com";
    document.write(run(zipcode));
zipcode = "@gmail.com";
    document.write(run(zipcode));
zipcode = "ab@gmail.";
    document.write(run(zipcode));
zipcode = "@#abc@gmail.com";
    document.write(run(zipcode));
