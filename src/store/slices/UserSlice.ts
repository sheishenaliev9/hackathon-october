import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserType } from "../../types/index.type";
import { getUser, getUsers, loginUser } from "..";

interface UserState {
  users: UserType[];
  user: UserType;
  error: string;
  isLoggedIn: boolean;
}

const initialState: UserState = {
  users: [],
  user: {} as UserType,
  error: "",
  isLoggedIn: false,
};

const UserSlice = createSlice({
  name: "UserSlice",
  initialState,
  reducers: {
    logOut: (state) => {
      state.user = {} as UserType;
      state.isLoggedIn = false;
    },
  },
  extraReducers: {
    [getUsers.fulfilled.type]: (state, action: PayloadAction<UserType[]>) => {
      state.users = action.payload;
    },
    [getUsers.rejected.type]: (state, action: PayloadAction<Error>) => {
      state.error = action.payload.message;
    },
    [getUser.fulfilled.type]: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    [loginUser.fulfilled.type]: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload;
      state.isLoggedIn = true; 
    },
  },
});

export default UserSlice.reducer;
export const { logOut } = UserSlice.actions;
