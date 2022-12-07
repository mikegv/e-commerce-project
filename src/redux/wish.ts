import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface WishItem {
    id: number,
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
        addItem(state, action: PayloadAction<{id: number, name: string, desc: string, price: number}>){
            let name = action.payload.name;
            let id = action.payload.id;
            let desc = action.payload.desc;
            let price = action.payload.price;
            let item = state.items.find(item => item.id === id);
            if(!item){
                state.items.push({id, name, desc, price});
            }
        },
        removeItem(state, action: PayloadAction<{id: number}>){
            let id = action.payload.id;
            let item = state.items.find(item => item.id === id);
            if(item === null){
                console.log('error, item not found')
                return
            }
            state.items = state.items.filter(item => item.id !== id)//remove item from cpy array
        },
        // clearCart(state){
        //     state.items = [];
        // }
    }
})

export const wishListActions = wishListSlice.actions;
export default wishListSlice.reducer;