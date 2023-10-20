import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { Inputs } from "../../types/index.type";

const AUTH_URL = "http://192.168.88.59:8000/auth/users";

const TOKEN = "e297f7cfcce703fcb6c01c6733c580dee7ed11a9";
export const getUsers = createAsyncThunk(
  "getUsers",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${AUTH_URL}`, {
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
      const { data } = await axios.get(`${AUTH_URL}/${id}/`, {
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
      const { data } = await axios.post(`${AUTH_URL}`, user, {
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
  async ({ id, data }: { id: number; data: Inputs }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(`${AUTH_URL}/${id}`, data, {
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
      const { data } = await axios.post(`${AUTH_URL}`, user, {
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
