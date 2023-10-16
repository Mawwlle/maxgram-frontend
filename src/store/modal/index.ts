import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ModalStore } from './types';

const initialState: ModalStore = {};

export const userSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state, payload: PayloadAction<string>) => {
            state.type = payload.payload;
            state.isShow = true;

            return state;
        },
        closeModal: () => {
            return {};
        }
    }
})

export const { openModal, closeModal } = userSlice.actions;

export default userSlice.reducer;