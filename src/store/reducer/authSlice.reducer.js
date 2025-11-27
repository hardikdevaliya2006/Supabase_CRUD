import { createSlice } from "@reduxjs/toolkit"
import { checkAuth } from "./actions/auth/checkAuth.action"
import { logoutUser } from "./actions/auth/logoutUser.action"
import { loginUser } from "./actions/auth/loginUser.action"
import { signupUser } from "./actions/auth/signupUser.action"
import toast from "react-hot-toast"
import { updateFullName } from "./actions/auth/updateFullName.action"
import { forgotPassword } from "./actions/auth/forgotPassword.action"

const initialState = {
    user: null,
    session: null,
    loading: true,
    error: null,
    isAuthenticated: false,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        clearError: (state) => {
            state.error = null;
        },
        setAuthState: (state, action) => {
            const session = action.payload;
            state.session = session;
            state.user = session?.user || null;
            state.isAuthenticated = !!session;
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
                toast.success("Signup Successfull!");
            }).addCase(signupUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload
                toast.error(action.payload);
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
                toast.success("Login Successfull!");
            }).addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload
                toast.error(action.payload);
            })

            // Logout
            .addCase(logoutUser.fulfilled, (state) => {
                state.user = null;
                state.session = null;
                state.isAuthenticated = false;
                state.error = null;
            })

            // For Refresh Auth Session
            .addCase(checkAuth.pending, (state) => {
                state.loading = true;
            })
            .addCase(checkAuth.fulfilled, (state, action) => {
                state.loading = false;
                state.session = action.payload
                state.user = action.payload?.user || null
                state.isAuthenticated = !!action.payload
            }).addCase(checkAuth.rejected, (state) => {
                state.isAuthenticated = false;
                state.loading = false;
            })

            // Upadate Name
            .addCase(updateFullName.pending, (state) => {
                state.loading = true
            })
            .addCase(updateFullName.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                toast.success("Name updated successfully!");
            })
            .addCase(updateFullName.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                toast.error(action.payload);
            })

            // Reset Password
            .addCase(forgotPassword.pending, (state) => {
                state.loading = true;
            })
            .addCase(forgotPassword.fulfilled, (state) => {
                state.loading = false;
                state.error = null;
            })
            .addCase(forgotPassword.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                toast.error(action.payload);
            });
    }
})

export const { clearError, setAuthState } = authSlice.actions
export default authSlice.reducer