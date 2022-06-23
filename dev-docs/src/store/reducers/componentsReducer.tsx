import { createReducer } from '@reduxjs/toolkit';

import { showComponent } from '../actions/componentActions';
import emptyStateJson from '../../componentJson/EmptyStateJson';

const initialState = { 
  books: [],
  emptyStateComponent: emptyStateJson,
};

const booksReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(showComponent, (state, action:any) => {
      state.emptyStateComponent.push(action.payload);
    })
});

export default booksReducer;