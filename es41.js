class BankAccount {
    total = 0;
  
    constructor(initialAmount) {
      this.total = initialAmount;
    }
  
    deposit(amount) {
      if (amount < 0) {
          throw new Error('Errore');
      }else this.total += amount;
    }
  
    withdraw(amount) {
      if (amount < 0 || this.total < amount) {
          throw new Error('Errore2');
      }else   this.total -= amount;
    }
  
    view() {
      console.log(this.total);
    }
  }
  
  const bankAccount = new BankAccount(1000);
  bankAccount.deposit(500);
  bankAccount.deposit(200);
  bankAccount.withdraw(10000);
  bankAccount.view();