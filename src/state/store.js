import { configureStore } from "@reduxjs/toolkit";
import auth from "./slices/authSlice";
import cartSice from "./slices/cartSice";

const store = configureStore({
  reducer: {
    auth: auth,
    cart: cartSice,
  },
});

export default store;
