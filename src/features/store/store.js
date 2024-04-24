import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../cart/cartSlice';
import menuReducer from '../menu/menuSlice';
import fanReducer from '../fan/fanSlice';
import customerSlice from '../customer-purchase/customerSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    menu: menuReducer,
    fan: fanReducer,
    customer: customerSlice
  }
});
