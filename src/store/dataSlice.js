import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getDataRedux = createAsyncThunk(
    "data/getDataRedux", async (url) => {
        try {
            const response = await axios.get(`${url}/data`);
            return response.data;
        }
        catch (error) {
            console.error(error);
        }
    }
)
//we will have initialstate object with data but right now it's undefined
//we can't just leave it empty
const dataSlice = createSlice({
    name: 'data',
    initialState: {
        data: undefined,
        isLoading: false,
        whatever: "Whatever",
    },
    reducers: {
        //internal application logic goes here
    },
    extraReducers: (builder) => {
        builder.addCase(
            getDataRedux.fulfilled, (state, action) => {
                state.data = action.payload;
            },
        );
    },
});
//fulfilled means it has received a 200 or 404 statuscode not that it got the
export default dataSlice.reducer;