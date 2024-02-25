import { createStore } from 'redux';
import rootReducer from '../reducers/reducers';

const initialState = {
    tasks: [],
};

const store = createStore(rootReducer, initialState);

export default store;
