import { createSlice } from "@reduxjs/toolkit";
import { createVault } from "../actions/createVault.action";
import toast from "react-hot-toast";
import { fetchVaults } from "../actions/fetchVaults.actions";
import { fetchVault } from "../actions/fetchVault.action";
import { updateVault } from "../actions/updateVault.action";

const initialState = {
    vaults: [],
    loading: false,
    error: null
}

const crudSlice = createSlice({
    name: "crud",
    initialState,
    extraReducers: (builder) => {
        builder
        

        //Update Vaults
            .addCase(updateVault.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateVault.fulfilled, (state, action) => {
                state.loading = false;
                state.vaults = action.payload;
                toast.success("Vault Updated");
            })
            .addCase(updateVault.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                toast.error(action.payload);
            })    
        //Fetch Vaults
            .addCase(fetchVault.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchVault.fulfilled, (state, action) => {
                state.loading = false;
                state.vaults = action.payload;
            })
            .addCase(fetchVault.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                toast.error(action.payload);
            })

            //Fetch Vaults
            .addCase(fetchVaults.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchVaults.fulfilled, (state, action) => {
                state.loading = false;
                state.vaults = action.payload;
            })
            .addCase(fetchVaults.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                toast.error(action.payload);
            })

            // Create vault
            .addCase(createVault.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createVault.fulfilled, (state, action) => {
                state.loading = false;
                state.vaults.push(action.payload);
                toast.success("Saved")
            })
            .addCase(createVault.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                toast.error(action.payload)
            });
    }
})

export default crudSlice.reducer