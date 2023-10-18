import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const IDEAS_URL = "https://2270-212-112-111-20.ngrok-free.app/api/v1";

const secondary_url = "http://localhost:3030";



export const getIdeas = createAsyncThunk("getIdeas", async () => {
  try {
    const { data } = await axios.get(`${secondary_url}/ideas/`);
    return data;
  } catch (error) {
    console.log(error);
  }
});


export const getIdea = createAsyncThunk("getIdea", async (id: number) => {
  try {
    const { data } = await axios.get(`${secondary_url}/ideas/${id}`)
    return data;
  } catch (error) {
    console.log(error);
  }
})

