import { createReducer } from '@reduxjs/toolkit';

import { 
  showEmptyStateComponent,
  showListItemTagComponent,
} from '../actions/componentActions';
import emptyStateJson from '../../componentJson/EmptyStateJson';
import listItemTagJson from '../../componentJson/ListItemTagJson';

const initialState = { 
  books: [],
  emptyStateComponent: emptyStateJson,
  listItemTagComponent: listItemTagJson,
};

const booksReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(showEmptyStateComponent, (state, action:any) => {
      state.emptyStateComponent.push(action.payload);
    })
    .addCase(showListItemTagComponent, (state, action:any) => {
      state.listItemTagComponent.push(action.payload);
    })
});

export default booksReducer;