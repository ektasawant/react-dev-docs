import { configureStore } from '@reduxjs/toolkit';
import componentsReducer from './reducers/componentsReducer';

const store = configureStore({
  reducer: {
    listItemTagComponent: componentsReducer,
  },
});

export default store;