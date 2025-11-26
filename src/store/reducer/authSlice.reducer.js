import { createSlice } from "@reduxjs/toolkit"
import { checkAuth } from "./actions/checkAuth.action"
import { logoutUser } from "./actions/logoutUser.action"
import { loginUser } from "./actions/loginUser.action"
import { signupUser } from "./actions/signupUser.action"

const initialState = {
    user: null,
    session: null,
    loading: false,
    error: null,
    isAuthenticated: false
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        clearError: (state) => {
            state.error = null
        },
        setAuthState: (state, action) => {
            const session = action.payload
            state.session = session
            state.user = session?.user || null
            state.isAuthenticated = !!session
        }
    },
    extraReducers: (builder) => {
        builder

            // Signup
            .addCase(signupUser.pending, (state) => {
                state.loading = true
            }).addCase(signupUser.fulfilled, (state, action) => {
                state.loading = false
                state.user = action.payload?.user
                state.session = action.payload?.session
                state.isAuthenticated = !!action.payload?.session
                state.error = null
            }).addCase(signupUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload
            })

            // Login
            .addCase(loginUser.pending, (state) => {
                state.loading = true
            }).addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false
                state.user = action.payload?.user
                state.session = action.payload?.session
                state.isAuthenticated = true
                state.error = null
            }).addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload
            })

            // Logout
            .addCase(logoutUser.fulfilled, (state) => {
                state.user = null;
                state.session = null;
                state.isAuthenticated = false;
                state.error = null;
            })

            // For Refresh Auth Session
            .addCase(checkAuth.fulfilled, (state, action) => {
                state.session = action.payload
                state.user = action.payload?.user || null
                state.isAuthenticated = !!action.payload
            }).addCase(checkAuth.rejected, (state) => {
                state.isAuthenticated = false;
            });
    }
})

export const { clearError, setAuthState } = authSlice.actions
export default authSlice.reducer