import { createAsyncThunk } from "@reduxjs/toolkit";
import supabase from "../../../../supabase/supabase";

export const fetchVault = createAsyncThunk(
    "crud/fetchVault",
    async (id, { rejectWithValue }) => {
        try {
            const { data, error, status } = await supabase
                .from("vault_items")
                .select("*")
                .eq("id", id)
                .maybeSingle(); 

            if (!data) {
                return rejectWithValue({
                    message: "Vault not found",
                    status: status
                });
            }

            if (error) throw error;

            return data;

        } catch (err) {
            return rejectWithValue({
                message: err.message || "Failed to fetch vault",
                status: err.status || 500
            });
        }
    }
);
