import { configureStore } from "@reduxjs/toolkit";
import IdeasSlice from "./slices/IdeasSlice";
import UserSlice from "./slices/UserSlice";


export const store = configureStore({
    reducer: {
        ideas: IdeasSlice,
        users: UserSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;