import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

import { createVault } from "../actions/createVault.action";
import { fetchVaults } from "../actions/fetchVaults.actions";
import { fetchVault } from "../actions/fetchVault.action";
import { updateVault } from "../actions/updateVault.action";
import { deleteVaults } from "../actions/deleteVault.action";

const initialState = {
    vaults: [],
    vault: null,
    loading: false,
    error: null,
};

// Reusable toast helper (avoids repeating logic)
const handleToast = (type, message) => {
    if (!message) return;
    type === "success" ? toast.success(message) : toast.error(message);
};

const crudSlice = createSlice({
    name: "vault",
    initialState,

    extraReducers: (builder) => {
        const setPending = (state) => {
            state.loading = true;
            state.error = null;
        };

        const setRejected = (state, action, showToast = true) => {
            state.loading = false;
            state.error = action.payload;
            if (showToast) handleToast("error", action.payload);
        };

        builder

            // Create Vault
            .addCase(createVault.pending, setPending)
            .addCase(createVault.fulfilled, (state, action) => {
                state.loading = false;
                state.vaults.push(action.payload);
                handleToast("success", "Vault created successfully");
            })
            .addCase(createVault.rejected, setRejected)

            // Fetch All Vaults
            .addCase(fetchVaults.pending, setPending)
            .addCase(fetchVaults.fulfilled, (state, action) => {
                state.loading = false;
                state.vaults = action.payload;
            })
            .addCase(fetchVaults.rejected, setRejected)

            // Fetch Single Vault
            .addCase(fetchVault.pending, setPending)
            .addCase(fetchVault.fulfilled, (state, action) => {
                state.loading = false;
                state.vault = action.payload;
            })
            .addCase(fetchVault.rejected, setRejected)

            // Update Vault
            .addCase(updateVault.pending, setPending)
            .addCase(updateVault.fulfilled, (state, action) => {
                state.loading = false;
                state.vaults = action.payload;
                handleToast("success", "Vault updated successfully");
            })
            .addCase(updateVault.rejected, setRejected)

            //Delete Vault
            .addCase(deleteVaults.pending, setPending)
            .addCase(deleteVaults.fulfilled, (state, action) => {
                state.loading = false;
                state.vaults = state.vaults.filter((v) => v.id !== action.payload);
                toast.success("Vault Deleted");
            })
            .addCase(deleteVaults.rejected, setRejected)
    },
});

export default crudSlice.reducer;