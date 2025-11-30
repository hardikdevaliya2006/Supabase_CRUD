import { createAsyncThunk } from "@reduxjs/toolkit";
import suapabase from "../../../../supabase/supabase";
import toast from "react-hot-toast";

export const logoutUser = createAsyncThunk(
    "auth/logoutUser",
    async () => {
        await suapabase.auth.signOut()
        toast.success("Logout Successfull")
        return null
    }
)