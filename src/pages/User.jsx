import React from 'react';
import { useSelector } from 'react-redux';

function User() {
  const user = useSelector((state) => state.user);

  return (
    <div>
      <h1>User Profile</h1>
      {user.picture && <img src={user.picture} alt="User" />}
      <p>Name: {user.name}</p>
      <p>Surname: {user.surname}</p>
    </div>
  );
}

export default User;
