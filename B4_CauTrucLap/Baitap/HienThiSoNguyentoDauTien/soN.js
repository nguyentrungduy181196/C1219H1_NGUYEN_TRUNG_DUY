
    let number = parseInt(prompt('Enter your number: '));
    let countFor = 0;
    let countIf = 0 ;
    if (number <= 0) {
        alert('Khong ton tai bat ky so nguyen to nao !!!');
    } else {
    let n=2;
    while (countFor<number) {
        for ( let i=2 ; i <= n/2; i++){
            if ( n % i === 0 ) {
                countIf += 1;
                break;
            }
        }
        if ( countIf === 0) {
            document.write(n + " ");
            countFor += 1;
        }
        countIf=0;
        n++;
    }
}
