import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
    id: number,
    name: string,
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
        addItem(state, action: PayloadAction<{id: number, name: string, price: number}>){
            let name = action.payload.name;
            let id = action.payload.id;
            let price = action.payload.price;
            state.items.push({id, name, price, quantity: 1});
        },
        removeItem(state, action){
            console.log(action)
        }
    }
})

const authInitialState = {
    loggedIn: false,
}

const authSlice = createSlice({
    name: 'auth' ,
    initialState: authInitialState,
    reducers: {
        login(state){
            state.loggedIn = true;
        },
        logout(state){
            state.loggedIn = false;
        }
    }
})

const store = configureStore({reducer: {
    cart: cartSlice.reducer, 
    auth: authSlice.reducer
}})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export const authActions = authSlice.actions;
export const cartActions = cartSlice.actions;
export default store;