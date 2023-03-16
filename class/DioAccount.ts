export abstract class DioAccount {
  private readonly name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }


  getName = (): string => {
    return this.name;
  };

  getStats = (): boolean => {
    return this.status;
  };

  deposit = (balance: number): string | undefined => {
    if (this.validateStatus() && balance > 0) {
      this.balance += balance;
      console.log(`Você depositou R$${balance} reais`);
      return;
    }
    console.log("Não foi possível realizar o deposito");
  };

  withdraw = (balance: number): string | undefined => {
    if (this.validateStatus() && this.balance >= balance) {
      this.balance -= balance;
      console.log(`Você sacou R$${balance} reais`);
      return;
    }

    console.log("Não foi possível realizar o deposito");
    return;
  };

  getBalance = (): void => {
    console.log(this.balance);
  };

  setBalance = (loan: number): void => {
    this.balance += loan;
  };

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error("Conta inválida");
  };
}
