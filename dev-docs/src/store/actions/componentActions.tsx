import { createAction } from '@reduxjs/toolkit';

export const updateListTagComponent = createAction('updateListTagComponent', function prepare(listItemTagJson: any) {
    return {
      payload: {
        listItemTagJson,
      },
    }
  })