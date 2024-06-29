import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

function Home() {
  const [userInfo, setUserInfo] = useState({
    picture: "",
    name: "",
    surname: "",
    socialNetworks: {
      facebook: "",
      twitter: "",
      linkedin: "",
    },
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
    } else {
      setUserInfo((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setUserInfo((prev) => ({ ...prev, picture: reader.result }));
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

  return (
    <div className="flex flex-col gap-2 items-center justify-center h-screen bg-[#415831]">
      <h1 className="max-w-2xl mx-auto mb-10 text-3xl font-bold leading-normal mt-14 md:text-4xl text-[#f3ebdd] font-dosis">Create Your Own Card</h1>
      <div className="bg-[#f3ebdd] p-7 mx-6 shadow-sm">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 items-start space-y-6 md:flex-col md:space-y-0 md:space-x-6"
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
              type="file"
              accept="image/*"
              name="picture"
              onChange={handleFileChange}
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex gap-3">
              <FaFacebook color="#415831"/>
              <input
                type="text"
                name="facebook"
                placeholder="Facebook"
                className="w-full px-10 py-3 rounded-full focus:outline-none"
                onChange={handleChange}
              />
            </div>
            <div className="flex gap-3">
              <FaTwitter color="#415831"/>
              <input
                type="text"
                name="twitter"
                placeholder="Twitter"
                className="w-full px-10 py-3 rounded-full focus:outline-none"
                onChange={handleChange}
              />
            </div>
            <div className="flex gap-3">
              <FaLinkedin color="#415831"/>
              <input
                type="text"
                name="linkedin"
                placeholder="LinkedIn"
                className="w-full px-10 py-3 rounded-full focus:outline-none"
                onChange={handleChange}
              />
            </div>
          </div>
          <button className="w-full p-3 px-6 rounded-full bg-[#ff6c02] text-white md:w-56 hover:scale-95" type="submit">Save</button>
        </form>
      </div>
    </div>
  );
}

export default Home;
