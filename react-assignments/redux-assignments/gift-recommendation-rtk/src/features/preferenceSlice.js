// preferencesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    age: '',
    gender: '',
    interests: '',
};

const preferencesSlice = createSlice({
    name: 'preferences',
    initialState,
    reducers: {
        setAge: (state, action) => {
            state.age = action.payload;
        },
        setGender: (state, action) => {
            state.gender = action.payload;
        },
        setInterests: (state, action) => {
            state.interests = action.payload;
        },
    },
});

export const { setAge, setGender, setInterests } = preferencesSlice.actions;

export default preferencesSlice.reducer;
