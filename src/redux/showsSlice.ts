/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

interface showsState {
  selected: number;
}

interface selectAction {
  id: number;
}

const showsSlice = createSlice({
  name: 'shows',
  initialState: { selected: 0 },
  reducers: {
    selectShow(state: showsState, action: { payload: selectAction }) {
      state.selected = action.payload.id;
    },
  },
});

export const { selectShow } = showsSlice.actions;
export default showsSlice.reducer;
