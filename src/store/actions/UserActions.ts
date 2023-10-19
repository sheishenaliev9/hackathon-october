import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { Inputs } from "../../types/index.type";

const AUTH_URL = "http://192.168.88.59:8000/api/v1/users";
// const PROFILE_URL = "http://192.168.88.59:8000/api/v1";
const test = " http://localhost:3030/users";

const TOKEN = "19c6718c67ed2eb4f304e8ab5d1df7cda8451ae7";
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
      const { data } = await axios.get(`${test}/${id}/`, {
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
      const { data } = await axios.post(`${test}`, user, {
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
      const response = await axios.patch(`${test}/${id}`, data);
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
