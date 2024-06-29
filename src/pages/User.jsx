import React from "react";
import { useSelector } from "react-redux";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

function User() {
  const user = useSelector((state) => state.user);

  return (
    <div>
      <h1>User Profile</h1>
      {user.picture && <img src={user.picture} alt="User" />}
      <div>
        <p>{user.name}</p>
        <p>{user.surname}</p>
      </div>
      {user.socialNetworks.facebook && (
        <div>
          <FaFacebook />
          <span>{user.socialNetworks.facebook}</span>
        </div>
      )}
      {user.socialNetworks.twitter && (
        <div>
          <FaTwitter />
          <span>{user.socialNetworks.twitter}</span>
        </div>
      )}
      {user.socialNetworks.linkedin && (
        <div>
          <FaLinkedin />
          <span>{user.socialNetworks.linkedin}</span>
        </div>
      )}
    </div>
  );
}

export default User;
