import { configureStore, createSlice } from "@reduxjs/toolkit";
import orderReducer from './orders'
import cartReducer from './cart'
import wishListReducer from './wish'


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
    cart: cartReducer, 
    auth: authSlice.reducer,
    orders: orderReducer,
    wishList: wishListReducer
}})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export const authActions = authSlice.actions;
export default store;