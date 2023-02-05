import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuthenticated: false,
  key: ""
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
    setKey(state,action)
    {
        state.key = action.payload;
        //This is used to create a key based on username and password and that key is then the unique identifier in the database for pulling the records
    }
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
