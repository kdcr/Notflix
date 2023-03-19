import { configureStore } from '@reduxjs/toolkit';
import showsReducer from './showsSlice';

export default configureStore({
  reducer: {
    shows: showsReducer,
  },
});
