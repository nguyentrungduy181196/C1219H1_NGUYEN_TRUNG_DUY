let input = parseInt(prompt("nhap vao 1 so: "));
    hienthisonguyento(input);
    function hienthisonguyento(m) {
        let count =0;
        let i= 2;
        let str = "";
        while (count < m){
            if (issonguyento(i)){
                str +=  i + " ";
                count++
            }
            i++
        }
        document.write(str);
    }
    function issonguyento(so) {
        for (let i =2; i < so; i++){
            if (so % i ==0){
                return false;
            }
        }
        return true;

    }