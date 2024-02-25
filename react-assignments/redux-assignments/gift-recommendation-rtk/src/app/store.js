import { configureStore } from '@reduxjs/toolkit';
import preferencesReducer from '../features/preferenceSlice';
import giftsReducer, { fetchRecommendations } from '../features/giftsSlice';

const store = configureStore({
  reducer: {
    preferences: preferencesReducer,
    gifts: giftsReducer,
  },
});

store.dispatch(fetchRecommendations()); // Dispatch the action when the app starts

export default store;
