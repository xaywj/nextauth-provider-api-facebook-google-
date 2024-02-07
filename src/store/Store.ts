'use client'
import { configureStore } from "@reduxjs/toolkit";
import { Authslice } from "./Authslice";

export const StoreRedux = configureStore({
  reducer: {
    Auth: Authslice.reducer,
  },
});
