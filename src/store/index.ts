import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user';
import modalReducer from './modal';

export const store = configureStore({
    devTools: true,
    reducer: {
        user: userReducer,
        modal: modalReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;