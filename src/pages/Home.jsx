import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [userInfo, setUserInfo] = useState({
    picture: '',
    name: '',
    surname: '',
    socialNetworks: {},
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setUser(userInfo));
    navigate('/user');
  };

  return (
    <div>
      <h1>Home</h1>
      <form onSubmit={handleSubmit}>
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
          type="text"
          name="picture"
          placeholder="Picture URL"
          onChange={handleChange}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default Home;
