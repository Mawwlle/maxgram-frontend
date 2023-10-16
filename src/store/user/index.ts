import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { UserStore, UserStoreInfo } from './types';

const initialState: UserStore = {};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        set: (state, payload: PayloadAction<UserStoreInfo>) => {
            state.user = payload.payload;
            state.isAuth = true;

            return state;
        },
        remove: (state) => {
            state.user = {};
            state.isAuth = false;

            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
        }
    }
})

export const { set, remove } = userSlice.actions;

export default userSlice.reducer;