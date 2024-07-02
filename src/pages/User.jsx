import React from "react";
import { useSelector } from "react-redux";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

function User() {
  const user = useSelector((state) => state.user);

  return (
    <div className="relative flex items-center justify-center h-screen">
      {user.background && (
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${user.background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: -1,
          }}
        ></div>
      )}
      <div className="relative" style={{ backgroundColor: user.color }}>
        <div className="bg-[#ffffff52] p-2 mx-6 rounded-2xl z-10">
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
                  <Link
                    to={user.socialNetworks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <FaFacebook color={user.iconColor} />
                  </Link>
                )}
                {user.socialNetworks.twitter && (
                  <Link
                    to={user.socialNetworks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <FaTwitter color={user.iconColor} />
                  </Link>
                )}
                {user.socialNetworks.linkedin && (
                  <Link
                    to={user.socialNetworks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <FaLinkedin color={user.iconColor} />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
