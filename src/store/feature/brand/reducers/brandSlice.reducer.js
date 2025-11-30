import { createSlice } from "@reduxjs/toolkit";
import { searchBrands } from "../actions/searchBrands.action";

const initialState = {
    loading: false,
    error: null,
    suggestions: [],
    selectedBrand: null,
}

const brandSlice = createSlice({
    name: "brand",
    initialState,
    reducers: {
        selectBrand: (state, action) => {
            state.selectedBrand = action.payload
            state.suggestions = [];
            state.error = null
        },
        clearBrand: (state) => {
            state.selectedBrand = null
            state.suggestions = []
            state.error = null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(searchBrands.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(searchBrands.fulfilled, (state, action) => {
                state.loading = false;
                state.suggestions = action.payload;
            })
            .addCase(searchBrands.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.suggestions = [];
            });
    }

})

export const { selectBrand, clearBrand } = brandSlice.actions
export default brandSlice.reducer