let english = ['name','go','I','you','who'];
let viet = ['tên','đi','tôi','bạn','ai'];
function tim() {
    let str = document.getElementById("str");
    for (let i=0;i<english.length;i++){
        if (str.value == english[i]){
            alert(viet[i]);
            break;
        }
        if (i===english.length-1){
            if (str.value !== english [english.length-1]){
                document.getElementById("result").innerText= 'ban nhap sai';
            }


        }
    }
}
