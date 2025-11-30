import { createAsyncThunk } from "@reduxjs/toolkit";
import suapabase from "../../../../supabase/supabase";

export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const { data, error } = await suapabase.auth.signInWithPassword({ email, password })
            if (error) return rejectWithValue(error.message);
            console.log("Login Data:", data)
            return data;
        } catch (error) {
            console.error(error)
            return rejectWithValue(error)
        }
    }
)