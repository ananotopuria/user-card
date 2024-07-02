import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    picture: "",
    background: "",
    name: "",
    surname: "",
    color: "#fffff2",
    iconColor: "#415831",
    socialNetworks: {
      facebook: "",
      twitter: "",
      linkedin: "",
    },
    socialUrls: {
      facebookUrl: "",
      twitterUrl: "",
      linkedinUrl: "",
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
