import { createSlice } from "@reduxjs/toolkit";

let cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
            console.log("Item added to cart:", action.payload);
        },
        // removeItem: (state, action) => {
        //     state.items = state.items.filter(item => item.id !== action.payload.id);
        //     console.log("Item removed from cart:", action.payload);
        // }
        removeItem: (state, action) => {
            const index = state.items.findIndex(
                item => item.id === action.payload.id
            );

            if (index !== -1) {
                state.items.splice(index, 1);
            }
        }
    }
})

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;