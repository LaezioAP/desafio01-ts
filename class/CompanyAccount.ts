import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  getLoan = (loan: number): string | undefined => {
    if (this.getStats() && loan > 0) {
      this.setBalance(loan + 10);
      console.log(`A empresa ${this.getName()} fez um empréstimo de ${loan}`);
      return;
    }

    console.log("Não foi possível fazer o empréstimo!");
    return;
  };
}
