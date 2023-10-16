import { configureStore } from "@reduxjs/toolkit";
import IdeasSlice from "./slices/IdeasSlice";


export const store = configureStore({
    reducer: {
        ideas: IdeasSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;