export type TransactionType = "DEBIT" | "CREDIT" | "";

export interface TransactionState {
  timestamp: Date;
  id: string;
  amount: number;
  balance: number;
  type: TransactionType;
}

export interface AccountState {
  accountNumber: number;
  balance: number;
  name: string;
  transactions: Array<TransactionState>;
}
