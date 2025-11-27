import { createAsyncThunk } from "@reduxjs/toolkit";
import suapabase from "../../../../supabase/supabase";

export const forgotPassword = createAsyncThunk(
    "auth/forgotPassword",
    async (email, { rejectWithValue }) => {
        try {
            const redirectTo = `${import.meta.env.VITE_APP_URL}/reset-password`
            const { error } = await suapabase.auth.resetPasswordForEmail(email, {
                redirectTo
            })

            if (error) return rejectWithValue(error.message);

            return "Password reset email sent";
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)