import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { Inputs, ProfileType } from "../../types/index.type";

const AUTH_URL = "http://192.168.88.59:8000/auth";
const USERS_URL = "http://192.168.88.59:8000/api/v1"

const TOKEN = "ec3ed3752119f844ec967c751a339e961b576cb1";

export const getUsers = createAsyncThunk(
  "getUsers",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${AUTH_URL}/users/`, {
        headers: {
          Authorization: `token ${TOKEN}`,
        },
      });
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        return rejectWithValue(axiosError.message ?? "An error occurred");
      } else {
        return rejectWithValue("An error occurred");
      }
    }
  }
);

export const getUser = createAsyncThunk(
  "getUser",
  async (id: number, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${USERS_URL}/userprofile/${id}/`, {
        headers: {
          Authorization: `token ${TOKEN}`,
        },
      });
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        return rejectWithValue(axiosError.message ?? "An error occurred");
      } else {
        return rejectWithValue("An error occurred");
      }
    }
  }
);

export const addUser = createAsyncThunk(
  "addUser",
  async (user: Inputs, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${AUTH_URL}/users/`, user, {
        headers: {
          Authorization: `token ${TOKEN}`,
        },
      });
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        console.log(axiosError.message);
        return rejectWithValue(axiosError.message ?? "An error occurred");
      }
    }
  }
);

export const EditUserProfile = createAsyncThunk(
  "EditUserProfile",
  async ({ id, data }: { id: number; data: ProfileType }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${USERS_URL}/profiles/${id}/`, data, {
        headers: {
          Authorization: `token ${TOKEN}`,
        },
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        console.log(axiosError.message);
        return rejectWithValue(axiosError.message ?? "An error occurred");
      }
    }
  }
);

export const loginUser = createAsyncThunk(
  "loginUser",
  async (user: Inputs, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${AUTH_URL}/token/login/`, user, {
        headers: {
          Authorization: `token ${TOKEN}`,
        },
      });
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        return rejectWithValue(axiosError.message ?? "An error occurred");
      } else {
        return rejectWithValue("An error occurred");
      }
    }
  }
);
