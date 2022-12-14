import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface WishItem {
    itemId: number,
    name: string,
    desc: string,
    price: number,
}

interface WishState {
    items: WishItem[]
}

const wishInitialState: WishState = {
    items: []
}

const wishListSlice = createSlice({
    name: 'wishList',
    initialState: wishInitialState,
    reducers: {
        addItem(state, action: PayloadAction<{itemId: number, name: string, desc: string, price: number}>){
            let name = action.payload.name;
            let itemId = action.payload.itemId;
            let desc = action.payload.desc;
            let price = action.payload.price;
            let item = state.items.find(item => item.itemId === itemId);
            if(!item){
                state.items.push({itemId, name, desc, price});
            }
        },
        removeItem(state, action: PayloadAction<{itemId: number}>){
            let itemId = action.payload.itemId;
            let item = state.items.find(item => item.itemId === itemId);
            if(item === null){
                console.log('error, item not found')
                return
            }
            state.items = state.items.filter(item => item.itemId !== itemId)//remove item from cpy array
        },
        // clearCart(state){
        //     state.items = [];
        // }
    }
})

export const wishListActions = wishListSlice.actions;
export default wishListSlice.reducer;