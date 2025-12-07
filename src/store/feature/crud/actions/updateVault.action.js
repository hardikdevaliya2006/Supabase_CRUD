import { createAsyncThunk } from "@reduxjs/toolkit";
import suapabase from "../../../../supabase/supabase";

export const updateVault = createAsyncThunk(

    "crud/updateVault",
    async ({ id, data }, { rejectWithValue }) => {
        try {
            const { data: updated, error } = await suapabase.
                from("vault_items").
                update(data).
                eq("id", id).
                select().
                single()
            if (error) throw error;
            return updated;
        } catch (error) {
            return rejectWithValue(error || "Faild To Update");
        }
    }
)