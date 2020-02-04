let listCustomer = [];
let validateBirthday = /^((0)[1-9]|[1-2][0-9]|(3)[0-1])(\/)(((0)[1-9])|((1)[0-2]))\/)\d{4}$/;
let validateEmail =/^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;
function displayMainMenu() {
    let choose = prompt(
        "1.Add new customer." +
        "\n2.Display information customer. " +
        "\n3.Edit information customer. " +
        "\n4.Delete customer. " +
        "\n5.Exit. "
    );
    switch (choose) {
        case "1":
            addNewCustomer();
            break;
        case "2":
            displaycustomrs()
            break;
        case "3":
            chooseDisplayTotalPay();
            break;
        case "4":
            chooseCustomerEdit()
            break;
        case "5":
            chooseDeleteCustomer()
            break;
        case "6":
            return;
        default:
            alert("Fail |||");
            break;
    }
}
function addNewCustomer() {
    let cus  = new  Customer();
    cus.setNameCustomer(prompt("Enter name customer: "));
    cus.setIdCard(prompt("Enter id card customer: "));
    do {

        cus.setBirthdayCustomer(prompt("Enter birthday customer(dd/MM/YYYY): "));
        if (validateBirthday.test(cus.getBirthdayCustomer())) {
            checkBirthday = true;

        } else {
            alert("Birthday is invalid please try again");
        }
    }
        while (!checkBirthday) ;

    do {
        cus.setEmailCustomer(prompt("Enter email customer: "));
        if (validateEmail.test(cus.getEmailCustomer()));{
            checkEmail = true;
        }else{
            alert(" Email is invalid please try again")
        }

    }while (checkEmail);
    cus.setAddressCustomer(prompt("Enter address customer: "));
    cus.setTypeCustomer(prompt("Enter type customer: "));
    cus.setDiscount(prompt("Enter discount: "));
    cus.setNumberOfAccompanying(prompt("Enter numer of Accompanying: "));
    cus.setTypeRoom(prompt("Enter type room: "));
    cus.setRentDay(prompt("Enter rent day: "));
    cus.setTypeService(prompt("Enter type service: "));
    listCustomer.push(cus);
}
function displaycustomrs() {
    let result = "";
    for (var i = 0; i < arrlistCustomers.length; i++){
        result += "\n" + (i + 1) + "." + "Name: " + arrlistCustomers[i][0] +
            ": Id Card: " + arrlistCustomers[i][1];
    }
    result += "\n" + (arrlistCustomers.length +1)+ ".Back to Menu.";
    let chooseDisplayInfor =  prompt(result);
    if (chooseDisplayInfor.toString() != (arrlistCustomers.length + 1).toString()) {
        if (!checkDeleteCustomer){
            displayInformationCustomer(Number.parseInt(chooseDisplayInfor - 1));
        }else {
            deleteCustomer(Number.parseInt(chooseDisplayInfor - 1));
        }

    }else {
        checkDeleteCustomer = false;
        checkEditCustomer = false;
        displayMainMenu();
    }
}
function displayInformationCustomer(index) {
    if (chooseCustomerEdit){
        let chooseInfoEdit = prompt(
            "1.Name : " + arrlistCustomers[index][0] +
            "\n2.Id card :" + arrlistCustomers[index][1] +
            "\n3.Birthday :" + arrlistCustomers[index][2] +
            "\n4.Email:" + arrlistCustomers[index][3] +
            "\n5.Address :" + arrlistCustomers[index][4] +
            "\n6.Type customer :" + arrlistCustomers[index][5] +
            "\n7.Discount :" + arrlistCustomers[index][6] +
            "\n8.Accompanying :" + arrlistCustomers[index][7] +
            "\n9.type Room :" + arrlistCustomers[index][8] +
            "\n10.Rent Days :" + arrlistCustomers[index][9] +
            "\n11.Type Service :" + arrlistCustomers[index][10]+
            "\n12.Back."
        );
        if (chooseInfoEdit.toString() != "12") {
            editInformationcustomer(Number.parseInt(chooseInfoEdit - 1));
        }else {
            displaycustomrs();
        }
    }
    else {
        alert("Infomation of customer:\n" +
            "Name :" + arrlistCustomers[index][0] +
            "\nId card :" + arrlistCustomers[index][1] +
            "\nBirthday :" + arrlistCustomers[index][2] +
            "\nEmail:" + arrlistCustomers[index][3] +
            "\nAddress :" + arrlistCustomers[index][4] +
            "\nType customer :" + arrlistCustomers[index][5] +
            "\nDiscount :" + arrlistCustomers[index][6] +
            "\nAccompanying :" + arrlistCustomers[index][7] +
            "\ntype Room :" + arrlistCustomers[index][8] +
            "\nRent Days :" + arrlistCustomers[index][9] +
            "\nType Service :" + arrlistCustomers[index][10]
        );
        displayMainMenu();
    }
}