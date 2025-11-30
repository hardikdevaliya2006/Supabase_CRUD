import { configureStore } from "@reduxjs/toolkit"
import authSlice from "./feature/auth/reducers/authSlice.reducer.js"

const store = configureStore({
    reducer: {
        auth: authSlice
    }
})

export default store