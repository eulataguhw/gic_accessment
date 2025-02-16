import { configureStore } from "@reduxjs/toolkit";

import accountReducer from "../features/accountSlice";
import messageReducer from "../features/messageSlice";

export const store = configureStore({
  reducer: {
    account: accountReducer,
    message: messageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
