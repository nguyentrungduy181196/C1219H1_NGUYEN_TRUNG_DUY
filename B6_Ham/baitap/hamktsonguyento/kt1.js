let input = parseInt(prompt("nhap vao 1 so: "));
 isPrime(input);

function isPrime() {
    if (Number <= 1 ){
        return false;
    }
    for (let i = 1; i <Number; i++){
        if (Number % i === 0){
            return true;
        }
    }
    return false;

}