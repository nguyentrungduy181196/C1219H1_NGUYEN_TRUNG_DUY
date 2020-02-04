let Customer = function () {
    this.setNameCustomer = function (nameCustomer) {
        this.nameCustomer = nameCustomer;
    };
    this.getNameCustomer = function () {
        return this.nameCustomer;
    };
    this.setIdCard = function (idcard) {
        this.idcard = idcard;
    };
    this.getIdCard = function () {
        return this.idcard;
    };
    this.setBirthdayCustomer = function (birthdayCustomer) {
        this.birthdayCustomer = birthdayCustomer;
    };
    this.getBirthdayCustomer = function () {
        return this.birthdaycustomer;
    };
    this.setEmailCustomer = function (emailCustomer) {
        this.emailCustomer = emailCustomer;
    };
    this.getEmailCustomer = function () {
        return this.emailCustomer;
    };
    this.setAddressCustomer = function (addressCustomer) {
        this.addressCustomer = addressCustomer;
    };
    this.getAddressCustomer = function () {
        return this.addressCustomer;
    };
    this.setTypeCustomer = function (typeCustomer) {
        this.typeCustomer = typeCustomer;
    };
    this.getTypeCustomer = function () {
        return this.typeCustomer;
    };
    this.setDiscount = function (discount) {
        this.discount = discount;
    };
    this.getDiscount = function () {
        return this.discount;
    };
    this.setNumberOfAccompanying = function (numberOfAccompanying) {
        this.numberOfAccompanying = numberOfAccompanying;
    };
    this.getNumberOfAccompanying = function () {
        return this.numberOfAccompanying;
    };
    this.setTypeRoom = function (typeRoom) {
        this.typeRoom = typeRoom;
    };
    this.getTypeRoom = function () {
        return this.typeRoom;
    };
    this.setRentDay = function (rentDay) {
        this.rentDay = rentDay;
    };
    this.getRentDay = function () {
        return this.rentDay
    };
    this.setTypeService = function (typeService) {
        this.typeService = typeService;
    };
    this.getTypeService = function () {
        return this.typeService;
    };
    this.totalPays = function () {
        let moneyPerDays = 0;
        if (this.getTypeService() === "villa"){
            moneyPerDays = 500;
        }
        else if (this.getTypeService() === "villa"){
            moneyPerDays = 300;
        }else {
            moneyPerDays =200;
        }
        return moneyPerDays * parseFloat(this.getRentDay()) *(1- parseFloat(this.getDiscount())/100)
    }

};