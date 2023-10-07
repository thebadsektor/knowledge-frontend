import { createSlice } from '@reduxjs/toolkit';
import { RootStateType } from 'app/store/types';

export type AppRootStateType = RootStateType<stateSlice>;

/**
 * The chat panel state slice.
 */
const stateSlice = createSlice({
	name: 'chatPanel/state',
	initialState: false,
	reducers: {
		toggleChatPanel: (state) => !state,
		openChatPanel: () => true,
		closeChatPanel: () => false
	},
	extraReducers: {}
});

export const { toggleChatPanel, openChatPanel, closeChatPanel } = stateSlice.actions;

export const selectChatPanelState = (state: AppRootStateType) => state.chatPanel.state;

export type stateSlice = typeof stateSlice;

export default stateSlice;
