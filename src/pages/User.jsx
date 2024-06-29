import React from "react";
import { useSelector } from "react-redux";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

function User() {
  const user = useSelector((state) => state.user);

  return (
    <div className="flex items-center justify-center h-screen bg-[#ffb400]">
      <div className="bg-[#ff6c02] p-2 mx-6 rounded-2xl">
        <div className="flex flex-col md:flex-row rounded-l-xl gap-5">
          {user.picture && (
            <img
              src={user.picture}
              className="object-fit rounded-xl h-80 md:h-64 md:rounded-l-xl md:rounded-r-none transform hover:scale-105 hover:rounded-xl duration-200"
              alt="User"
            />
          )}
          <div className="p-6 md:p-12 flex flex-col gap-5">
            <div className="flex flex-row gap-4 justify-center">
              <p className="text-xl font-medium text-center text-white md:text-left font-dosis">
                {user.name}
              </p>
              <p className="text-xl font-medium text-center text-white md:text-left font-dosis">
                {user.surname}
              </p>
            </div>
            <div className="flex flex-col gap-4 justify-center">
              {user.socialNetworks.facebook && (
                <div>
                  <FaFacebook color="#fff9e9" />
                  <span className="max-w-xs my-4 text-xs leading-5 tracking-wide text-center text-white md:text-left">
                    {user.socialNetworks.facebook}
                  </span>
                </div>
              )}
              {user.socialNetworks.twitter && (
                <div>
                  <FaTwitter color="#fff9e9" />
                  <span className="max-w-xs my-4 text-xs leading-5 tracking-wide text-center text-white md:text-left">
                    {user.socialNetworks.twitter}
                  </span>
                </div>
              )}
              {user.socialNetworks.linkedin && (
                <div>
                  <FaLinkedin color="#fff9e9" />
                  <span className="max-w-xs my-4 text-xs leading-5 tracking-wide text-center text-white md:text-left">
                    {user.socialNetworks.linkedin}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
