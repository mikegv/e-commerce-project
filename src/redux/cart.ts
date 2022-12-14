import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface CartItem {
    itemId: number,
    name: string,
    desc: string,
    price: number,
    quantity: number
}

interface CartState {
    items: CartItem[],
    changed: boolean
}

const cartInitialState: CartState = {
    items: [],
    changed: false
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: cartInitialState,
    reducers: {
        addItem(state, action: PayloadAction<{itemId: number, name: string, desc: string, price: number}>){//add a new item or increase quantity of item in cart
            state.changed = true;
            let name = action.payload.name;
            let itemId = action.payload.itemId;
            let desc = action.payload.desc;
            let price = action.payload.price;
            let item = state.items.find(item => item.itemId === itemId);
            if(!item){
                state.items.push({itemId, name, desc, price, quantity: 1});
            }else{
                item!.quantity += 1;
            }
        },
        changeQuantity(state, action: PayloadAction<{itemId: number, quantity: number}>){//change one items quantity
            let itemId = action.payload.itemId;
            let item = state.items.find(item => item.itemId === itemId);
            state.changed = true;
            if(item === null){
                console.log('error, item not found')
                return
            }
            item!.quantity = action.payload.quantity;
        },
        removeItemCompletely(state, action: PayloadAction<{itemId: number}>){//remove all occurances of item from cart
            state.changed = true;
            let itemId = action.payload.itemId;
            let item = state.items.find(item => item.itemId === itemId);
            if(item === null){
                console.log('error, item not found')
                return
            }
            state.items = state.items.filter(item => item.itemId !== itemId)//remove item from cpy array
            
        },
        clearCart(state){ //after completing order
            state.items = [];
            state.changed = true;
        },
        replaceCart(state, action: PayloadAction<CartItem[]>){ //on login or first visit to page while logged in to retrieve existing cart from db
            state.items = action.payload
        },
        resetCart(state){ //for logging out
            state = cartInitialState;
        }
    }
})

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;