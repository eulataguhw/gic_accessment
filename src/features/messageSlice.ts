import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { FormattedMessageType } from "../types/CommonTypes";
import { BANK_NAME } from "../constants/common";

export const initialState: FormattedMessageType = {
  id: "landingScreen.openingMessage",
  value: { bankName: BANK_NAME },
};

export const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    message: (state, action: PayloadAction<FormattedMessageType>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { message } = messageSlice.actions;

export default messageSlice.reducer;
