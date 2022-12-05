import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface CartItem {
    id: number,
    name: string,
    desc: string,
    price: number,
    quantity: number
}

interface CartState {
    items: CartItem[]
}

const cartInitialState: CartState = {
    items: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: cartInitialState,
    reducers: {
        addItem(state, action: PayloadAction<{id: number, name: string, desc: string, price: number}>){
            let name = action.payload.name;
            let id = action.payload.id;
            let desc = action.payload.desc;
            let price = action.payload.price;
            let item = state.items.find(item => item.id === id);
            if(!item){
                state.items.push({id, name, desc, price, quantity: 1});
            }else{
                item!.quantity += 1;
            }
        },
        changeQuantity(state, action: PayloadAction<{id: number, quantity: number}>){
            let id = action.payload.id;
            let item = state.items.find(item => item.id === id);
            if(item === null){
                console.log('error, item not found')
                return
            }
            item!.quantity = action.payload.quantity;
        },
        removeItemCompletely(state, action: PayloadAction<{id: number}>){
            let id = action.payload.id;
            let item = state.items.find(item => item.id === id);
            if(item === null){
                console.log('error, item not found')
                return
            }
            state.items = state.items.filter(item => item.id !== id)//remove item from cpy array
            
        },
        clearCart(state){
            state.items = [];
        }
    }
})

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;