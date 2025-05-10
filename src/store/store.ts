import {configureStore} from "@reduxjs/toolkit";
import authReducer from "../features/authSlice.ts";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {authApi} from "../services/authService.ts";

const store = configureStore({
    reducer: {
        auth: authReducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(authApi.middleware);
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;