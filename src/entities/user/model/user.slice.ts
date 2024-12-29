import { createSlice } from "@reduxjs/toolkit";
import { login } from "../api/login";
import { registration } from "../api/registration";

export interface UserState {
  isAuthorized: boolean;
}

const initialState: UserState = {
  isAuthorized: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state) => {
      state.isAuthorized = true;
    });
    builder.addCase(registration.fulfilled, (state) => {
      state.isAuthorized = true;
    });
  },
});


export default userSlice.reducer;
