import axios from 'axios';
import {createAsyncThunk} from "@reduxjs/toolkit";

const API_URL = 'https://rento-system.onrender.com/auth';

interface RegisterData {
    email: string,
    username: string,
    password: string
}

interface LoginData {
    email?: string,
    username?: string,
    password: string
}

interface OtpData {
    email: string,
    otp: string
}

const registerUser = createAsyncThunk('auth/register', async (registerData: RegisterData, {rejectWithValue}) => {
    try {
        await axios.post(`${API_URL}/register`, registerData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error: unknown) {
        if (axios.isAxiosError(error) && error.response) {
            return rejectWithValue(error.response.data.message);
        } else if (axios.isAxiosError(error)) {
            return rejectWithValue(error.message);
        }
    }
});

const loginUser = createAsyncThunk('/auth/login', async (loginData: LoginData, {rejectWithValue}) => {
    try {
        const {data} = await axios.post(`${API_URL}/login`, loginData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        localStorage.setItem('user', JSON.stringify(data));
        localStorage.setItem('userToken', data.jwtToken);
        return data;
    } catch (error: unknown) {
        if (axios.isAxiosError(error) && error.response) {
            return rejectWithValue(error.response.data.message);
        } else if (axios.isAxiosError(error)) {
            return rejectWithValue(error.message);
        }
    }
});

const sendVerificationOtp = createAsyncThunk('/auth/emailVerificatonOtp', async (email: string, {rejectWithValue}) => {
    try {
        await axios.post(`${API_URL}/emailVerificatonOtp`, {}, {
            params: {
                email: email
            },
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error: unknown) {
        if (axios.isAxiosError(error) && error.response) {
            return rejectWithValue(error.response.data.message);
        } else if (axios.isAxiosError(error)) {
            return rejectWithValue(error.message);
        }
    }
});

const verifyOtp = createAsyncThunk('/auth/readOtpForEmailVerificatonOtp', async (otpData: OtpData, {rejectWithValue}) => {
    try {
        await axios.get(`${API_URL}/readOtpForEmailVerificatonOtp`, {
            params: otpData,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error: unknown) {
        if (axios.isAxiosError(error) && error.response) {
            return rejectWithValue(error.response.data.message);
        } else if (axios.isAxiosError(error)) {
            return rejectWithValue(error.message);
        }
    }
});

export {loginUser, registerUser, sendVerificationOtp, verifyOtp};