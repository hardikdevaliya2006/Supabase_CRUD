import { createAsyncThunk } from "@reduxjs/toolkit";
import { brandApi } from "../../../../api/brandApi";

export const searchBrands = createAsyncThunk(
    "brand/searchBrands",
    async (query, { rejectWithValue }) => {
        try {
            const response = await brandApi.get(`/search/${query}`)
            console.log(response)
            return response.data || []
        } catch (error) {
            return rejectWithValue(
                error?.response?.data?.message || "Brand not found"
            );
        }
    }
)