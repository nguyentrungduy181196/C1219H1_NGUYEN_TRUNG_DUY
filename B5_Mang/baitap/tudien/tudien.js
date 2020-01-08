let english = ['name','go','I','you','who'];
let viet = ['tên','đi','toi','ban','ai'];
function tim() {
    let str = document.getElementById("str");
    for (let i=0;i<english.length;i++){
        if (str.value !== english[i]){

        }else {
            document.getElementById("result").innerText=viet[i];

        }
    }
}
