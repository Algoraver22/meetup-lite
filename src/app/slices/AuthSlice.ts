import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface authInitialState {
  userInfo:
    | undefined
    | {
        uid: string;
        email: string;
        name: string;
      };
  isDarkTheme: boolean;
}

const initialState: authInitialState = {
  userInfo: undefined,
  isDarkTheme: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.isDarkTheme = action.payload.isDarkTheme;
    },
    setUser: (
      state,
      action: PayloadAction<{
        uid: string;
        email: string;
        name: string;
      } | null>
    ) => {
      state.userInfo = action.payload || undefined;
    },
    logout: (state) => {
      state.userInfo = undefined;
    },
  },
});

export const { setUser, changeTheme, logout } = authSlice.actions;
