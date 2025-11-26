import { createAsyncThunk } from "@reduxjs/toolkit";
import suapabase from "../../../supabase/supabase";

export const checkAuth = createAsyncThunk(
    "auth/checkAuth",
    async (__dirname, { rejectWithValue }) => {
        try {
            const { data, error } = await suapabase.auth.getSession()
            if (error) return rejectWithValue(error.message);
            return data.session || null;
        } catch (error) {
            console.error(error)
            return rejectWithValue(error)
        }
    }
)