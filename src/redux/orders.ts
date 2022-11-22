import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from './cart'

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

export const orderActions = orderSlice.actions;
export default orderSlice.reducer;
