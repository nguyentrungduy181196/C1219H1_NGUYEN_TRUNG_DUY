let totalpays = 500*  Number.parseInt(rentdays) *(1 - Number.parseFloat(discount)/100);
alert(
    "information of customer : \n "+
    "name: " +namecustomer +
    " \n idcard: " + idcard +
    "\n birthday: " + birthdaycustomer +
    "\n emaill: " + emaillcustomer +
    "\n address: " + addresscustomer +
    "\n type curtomer: " + typecustomer +
    "\n discount: " + discount +
    "\n accompanying:  " + addresscustomer +
    "\n type room: " + typerome +
    "\n rent days:  " + rentdays +
    "\n type service: " + typeservice +
    "\n total pays: " + totalpays
)