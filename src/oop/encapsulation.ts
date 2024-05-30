class Bank {
  private wallet: number = 0;

  public deposit(amount: number): number {
    return (this.wallet += amount);
  }

  public withdraw(amount: number): number {
    return (this.wallet -= amount);
  }
}

let kbzBank = new Bank();
console.log(`Deposit Amount: ${kbzBank.deposit(30000)}`);
console.log(`Withdraw Amount: ${kbzBank.withdraw(10000)}`);
