import { createSlice } from "@reduxjs/toolkit";
// import Cart from "../../components/Cart";


const initialState = {
    cartItems: [],
    amount: 0,
    total: 0,
    isSuccess: false,
    isError: false,
    isLoading: true
};

// export const getCart = createAsyncThunk('cart/getCart', () => {
//     return fetch(url)
//     .then((resp) => resp.json())
//     .catch((err) => console.log(err));
// });

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = [];
            // return { cartItems: [] }; this is an alt option, if used then comment out the one above
        },
        createCart: (state, action) => {
            const cart = action.payload
            state.cartItems.push(cart)
        },
        removeItem: (state, action) => {
            const itemId = action.payload
            state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
        },
        increase: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) => item.id === payload.id);
            cartItem.amount = cartItem.amount + 1;
        },
        decrease: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) => item.id === payload.id);
            cartItem.amount = cartItem.amount - 1;
        },
        calculateTotals: (state) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach((item) => {
                amount += item.amount;
                total += item.amount * item.price;
            });
            state.amount = amount;
            state.total = total;
        },
    },
    // extraReducers:{
    //     [getCartItems.pending]: (state) => {
    //         state.isLoading = true;
    //       },
    //       [getCartItems.fulfilled]: (state, action) => {
    //         console.log(action);
    //         state.isLoading = false;
    //         state.cartItems = action.payload;
    //       },
    //       [getCartItems.rejected]: (state) => {
    //         state.isLoading = false;
    //       },
    // }
});

console.log(cartSlice);

export const { clearCart, removeItem, increase, decrease, calculateTotals, createCart } = cartSlice.actions;

export default cartSlice.reducer;