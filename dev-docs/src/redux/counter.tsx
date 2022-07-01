import { createSlice } from '@reduxjs/toolkit'
import listItemTagJson from '../componentJson/ListItemTagJson';

const initialState = { 
  listItemTagComponent: listItemTagJson,
};

export const counterSlice = createSlice({
  name: 'listItemTagComponent',
  initialState,
  reducers: {
    updateListTagComponent: (state: any, action) => {
      const newArray = state.listItemTagComponent;
      newArray[0].children = action.payload;
      state.listItemTagComponent = { ...state.listItemTagComponent, ...newArray };
    },
  },
})

// Action creators are generated for each case reducer function
export const { updateListTagComponent } = counterSlice.actions

export default counterSlice.reducer