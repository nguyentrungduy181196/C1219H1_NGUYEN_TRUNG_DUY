    let x=0;
    let array = Array();
    function add_element_to_array() {
        array[x]= document.getElementById("tetvalue").value;
        alert("element:" + array[x] + "Added at index" + x);
        x++;
        document.getElementById("tetvalue").value="";

    }
    function display_array() {
        let e = "<hr/>";
        for (let i = 0; i <array.length; i++  ){
            e += "element" + i + " = " + array[i] + "<br/";
        }
        document.getElementById("tetvalue").innerHTML = e;

    }