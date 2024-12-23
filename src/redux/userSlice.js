import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    picture: "",
    background: "",
    name: "",
    surname: "",
    field: "",
    color: "#fffff2",
    iconColor: "#93a5ac",
    socialNetworks: {
      facebook: "",
      twitter: "",
      linkedin: "",
      gmail: "",
    },
    socialUrls: {
      facebookUrl: "",
      twitterUrl: "",
      linkedinUrl: "",
      gmailUrl: "",
    },
    websiteUrl: "",
    podcastUrl: "",
    blogUrl: "",
    linkBackgroundColor: "#ff0000", 
  },
  reducers: {
    setUser(state, action) {
      return action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
