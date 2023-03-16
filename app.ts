import { CompanyAccount } from "./class/CompanyAccount";
import { OtherPeople } from "./class/OtherPeople";
import { PeopleAccount } from "./class/PeopleAccount";

console.log("============= CONTA FÍSICA =============");
const peopleAccount: PeopleAccount = new PeopleAccount(1, "Nath", 10);
console.log(peopleAccount);
peopleAccount.deposit(350);
console.log(peopleAccount);
peopleAccount.withdraw(200);
console.log(peopleAccount);

console.log("============= CONTA OtherPeoplo =============");
const otherPeoplo: OtherPeople = new OtherPeople("Kleber", 2, 30);
console.log(otherPeoplo);
otherPeoplo.deposit(1000);
console.log(otherPeoplo);
otherPeoplo.withdraw(200);
console.log(otherPeoplo);

console.log("============= CONTA PJ =============");
const companyAccount: CompanyAccount = new CompanyAccount("DIO", 20);
console.log(companyAccount);
companyAccount.deposit(1000);
console.log(companyAccount);
companyAccount.withdraw(200);
console.log(companyAccount);
companyAccount.getLoan(0);
console.log(companyAccount);
companyAccount.getLoan(20000);
console.log(companyAccount);