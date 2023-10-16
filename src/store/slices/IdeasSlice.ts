import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IdeasType } from "../../types/index.type";
import { getIdeas } from "../actions";

interface IdeasState {
  ideas: IdeasType[];
}

const initialState: IdeasState = {
  ideas: [],
};

const IdeasSlice = createSlice({
  name: "IdeasSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [getIdeas.fulfilled.type]: (state, action: PayloadAction<IdeasType[]>) => {
      state.ideas = action.payload;
    },
    [getIdeas.rejected.type]: (state, action: PayloadAction<Error>) => {
      console.error("Failed to get posts:", action.payload.message);
    },
  },
});

export default IdeasSlice.reducer;