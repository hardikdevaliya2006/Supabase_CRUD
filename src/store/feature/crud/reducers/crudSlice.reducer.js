import { createSlice } from "@reduxjs/toolkit";
import { createVault } from "../actions/createVault.action";
import toast from "react-hot-toast";

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