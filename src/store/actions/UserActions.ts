import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { Inputs, ProfileType } from "../../types/index.type";
import { toast } from "react-toastify";

const AUTH_URL = "http://127.0.0.1:8000/auth";
const USERS_URL = "http://127.0.0.1:8000/api/v1";

const TOKEN = "e297f7cfcce703fcb6c01c6733c580dee7ed11a9";

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
        if (error.response && error.response.status === 400) {
          if (error.response.data && error.response.data.username) {
            toast.error(error.response.data.username[0]);
          } else {
            toast.error("An error occurred");
          }
        } else {
          toast.error(error.message);
        }
        return rejectWithValue(error.message);
      } else {
        toast.error("An error occurred");
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
        if (error.response && error.response.status === 400) {
          if (error.response.data && error.response.data.username) {
            toast.error(error.response.data.username[0]);
          } else {
            toast.error("An error occurred");
          }
        } else {
          toast.error(error.message);
        }
        return rejectWithValue(error.message);
      } else {
        toast.error("An error occurred");
        return rejectWithValue("An error occurred");
      }
    }
  }
);

export const EditUserProfile = createAsyncThunk(
  "EditUserProfile",
  async (
    { id, data }: { id: number; data: Partial<ProfileType> },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.put(`${USERS_URL}/profiles/${id}/`, data, {
        headers: {
          Authorization: `token ${TOKEN}`,
        },
      });
      toast.success("Данные в профиле успешно изменены!")
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response && error.response.status === 400) {
          if (error.response.data && error.response.data.username) {
            toast.error(error.response.data.username[0]);
          } else {
            toast.error("An error occurred");
          }
        } else {
          toast.error(error.message);
        }
        return rejectWithValue(error.message);
      } else {
        toast.error("An error occurred");
        return rejectWithValue("An error occurred");
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
        if (error.response && error.response.status === 400) {
          if (error.response.data && error.response.data.non_field_errors ) {
            toast.error(error.response.data.non_field_errors[0]);
          } else {
            toast.error("An error occurred");
          }
        } else {
          toast.error(error.message);
        }
        return rejectWithValue(error.message);
      } else {
        toast.error("An error occurred");
        return rejectWithValue("An error occurred");
      }
    }
  }
);