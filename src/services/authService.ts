import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {RootState} from "../store/store.ts";

const API_URL = "/api/user/";

interface Profile {
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
}

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
        prepareHeaders: (headers, {getState}) => {
            const token = (getState() as RootState).auth.userToken;
            if (token) {
                headers.set("authorization", `Bearer ${token}`);
            }
            return headers;
        }
    }),
    tagTypes: ["User"],
    endpoints: (builder) => ({
        getUserPersonal: builder.query({
            query: () => ({
                url: "me",
                method: "GET",
            }),
        }),
        updateUser: builder.mutation({
            query: (body: Profile) => ({
                url: "updateProfile",
                method: "POST",
                body,
            }),
        }),
        updateProfilePicture: builder.mutation({
                query: (body: File) => {
                const formData = new FormData();
                formData.append("file", body);
                return {
                    url: "profilePic",
                    method: "POST",
                    formData: true,
                    body: formData,
                }},
        }),
        deleteProfilePicture: builder.mutation({
           query: () => ({
                     url: "profilePic",
                     method: "POST",
           }),
        }),
    }),
});

export type {Profile};
export const {useGetUserPersonalQuery, useUpdateUserMutation, useDeleteProfilePictureMutation, useUpdateProfilePictureMutation} = authApi;