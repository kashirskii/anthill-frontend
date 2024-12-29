import { AxiosError, AxiosResponse, isAxiosError } from "axios";
import {
  AuthError,
  AuthSuccess,
  RegistrationRequest,
} from "@/shared/types/auth";
import { publicInstance } from "@/shared/api/public-instance";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const registration = createAsyncThunk(
  "user/registration",
  async (data: RegistrationRequest, { rejectWithValue }) => {
    return publicInstance
      .post<AuthSuccess, AxiosResponse<AuthSuccess>, RegistrationRequest>(
        "/auth/registration",
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
