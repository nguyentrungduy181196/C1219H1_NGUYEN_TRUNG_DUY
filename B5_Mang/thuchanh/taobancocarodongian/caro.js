    let b = document.getElementById("gamecaro");
    let board = [];
    let data = "";
    for (let i = 0; i < 5; i++){
        board[i] =[0,0,0,0,0];
    }
    for (let i = 0; i < 5; i++){
        data += "br/";
            for (let j = 0; j < 5; j++){
                data += board[i][j] + "&nbsp;&nbsp";

            }

    }
    data += "<br/><br/><input type ='button' value='change value' onclick='changevalue()'>";
    b.innerHTML = data;
    function changevalue() {
        let positionX = prompt("X: ");
        let positionY = prompt("Y: ");
        data = "";
        board[positionX][positionY] = "x";
        for (let i = 0; i < 5; i++){
            data += board[i][j] + "&nbsp;&nbsp;&nbsp;&nbsp;";

        }
        data += "<br/><br/><input type ='button' value='change value' onclick='changevalue()'>";
        b.innerHTML = "<hr/>" + data;
    }