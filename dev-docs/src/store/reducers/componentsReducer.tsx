import { createReducer } from '@reduxjs/toolkit';

import { 
  updateListTagComponent,
} from '../actions/componentActions';

import listItemTagJson from '../../componentJson/ListItemTagJson';

const initialState = { 
  listItemTagComponent: listItemTagJson,
};

const componentReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(updateListTagComponent, (state, action:any) => {
      const newArray = state.listItemTagComponent;
      newArray[0].children = action.payload.listItemTagJson;
      state.listItemTagComponent = { ...state.listItemTagComponent, ...newArray };
    })
});

export default componentReducer;