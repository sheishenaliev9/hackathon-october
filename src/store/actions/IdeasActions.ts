import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { IdeasType } from "../../types/index.type";
import { toast } from "react-toastify";

const IDEAS_URL = "http://127.0.0.1:8000/api/v1";
const TOKEN = "e297f7cfcce703fcb6c01c6733c580dee7ed11a9";

export const getIdeas = createAsyncThunk(
  "getIdeas",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${IDEAS_URL}/ideas/`, {
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

export const createIdea = createAsyncThunk(
  "createIdea",
  async (formData: FormData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${IDEAS_URL}/ideas/`, formData, {
        headers: {
          Authorization: `token ${TOKEN}`,
        },
      });
      toast.success("Идея успешно опубликовано!")
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

export const getIdea = createAsyncThunk(
  "getIdea",
  async (id: number, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${IDEAS_URL}/ideas/${id}/`, {
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

export const choiceVoice = createAsyncThunk(
  "choiceVoice",
  async (
    { id, values }: { id: number; values: IdeasType },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await axios.put(
        `${IDEAS_URL}/voices/${id}/`,
        { values },
        {
          headers: {
            Authorization: `token ${TOKEN}`,
          },
        }
      );
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
