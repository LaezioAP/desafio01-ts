import { DioAccount } from "./DioAccount";

export class OtherPeople extends DioAccount {
  otherIdPeople: number;

  constructor(name: string, accountNumber: number, otherIdPeople: number) {
    super(name, accountNumber);
    this.otherIdPeople = otherIdPeople;
  }

  deposit = (value: number): string | undefined => {
    if (this.getStats() && value > 0) {
      this.setBalance(value + 10);
      console.log(`Você depositou R$${value} reais e foi acrescentado R$10 reais`);
      return;
    }
    console.log("Não foi possível realizar o deposito");
  };
}
