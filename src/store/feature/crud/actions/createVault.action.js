import { createAsyncThunk } from "@reduxjs/toolkit";
import suapabase from "../../../../supabase/supabase";

export const createVault = createAsyncThunk(
    "crud/createVault",
    async (form, { rejectWithValue }) => {
        try {
            const { data, error } = await suapabase.from("vault_items").insert(form).select()
            if (error) {
                return rejectWithValue(error.message);
            }
            return data[0];
        } catch (error) {
            return rejectWithValue(error || "Something went wrong");
        }
    }
) 