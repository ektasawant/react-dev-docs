import { configureStore } from '@reduxjs/toolkit';
import componentsReducer from './reducers/componentsReducer';

const store = configureStore({
  reducer: { 
    books: componentsReducer,
    emptyStateComponent: componentsReducer,
  },
});

export default store;