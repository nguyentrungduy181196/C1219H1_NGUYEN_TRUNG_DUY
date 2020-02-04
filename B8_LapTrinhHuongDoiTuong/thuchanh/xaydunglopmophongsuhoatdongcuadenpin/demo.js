let chonbutton = function (status) {
    this.status = status;
    this.getStatus = function () {
        return this.status;
    }
    this.setstatus = function (Newstatus) {
        this.status = Newstatus;

    }
    this.TurnOn_TurnOff = function () {
        this.status = !this.status;

    }
};
let light = function (chonbutton1) {
    this.onlight = function () {
        if (chonbutton1.getStatus() === true) {
            document.getElementById("lamp").src = "../anh/pic_den2.gif";
            //document.getElementById("result").innerHTML;
        } else {
            document.getElementById("lamp").src = "../anh/pic_den.gif";
            //document.getElementById("result").innerHTML;
        }
    }

    };

let chonbutton1 = new chonbutton(false);
let map  = new light(chonbutton1);
function battat() {
    chonbutton1.TurnOn_TurnOff();
    map.onlight();

};

