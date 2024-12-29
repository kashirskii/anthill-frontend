import { AxiosError, AxiosResponse, isAxiosError } from "axios";
import { AuthError, AuthSuccess, LoginRequest } from "@/shared/types/auth";
import { publicInstance } from "@/shared/api/public-instance";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk(
  "user/login",
  async (data: LoginRequest, { rejectWithValue }) => {
    return publicInstance
      .post<AuthSuccess, AxiosResponse<AuthSuccess>, LoginRequest>(
        "/auth/login",
        data
      )
      .then((response) => {
        localStorage.setItem("token", `Bearer ${response.data.access_token}`);
        return response.data;
      })
      .catch((err) => {
        const error = err as Error | AxiosError;
        if (isAxiosError<AuthError>(error) && error.response) {
          return rejectWithValue("mock");
        } else {
          return rejectWithValue("mock");
        }
      });
  }
);