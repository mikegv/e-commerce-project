import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Orders from "../components/orders/Orders";
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
        returnItem(state, action: PayloadAction<{orderId: number, quantities: {id: number, quantity: number}[]}>){
            let order: Order = state.orders[0];
            for(let i = 0; i < state.orders.length; i++ ){
                if(state.orders[i].id === action.payload.orderId){
                    order = {...state.orders[i]}
                    break;
                }
            }            
            for(let i = 0; i < order.items.length; i++){
                action.payload.quantities.forEach(item => {
                    if(item.id === order.items[i].id){
                        if(item.quantity === 0){
                            order.items.splice(i,1)
                        }else{
                        order.items[i].quantity = item.quantity;
                        }
                    }
                })
            }
        }
    }
})

export const orderActions = orderSlice.actions;
export default orderSlice.reducer;
