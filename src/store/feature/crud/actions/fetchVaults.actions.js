import { createAsyncThunk } from "@reduxjs/toolkit";
import suapabase from "../../../../supabase/supabase";

export const fetchVaults = createAsyncThunk(
    "crud/fetchValuts",
    async ({ rejectWithValue }) => {
        try {
            const { data, error } = await suapabase.from("vault_items").select("*")
            if (error) throw error;
            return data
        } catch (error) {
            return rejectWithValue(error.message || "Failed to fetch");
        }
    }
)