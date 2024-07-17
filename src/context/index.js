import { configureStore } from "@reduxjs/toolkit";
import { api } from "./Api";
// import authReducer from "../context/Slice/Auth/AuthSlice";
// import wishlistSlice from "./wishlist/wishlistSlice";
// import cartSlice from "./cart/cartSlice";

const store = configureStore({
  reducer: {
    // auth: authReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
