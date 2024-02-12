// selectors.js
import { createSelector } from 'reselect';

const selectDataState = (state) => state.crud; // Use the correct slice name

export const selectListItems = createSelector(
    selectDataState,
    (data) => data.listItems
);
