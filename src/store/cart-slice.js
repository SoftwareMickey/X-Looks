import { createSlice } from '@reduxjs/toolkit';

const CartSlice = createSlice({
    name:'cart',
    initialState: {cartItems: [], cartTotalQuantity: 0},
    reducers: {
        addToCartHandler: (state, action) => {
            const newItem = action.payload;

            const existingItem = state.cartItems.find((item) => item.id === newItem.id);
           
            if(existingItem){
                existingItem.price = newItem.price;
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price;
                state.cartTotalPrice += existingItem.totalPrice;
                state.cartTotalQuantity++;
            }else{
                state.cartItems.push({
                    id: newItem.id,
                    title: newItem.title,
                    price: newItem.price,
                    totalPrice: newItem.price,
                    pic: newItem.pic,
                    quantity: 1
                })

                state.cartTotalQuantity++;
            }

        },
        removeFromCartHandler: (state, action) => {

        }
    }
})

export default CartSlice