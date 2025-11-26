import { createAsyncThunk } from "@reduxjs/toolkit";
import suapabase from "../../../supabase/supabase";

export const signupUser = createAsyncThunk(
    "auth/signupUser",
    async ({ fullName, email, password }, { rejectWithValue }) => {
        try {
            const { data, error } = await suapabase.auth.signUp({
                email, password, options: {
                    data: {
                        fullName
                    }
                }
            })
            if (error) return rejectWithValue(error.message);
            console.log("Signup Data:", data)
            return data;
        } catch (error) {
            console.error(error)
            return rejectWithValue(error)
        }
    }
)