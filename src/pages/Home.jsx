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
    <div>
      <h1>Home</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <FaFacebook />
          <input
            type="text"
            name="facebook"
            placeholder="Facebook"
            onChange={handleChange}
          />
        </div>
        <div>
          <FaTwitter />
          <input
            type="text"
            name="twitter"
            placeholder="Twitter"
            onChange={handleChange}
          />
        </div>
        <div>
          <FaLinkedin />
          <input
            type="text"
            name="linkedin"
            placeholder="LinkedIn"
            onChange={handleChange}
          />
        </div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="surname"
          placeholder="Surname"
          onChange={handleChange}
        />
        <input
          type="file"
          accept="image/*"
          name="picture"
          onChange={handleFileChange}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default Home;
