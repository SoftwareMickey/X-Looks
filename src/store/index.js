import {configureStore} from '@reduxjs/toolkit';
import HiderSlicer from './hider';
import AuthSlice from './Logged';
import CartSlice from './cart-slice';

export const HiderActions = HiderSlicer.actions;
export const AuthActions = AuthSlice.actions;
export const CartActions = CartSlice.actions;

const store = configureStore(
    {reducer : {
        hide: HiderSlicer.reducer,
        auth: AuthSlice.reducer,
        cart: CartSlice.reducer
    }}
)

export default store