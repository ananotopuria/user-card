import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Home() {
  const [userInfo, setUserInfo] = useState({
    picture: "",
    background: "",
    name: "",
    surname: "",
    field: "",
    color: "#ff6c02",
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
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name in userInfo.socialNetworks) {
      setUserInfo((prev) => ({
        ...prev,
        socialNetworks: { ...prev.socialNetworks, [name]: value },
      }));
    } else if (name in userInfo.socialUrls) {
      setUserInfo((prev) => ({
        ...prev,
        socialUrls: { ...prev.socialUrls, [name]: value },
      }));
    } else {
      setUserInfo((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e) => {
    const { name } = e.target;
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setUserInfo((prev) => ({ ...prev, [name]: reader.result }));
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setUser(userInfo));
    navigate("/user");
  };

  const handleColorChange = (color) => {
    const iconColor = color === "#4d4d4c50" ? "#fff" : "#253538";
    const linkBackgroundColor = color === "#4d4d4c50" ? "#f3ebdd" : "#fff";
    setUserInfo((prev) => ({
      ...prev,
      color,
      iconColor,
      linkBackgroundColor,
    }));
  };

  return (
    <div className="flex flex-col gap-2 h-screen bg-[#93a5ac]">
      <h1 className="p-8 max-w-2xl mx-auto text-3xl font-bold leading-normal md:text-4xl text-[#ffe3da] font-bodoni">
        Create Your Own Card
      </h1>
      <div className="bg-[#ffe3da] p-7 mx-6 shadow-sm rounded-tl-lg rounded-tr-lg">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 items-start space-y-6 md:flex-col md:space-y-0 "
        >
          <div className="flex flex-col gap-5">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full px-10 py-3 rounded-full focus:outline-none"
              onChange={handleChange}
            />
            <input
              type="text"
              name="surname"
              placeholder="Surname"
              className="w-full px-10 py-3 rounded-full focus:outline-none"
              onChange={handleChange}
            />
            <input
              type="text"
              name="field"
              placeholder="Field"
              className="w-full px-10 py-3 rounded-full focus:outline-none"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-5">
            <input
              type="text"
              name="websiteUrl"
              placeholder="Website"
              className="w-full px-10 py-3 rounded-full focus:outline-none"
              onChange={handleChange}
            />
            <input
              type="text"
              name="podcastUrl"
              placeholder="Podcast"
              className="w-full px-10 py-3 rounded-full focus:outline-none"
              onChange={handleChange}
            />
            <input
              type="text"
              name="blogUrl"
              placeholder="My Blog"
              className="w-full px-10 py-3 rounded-full focus:outline-none"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex gap-3">
              <FaFacebook color={userInfo.iconColor} />
              <input
                type="text"
                name="facebook"
                placeholder="Facebook"
                className="w-full px-10 py-3 rounded-full focus:outline-none"
                onChange={handleChange}
              />
            </div>
            <div className="flex gap-3">
              <FaTwitter color={userInfo.iconColor} />
              <input
                type="text"
                name="twitter"
                placeholder="Twitter"
                className="w-full px-10 py-3 rounded-full focus:outline-none"
                onChange={handleChange}
              />
            </div>
            <div className="flex gap-3">
              <FaLinkedin color={userInfo.iconColor} />
              <input
                type="text"
                name="linkedin"
                placeholder="LinkedIn"
                className="w-full px-10 py-3 rounded-full focus:outline-none"
                onChange={handleChange}
              />
            </div>
            <div className="flex gap-3">
              <FaEnvelope color={userInfo.iconColor} />
              <input
                type="text"
                name="Gmail"
                placeholder="Gmail"
                className="w-full px-10 py-3 rounded-full focus:outline-none"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex gap-2">
            <label htmlFor="picture" className="mb-1 text-[#748891]">
              Profile picture
            </label>
            <input
              type="file"
              accept="image/*"
              name="picture"
              id="picture"
              onChange={handleFileChange}
            />
          </div>
          <div className="flex gap-2">
            <label htmlFor="background" className="mb-1 text-[#748891]">
              Background
            </label>
            <input
              type="file"
              accept="image/*"
              name="background"
              id=""
              onChange={handleFileChange}
            />
          </div>
          <div className="flex gap-8 m-4 ">
            <button
              type="button"
              className="w-full p-3 px-6 rounded-full bg-[#fcafb3] md:w-2 hover:scale-95"
              onClick={() => handleColorChange("#fcafb390")}
            ></button>
            <button
              type="button"
              className="w-full p-3 px-6 rounded-full bg-[#a8a197] md:w-2 hover:scale-95"
              onClick={() => handleColorChange("#a8a19790")}
            ></button>
            <button
              type="button"
              className="w-full p-3 px-6 rounded-full bg-[#4d4d4c] md:w-2 hover:scale-95"
              onClick={() => handleColorChange("#4d4d4c50")}
            ></button>
          </div>
          <button
            className="w-full p-3 px-6 rounded-full bg-[#f6a395] text-white md:w-56 hover:scale-95"
            type="submit"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default Home;
