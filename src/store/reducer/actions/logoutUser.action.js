import { createAsyncThunk } from "@reduxjs/toolkit";
import suapabase from "../../../supabase/supabase";

export const logoutUser = createAsyncThunk(
    "auth/logoutUser",
    async () => {
        await suapabase.auth.signOut()
        return null
    }
)