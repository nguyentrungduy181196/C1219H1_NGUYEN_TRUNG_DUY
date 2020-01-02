    let tinh ="<table border='3' width='400' cellspacing='0' cellpadding='4'>";
    let i,j;
    for (i = 1; i <= 10; i++) {
        tinh = tinh + "<tr>";
        for (j = 2; j < 10; j++) {
            tinh = tinh + "<td>" +j  + 'x' + i + '=' + (i *j) + "</td>";
        }
        tinh =tinh + "</tr>";
    }
    tinh = tinh + "</table>";
    document.write(tinh);
