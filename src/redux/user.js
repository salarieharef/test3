import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { getItem } from "../core/services/common/storage.services";

const userSlice = createSlice({
  name: "user",
  initialState: {
    fname: "",
    lname: "",
    username: "",
    email: "",
    id: null,
    password: "",
    image: "",
    phoneNumber: "",
    role: "",
    token: getItem("token") ? getItem("token") : null,
  },

  reducers: {
    onFnameChange: (state, action) => {
      state.fname = action.payload;
    },
    onLnameChange: (state, action) => {
      state.lname = action.payload;
    },
    onUsernameChange: (state, action) => {
      state.username = action.payload;
    },
    onEmailChange: (state, action) => {
      state.email = action.payload;
    },

    onIdChange: (state, action) => {
      state.id = action.payload;
    },

    onPhoneNumberChange: (state, action) => {
      state.phoneNumber = action.payload;
    },

    onPasswordChange: (state, action) => {
      state.password = action.payload;
    },

    onImageChange: (state, action) => {
      state.image = action.payload;
    },

    onTokenChange: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const {
  onEmailChange,
  onPhoneNumberChange,
  onPasswordChange,
  onTokenChange,
  onNameChange,
  onIdChange,
  onFnameChange,
  onLnameChange,
  onUsernameChange,
  onImageChange,
} = userSlice.actions; // common way

export const useUserSelector = () => useSelector((reducer) => reducer.user); // costume hook

export default userSlice.reducer;
