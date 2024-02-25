import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    recommendations: [],
    status: 'idle',
    error: null,
};

export const fetchRecommendations = createAsyncThunk('gifts/fetchRecommendations', async (preferences) => {
    try {
        const response = await axios.post('YOUR_OPENAI_API_ENDPOINT', preferences, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer YOUR_OPENAI_API_KEY',
            },
        });
        return response.data.recommendations;
    } catch (error) {
        throw error.response ?.data || 'An error occurred';
    }
});

const giftsSlice = createSlice({
    name: 'gifts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRecommendations.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchRecommendations.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.recommendations = action.payload;
            })
            .addCase(fetchRecommendations.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default giftsSlice.reducer;
