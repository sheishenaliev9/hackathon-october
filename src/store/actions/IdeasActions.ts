import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const IDEAS_URL = "http://192.168.88.59:8000/api/v1";



export const getIdeas = createAsyncThunk("getIdeas", async () => {
  try {
    const { data } = await axios.get(`${IDEAS_URL}/ideas/`);
    return data;
  } catch (error) {
    console.log(error);
  }
});

