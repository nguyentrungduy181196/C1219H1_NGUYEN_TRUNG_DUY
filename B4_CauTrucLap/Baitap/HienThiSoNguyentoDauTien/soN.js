
    let number = parseInt(prompt('Enter your number: '));
    let giatri = 0;
    let count = 0 ;
    if (number <= 0) {
        alert('Khong ton tai bat ky so nguyen to nao !!!');
    } else {
    let n=2;
    while (giatri<number) {
        for ( let i=2 ; i <= n/2; i++){
            if ( n % i === 0 ) {
                count += 1;
                break;
            }
        }
        if ( count === 0) {
            document.write(n + " ");
            giatri += 1;
        }
        count=0;
        n++;
    }
}
