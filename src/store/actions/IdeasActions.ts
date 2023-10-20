import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { IdeasType, createIdeaType } from "../../types/index.type";

const IDEAS_URL = "http://192.168.88.59:8000/api/v1";
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
  async (idea: createIdeaType, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${IDEAS_URL}/ideas/`, idea, {
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
