import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { AccountState } from "../types/ReduxType";
import { v4 as uuidv4 } from "uuid";
import { TRANSACTION_TYPE } from "../constants/common";

const newTransaction = (amount, balance, type) => {
  return {
    timestamp: new Date(),
    id: uuidv4(),
    amount: type === "deposit" ? amount : `-${amount}`,
    balance,
    type,
  };
};

const initialState: AccountState = {
  accountNumber: 133099882,
  balance: 0,
  name: "Eugene Tan",
  transactions: [],
};

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    deposit: (state, action: PayloadAction<number>) => {
      const amount = action.payload;
      const newBalance = state.balance + amount;
      const transactions = [
        ...state.transactions,
        newTransaction(
          amount.toFixed(2),
          newBalance.toFixed(2),
          TRANSACTION_TYPE.DEPOSIT,
        ),
      ];
      return { ...state, balance: amount, transactions };
    },
    withdrawal: (state, action: PayloadAction<number>) => {
      const amount = action.payload;
      const newBalance = state.balance - amount;
      const transactions = [
        ...state.transactions,
        newTransaction(
          amount.toFixed(2),
          newBalance.toFixed(2),
          TRANSACTION_TYPE.WITHDRAW,
        ),
      ];
      return { ...state, balance: newBalance, transactions };
    },
  },
});

export const { deposit, withdrawal } = accountSlice.actions;

export default accountSlice.reducer;
