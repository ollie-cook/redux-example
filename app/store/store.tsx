import { createSlice, configureStore } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

export interface ColourState {
	colour: string;
}

const initialState: ColourState = {
	colour: "#b3d584"
};

export const colourSlice = createSlice({
	name: "colour",
	initialState,
  reducers: {
    setColour: (state, action: PayloadAction<string>) => {
      state.colour = action.payload;
    }
  }
});

export const createStore = () =>
	configureStore({
		reducer: {
			colour: colourSlice.reducer,
		},
	});

export const { setColour } = colourSlice.actions; 

export type StoreType = ReturnType<typeof createStore>;
export type RootState = ReturnType<StoreType["getState"]>;
export type AppDispatch = StoreType["dispatch"];

export const useColour = () => useSelector((state: RootState) => state.colour.colour);