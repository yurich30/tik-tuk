import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { videosApi } from '../services/videosApi';

const rootReducer = combineReducers({
  [videosApi.reducerPath]: videosApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(videosApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;

export type AppStore = ReturnType<typeof setupStore>;

export type AppDispatch = AppStore['dispatch'];
