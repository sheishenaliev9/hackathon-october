import { createSlice } from "@reduxjs/toolkit";
import { UserType } from "../../types/index.type";

interface UserState {
    user: UserType;
}

const initialState: UserState = {
    user: {} as UserType
}


const UserSlice = createSlice({
    name: "UserSlice",
    initialState,
    reducers: {},
    extraReducers: {},
});

export default UserSlice.reducer;