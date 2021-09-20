class BankAccount {
    import = 0;

    constructor (parameter) {
        this.import = parameter; 
    }

    deposit(parameter) {
        this.import += parameter;
    }

    withdraw(parameter) {
        this.import -= parameter;
    }

    view() {
        console.log(this.import);
    }
}


const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view();