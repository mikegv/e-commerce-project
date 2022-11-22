import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Order{
    id: number,
    total: number,
    items: CartItem[]
}
interface OrderState{
    orders: Order[]  //I think this is right 
}
const ordersInitialState: OrderState = {
    orders: []
}
const orderSlice = createSlice({
    name: 'orders',
    initialState: ordersInitialState,
    reducers: {
        addOrder(state, action: PayloadAction<{total: number, order: CartItem[]}>){
            let id = Math.floor(Math.random() * 5000);
            state.orders.push({id, total: action.payload.total, items: action.payload.order});
        },
        returnItem(state, action){

        }
    }
})


export interface CartItem {
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
            let item = state.items.find(item => item.id === id);
            if(!item){
                state.items.push({id, name, price, quantity: 1});
            }else{
                item!.quantity += 1;
            }
        },
        removeItem(state, action: PayloadAction<{id: number}>){
            let id = action.payload.id;
            let item = state.items.find(item => item.id === id);
            if(item === null){
                console.log('error, item not found')
                return
            }
            if(item!.quantity === 1){
                state.items = state.items.filter(item => item.id !== id)//remove item from cpy array
            }else{
                item!.quantity -= 1;
            }
        },
        clearCart(state){
            state.items = [];
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
    auth: authSlice.reducer,
    orders: orderSlice.reducer
}})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export const authActions = authSlice.actions;
export const cartActions = cartSlice.actions;
export const orderActions = orderSlice.actions;
export default store;