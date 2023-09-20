import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    // Это просто имя переменной, в случ регистарции это будет объект со сввами нейм, емейл и пасворд из формы
    // При нажатии зарегистрироваться будет отправляться эта асинхр операция и при сабмитезакинется в креденшиалз
    // Креденш – оъект пользователя из 3 свв – имя, пароль, имейл, приходит в форме
    // При отправл диспатчим эту операцию и так получаем
    try {
      const { data } = await axios.post('/users/signup', credentials);
      setAuthHeader(data.token);

      return data;
    } catch (error) {
      console.log('error.response.data.code :>> ', error.response.data.code);
      if (error.response) {
        if (error.response.data.code === 11000) {
          toast.error(
            `This email is already taken! Try another one, please :) `
          );
        } else {
          toast.error(
            `Your password is too short! Minimum 7 characters needed :)`
          );
        }
      } else {
        // If the request fails for some other reason
        toast.error('Something went wrong!');
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/login', credentials);
      setAuthHeader(data.token);

      return data;
    } catch (error) {
      toast.error(
        `Something went wrong! Register first or check your email and password!`
      );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk('users/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const { token } = thunkAPI.getState().auth;
    if (token === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      setAuthHeader(token);
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      console.clear();
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
