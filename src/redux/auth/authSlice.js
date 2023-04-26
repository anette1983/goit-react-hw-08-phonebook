import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, refreshUser } from 'redux/auth/operations';
const authInitialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  extraReducers: builder => {
    builder
      .addCase(register.pending, (state, action) => {
        return state;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state, action) => {
        // state.isLoading = false;
        // state.error = action.payload;
        return state;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
      });
  },
  // {
  // [register.fulfilled](state, action) {
  //   state.user = action.payload.user;
  //   state.token = action.payload.token;
  //   state.isLoggedIn = true;
  // },
  // [login.fulfilled](state, action) {
  //   state.user = action.payload.user;
  //   state.token = action.payload.token;
  //   state.isLoggedIn = true;
  // },
  // // написать общ фкцию и переписать на билдер
  // [logout.fulfilled](state, action) {
  //   state.user = { name: null, email: null };
  //   state.token = null;
  //   state.isLoggedIn = false;
  // },
  // [refreshUser.pending](state) {
  //   state.isRefreshing = true;
  // },
  // [refreshUser.fulfilled](state, action) {
  //   state.user = { ...action.payload };
  //   state.isLoggedIn = true;
  //   state.isRefreshing = false;
  // },
  // [refreshUser.rejected](state) {
  //   state.isRefreshing = false;
  // },
  // },
});

export default authSlice.reducer;
