import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
    loggedIn: false,
}

const authSlice = createSlice({
    name: 'auth' ,
    initialState,
    reducers: {
        login(state){
            state.loggedIn = true;
        }
    }
})

const store = configureStore({reducer: authSlice.reducer})

export type RootState = ReturnType<typeof store.getState>
export const authActions = authSlice.actions;
export default store;