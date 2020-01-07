let x = [-3,5,7,9,10,14];
let max = x[0];
let index = 0;
for (let i= 1; i < x.length;i++){
    if (x[i] > max){
        max = x[i];
        index =i;
    }
}
alert("max: " + max +    "at position" + index);