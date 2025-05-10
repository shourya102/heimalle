import {createSlice} from "@reduxjs/toolkit";
import {loginUser, registerUser, sendVerificationOtp, verifyOtp} from "../actions/authActions.ts";

const userToken = localStorage.getItem('userToken')
    ? localStorage.getItem('userToken')
    : null;

interface UserInfo {
    firstName: string;
    lastName: string;
    middleName?: string;
    username: string;
    email: string;
    displayName: string;
    phoneNo: string;
    gender: string;
    addressLine1: string;
    addressLine2?: string;
    landmark?: string;
    city: string;
    state: string;
    pinCode: string;
    country: string;
    aboutMe: string;
    x?: string;
    instagram?: string;
    faceBook?: string;
    languages: string[];
    pic: string;
}

interface AuthState {
    loading: boolean,
    loadingSendOtp: boolean,
    loadingVerifyOtp: boolean,
    userInfo: UserInfo | null,
    userToken: string | null,
    error: string | null | undefined,
    success: boolean
}

const initialState: AuthState = {
    loading: false,
    loadingSendOtp: false,
    loadingVerifyOtp: false,
    userInfo: null,
    userToken,
    error: null,
    success: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCredentials: (state, payload) => {
            localStorage.setItem('userInfo', JSON.stringify(payload.payload.userInfo));
            state.userInfo = payload.payload.userInfo;
        },
        logout: (state) => {
            localStorage.removeItem('user');
            localStorage.removeItem('userInfo');
            localStorage.removeItem('userToken');
            state.loading = false;
            state.userInfo = null;
            state.userToken = null;
            state.error = null;
            state.loadingSendOtp = false;
            state.loadingVerifyOtp = false;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state) => {
                state.loading = false;
                state.success = true;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.userToken = action.payload.jwtToken;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(sendVerificationOtp.pending, (state) => {
                state.loadingSendOtp = true;
                state.error = null;
            })
            .addCase(sendVerificationOtp.fulfilled, (state) => {
                state.loadingSendOtp = false;
                state.success = true;
            })
            .addCase(sendVerificationOtp.rejected, (state, action) => {
                state.loadingSendOtp = false;
                state.error = action.error.message;
            })
            .addCase(verifyOtp.pending, (state) => {
                state.loadingVerifyOtp = true;
                state.error = null;
            })
            .addCase(verifyOtp.fulfilled, (state) => {
                state.loadingVerifyOtp = false;
                state.success = true;
            })
            .addCase(verifyOtp.rejected, (state, action) => {
                state.loadingVerifyOtp = false;
                state.error = action.error.message;
            });

    }
});

export const {setCredentials, logout} = authSlice.actions;
export default authSlice.reducer;