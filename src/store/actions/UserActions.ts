import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { UserType } from "../../types/index.type";


const AUTH_URL = "http://192.168.88.59:8000/auth/users/";


export const addUser = createAsyncThunk(
    "addUser",
    async (user: UserType) => {
      try {
        await axios.post(`${AUTH_URL}`, user);
      } catch (error) {
        console.log(error);
      }
    }
  );