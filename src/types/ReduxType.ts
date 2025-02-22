import { TRANSACTION_TYPE } from "../constants/common";
export type TransactionType = keyof typeof TRANSACTION_TYPE | "";

export interface TransactionState {
  timestamp: Date;
  id: string;
  amount: string;
  balance: string;
  type: TransactionType;
}

export interface AccountState {
  accountNumber: number;
  balance: number;
  name: string;
  transactions: Array<TransactionState>;
}
