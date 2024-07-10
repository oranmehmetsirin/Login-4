import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) ?? false,
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      try {
        localStorage.setItem("user", JSON.stringify(action.payload));
        state.user = action.payload;
      } catch (error) {
        console.error("Error saving user to localStorage", error);
      }
    },
    logout: (state) => {
      try {
        localStorage.removeItem("user");
        state.user = false;
      } catch (error) {
        console.error("Error removing user from localStorage", error);
      }
    },
  },
});

export const { login, logout } = auth.actions;

export default auth.reducer;
