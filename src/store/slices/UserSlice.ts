import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserType } from "../../types/index.type";
import { getUser, getUsers } from "..";

interface UserState {
  users: UserType[];
  user: UserType;
  error: string
}

const initialState: UserState = {
  users: [],
  user: {} as UserType,
  error: ""
};

const UserSlice = createSlice({
  name: "UserSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [getUsers.fulfilled.type]: (state, action: PayloadAction<UserType[]>) => {
      state.users = action.payload;
    },
    [getUsers.rejected.type]: (state, action: PayloadAction<Error>) => {
        state.error = action.payload.message;
    },
    [getUser.fulfilled.type]: (state, action: PayloadAction<UserType>) => {
        state.user = action.payload;
    }
  },
});

export default UserSlice.reducer;
