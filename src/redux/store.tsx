import { configureStore, createSlice } from "@reduxjs/toolkit";



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

const store = configureStore({reducer: authSlice.reducer})

export type RootState = ReturnType<typeof store.getState>
export const authActions = authSlice.actions;
export default store;