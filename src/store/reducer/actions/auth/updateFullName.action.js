import { createAsyncThunk } from "@reduxjs/toolkit";
import suapabase from "../../../../supabase/supabase";

export const updateFullName = createAsyncThunk(
    "auth/updateFullName",
    async (fullName, { rejectWithValue }) => {
        try {
            const { data: auth } = await suapabase.auth.getUser();
            const userId = auth?.user?.id
            if (!userId) return rejectWithValue("User not logged in!");

            const { data, error } = await suapabase.auth.updateUser({
                data: { fullName }
            })
            if (error) return rejectWithValue(error.message);

            return data?.user
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)