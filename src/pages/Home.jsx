import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";
import img from "./../../public/photo-card.avif";
import "./../App.css";

function Home() {
  const [userInfo, setUserInfo] = useState({
    picture: "",
    background: "",
    name: "",
    surname: "",
    field: "",
    color: "#264653",
    iconColor: "",
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
    linkBackgroundColor: "#e76f51",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // useEffect(() => {
  //   const savedUserInfo = localStorage.getItem("userCardInfo");
  //   if (savedUserInfo) {
  //     setUserInfo(JSON.parse(savedUserInfo));
  //   }
  // }, []);

  useEffect(() => {
    const savedUserInfo = localStorage.getItem("userCardInfo");
    if (savedUserInfo) {
      setUserInfo((prev) => ({
        ...prev,
        ...JSON.parse(savedUserInfo),
      }));
    }
  }, []);

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

  const handleColorChange = (color) => {
    const iconColor = color === "#4d4d4c50" ? "#c2a9c1" : "#253538";
    const linkBackgroundColor = color === "#4d4d4c50" ? "#f3ebdd" : "#fff";
    setUserInfo((prev) => ({
      ...prev,
      color,
      iconColor,
      linkBackgroundColor,
    }));
  };

  const validateForm = () => {
    if (!userInfo.name.trim() || !userInfo.surname.trim()) {
      alert("Please fill out your name and surname.");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    localStorage.setItem("userCardInfo", JSON.stringify(userInfo));

    dispatch(setUser(userInfo));

    navigate("/user");
  };

  const handleReset = () => {
    localStorage.removeItem("userCardInfo");
    setUserInfo({
      picture: "",
      background: "",
      name: "",
      surname: "",
      field: "",
      color: "#264653",
      iconColor: "",
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
      linkBackgroundColor: "#e76f51",
    });
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1a24] to-[#1d4252] flex justify-center items-center p-6">
      <div className="relative bg-white shadow-2xl rounded-2xl overflow-hidden sm:max-w-2xl xl:max-w-6xl w-full">
        <div className="hidden xl:block absolute top-0 left-0 w-1/2 h-full">
          <img
            src={img}
            alt="Card Design"
            className="object-cover h-full w-full"
          />
        </div>
        <div className="p-10 xl:ml-[50%]">
          <h1 className="text-4xl font-bold text-center text-[#264653] mb-8 font-bodoni">
            Personalize Digital Card
          </h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            <div>
              <h2 className="text-lg font-semibold text-gray-700 mb-4">
                Personal Details
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="First Name"
                  className="input-field"
                  onChange={handleChange}
                  value={userInfo.name}
                />
                <input
                  type="text"
                  name="surname"
                  placeholder="Last Name"
                  className="input-field"
                  onChange={handleChange}
                  value={userInfo.surname}
                />
                <input
                  type="text"
                  name="field"
                  placeholder="Profession"
                  className="input-field"
                  onChange={handleChange}
                  value={userInfo.field}
                />
              </div>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-700 mb-4">
                Links
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="websiteUrl"
                  placeholder="Website URL"
                  className="input-field"
                  onChange={handleChange}
                  value={userInfo.websiteUrl}
                />
                <input
                  type="text"
                  name="podcastUrl"
                  placeholder="Podcast URL"
                  className="input-field"
                  onChange={handleChange}
                  value={userInfo.podcastUrl}
                />
                <input
                  type="text"
                  name="blogUrl"
                  placeholder="Blog URL"
                  className="input-field"
                  onChange={handleChange}
                  value={userInfo.blogUrl}
                />
              </div>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-700 mb-4">
                Social Media
              </h2>
              <div className="space-y-4">
                {[
                  { name: "facebook", Icon: FaFacebook },
                  { name: "twitter", Icon: FaTwitter },
                  { name: "linkedin", Icon: FaLinkedin },
                  { name: "gmail", Icon: FaEnvelope },
                ].map(({ name, Icon }) => (
                  <div key={name} className="flex items-center gap-4">
                    <Icon size={24} color={userInfo.iconColor} />
                    <input
                      type="text"
                      name={name}
                      placeholder={`Enter your ${name}`}
                      className="input-field flex-grow"
                      onChange={handleChange}
                      value={userInfo.socialNetworks[name]}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="picture"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Profile Picture
                </label>
                <input
                  type="file"
                  accept="image/*"
                  name="picture"
                  id="picture"
                  className="file-input"
                  onChange={handleFileChange}
                />
              </div>
              <div>
                <label
                  htmlFor="background"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Background Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  name="background"
                  id="background"
                  className="file-input"
                  onChange={handleFileChange}
                />
              </div>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-700 mb-4">
                Choose a Theme Color
              </h2>
              <div className="flex justify-center gap-4">
                {[
                  { color: "#fcafb3", transparentColor: "#fcafb390" },
                  { color: "#a8a197", transparentColor: "#a8a19790" },
                  { color: "#4d4d4c", transparentColor: "#4d4d4c50" },
                ].map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className="w-10 h-10 rounded-full shadow-lg focus:outline focus:outline-2 focus:outline-[#c19bc0]"
                    style={{ backgroundColor: item.color }}
                    onClick={() => handleColorChange(item.transparentColor)}
                  ></button>
                ))}
              </div>
            </div>
            <div className="flex justify-between flex-col gap-2 xl:flex-row">
              <button
                type="submit"
                className="w-full px-6 py-3 bg-[#c2a9c1] text-white rounded-lg font-medium hover:bg-[#c19bc0] transition"
              >
                Save Card
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="w-full px-6 py-3 bg-gray-300 text-black rounded-lg font-medium hover:bg-gray-400 transition"
              >
                Reset Form
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;
