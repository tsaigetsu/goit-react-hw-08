import { createAsyncThunk } from "@reduxjs/toolkit";
import { clearToken, goitApi, setToken } from "../../goitApi";

export const registerThunk = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await goitApi.post("users/signup", credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  "login",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await goitApi.post("users/login", credentials);
      setToken(data.token);
      localStorage.setItem('token', data.token); 
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const logoutThunk = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      await goitApi.post("users/logout");
      clearToken();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const refreshUserThunk = createAsyncThunk(
  "auth/refreshUser",
  async (_, thunkAPI) => {
    const savedToken = localStorage.getItem('token');
    if (!savedToken) {
      return thunkAPI.rejectWithValue("No token found");
    }

    setToken(savedToken);
    try {
      const { data } = await goitApi.get("users/current");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  "auth/fetchCurrentUser",
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const persistedToken = state.auth.token;

      if (!persistedToken) {
        return thunkAPI.rejectWithValue("No token found");
      }

      setToken(persistedToken);
      const response = await goitApi.get("/users/current");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

