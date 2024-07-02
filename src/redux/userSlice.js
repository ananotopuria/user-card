import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    picture: "",
    background: "",
    name: "",
    surname: "",
    color: "#fffff2",
    socialNetworks: {
      facebook: "",
      twitter: "",
      linkedin: "",
    },
  },
  reducers: {
    setUser(state, action) {
      return action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
