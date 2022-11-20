import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState, InitReducerStateParams } from "./type";

export const init = createSlice({
    name: "init",
    initialState,
    reducers: {
        setInitList: (
            state: InitReducerStateParams,
            action: PayloadAction<InitReducerStateParams['initList']>
        ) => {
            state.initList = action.payload;
        },
    },
});

export const { setInitList } = init.actions;

export default init.reducer;