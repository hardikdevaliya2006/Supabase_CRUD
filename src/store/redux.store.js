import { configureStore } from "@reduxjs/toolkit"
import authSlice from "./reducer/authSlice.reducer.js"

const store = configureStore({
    reducer: {
        auth: authSlice
    }
})

export default store