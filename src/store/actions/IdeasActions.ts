import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const IDEAS_URL = "http://localhost:3030";

export const getIdeas = createAsyncThunk("getIdeas", async () => {
  try {
    const { data } = await axios.get(`${IDEAS_URL}/ideas`);
    return data;
  } catch (error) {
    console.log(error);
  }
});
