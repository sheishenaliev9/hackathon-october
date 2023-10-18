import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { UserType } from "../../types/index.type";


// const AUTH_URL = "https://2270-212-112-111-20.ngrok-free.app/api/v1/";
const secondary_url = "http://localhost:3030";


export const addUser = createAsyncThunk(
    "addUser",
    async (user: UserType) => {
      try {
        await axios.post(`${secondary_url}/users`, user);
      } catch (error) {
        console.log(error);
      }
    }
  );