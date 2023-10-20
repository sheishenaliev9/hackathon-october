import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IdeasType } from "../../types/index.type";
import { getIdea, getIdeas } from "../actions";

interface IdeasState {
  ideas: IdeasType[];
  idea: IdeasType;
}

const initialState: IdeasState = {
  ideas: [],
  idea: {} as IdeasType
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
      console.error("Failed to get ideas:", action.payload.message);
    },
    [getIdea.fulfilled.type]: (state, action: PayloadAction<IdeasType>) => {
      state.idea = action.payload;
    }
  },
});

export default IdeasSlice.reducer;
