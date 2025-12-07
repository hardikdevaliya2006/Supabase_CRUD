import { createAsyncThunk } from "@reduxjs/toolkit";
import suapabase from "../../../../supabase/supabase";

export const deleteVaults = createAsyncThunk(
    "vault/delete",
    async (id, { rejectWithValue }) => {
        try {
            const { error } = await suapabase
                .from("vault_items")
                .delete()
                .eq("id", id);

            if (error) throw error;
            return id;
        } catch (error) {
            return rejectWithValue(error.message || "Failed to delete vault");
        }
    }
);
