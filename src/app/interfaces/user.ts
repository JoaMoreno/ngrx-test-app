interface debtsI {
  name: string;
  description: {
    referenceNumber: number;
    mail: string;
    billingMonth: string;
  };
  amount: number;
}
interface CardsI {
  name: string;
  number: number;
  headline: string;
  expiration: string;
}
export interface User {
  username: string;
  debts: Array<debtsI>;
  creditCards: Array<CardsI>;
}
