import { configureStore } from "@reduxjs/toolkit"
import authSlice from "./feature/auth/reducers/authSlice.reducer.js"
import brandSlice from "./feature/brand/reducers/brandSlice.reducer.js"

const store = configureStore({
    reducer: {
        auth: authSlice,
        brand: brandSlice
    }
})

export default store