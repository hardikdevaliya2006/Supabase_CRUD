import { createAsyncThunk } from "@reduxjs/toolkit";
import suapabase from "../../../../supabase/supabase";

export const fetchVault = createAsyncThunk(
    "crud/fetchVault",
    async (id, { rejectWithValue }) => {
        try {
            const { data, error } = await suapabase
                .from("vault_items")
                .select("*")
                .eq("id", id)
                .single();

            if (error) throw error;
            console.log(data)
            return data;
        } catch (error) {
            return rejectWithValue(error || "Failed to fetch Vaults");
        }
    }
)