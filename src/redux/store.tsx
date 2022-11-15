import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {loggedIn: false}

const authSlice = createSlice({
    name: 'auth' ,
    initialState,
    reducers: {
    }
})

const store = configureStore({reducer: authSlice.reducer})

export type RootState = ReturnType<typeof store.getState>

export default store;