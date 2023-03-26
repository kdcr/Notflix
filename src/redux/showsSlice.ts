/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import MediaFormat from '../model/enums/MediaFormat';

interface showsState {
  selected: number;
  selectedMediaFormat: MediaFormat;
}

interface selectAction {
  id: number;
}

interface selectMediaFormatAction {
  format: MediaFormat;
}

const showsSlice = createSlice({
  name: 'shows',
  initialState: { selected: 0, selectedMediaFormat: MediaFormat.Movie },
  reducers: {
    selectShow(state: showsState, action: { payload: selectAction }) {
      state.selected = action.payload.id;
    },
    selectMediaFormat(state: showsState, action: { payload: selectMediaFormatAction }) {
      state.selectedMediaFormat = action.payload.format;
    },
  },
});

export const { selectShow, selectMediaFormat } = showsSlice.actions;
export default showsSlice.reducer;
