import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { videosAPI } from '../services/videosAPI';

const rootReducer = combineReducers({
  [videosAPI.reducerPath]: videosAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(videosAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;

export type AppStore = ReturnType<typeof setupStore>;

export type AppDispatch = AppStore['dispatch'];
