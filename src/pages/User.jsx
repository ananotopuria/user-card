import { useSelector } from "react-redux";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
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
      <div
        className="relative rounded-2xl"
        style={{ backgroundColor: user.color }}
      >
        <div className="bg-[#ffffff52] border-2 rounded-2xl z-10 w-[20rem] md:w-[40rem]">
          <div className="flex flex-col">
            <div className="relative z-20">
              <div className="rounded-full overflow-hidden h-40 w-40 md:h-48 md:w-48 -mt-20 md:-mt-24 mx-auto border-2">
                {user.picture && (
                  <img
                    src={user.picture}
                    className="object-cover h-full w-full"
                    alt="User"
                  />
                )}
              </div>
            </div>
            <div className="p-6 md:p-12">
              <div className="flex flex-row gap-4 justify-center">
                <p className="text-2xl font-medium text-center text-[#253538] md:text-left font-bodoni">
                  {user.name}
                </p>
                <p className="text-2xl font-medium text-center text-[#253538] md:text-left font-bodoni">
                  {user.surname}
                </p>
              </div>
              <p className="text-xl font-medium text-center text-[#253538] md:text-center font-bodoni">
                {user.field}
              </p>
              <div className="flex gap-4 justify-center mt-4">
                {user.socialNetworks.facebook && (
                  <Link
                    to={user.socialNetworks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <FaFacebook className="text-4xl" color={user.iconColor} />
                  </Link>
                )}
                {user.socialNetworks.twitter && (
                  <Link
                    to={user.socialNetworks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <FaTwitter className="text-4xl" color={user.iconColor} />
                  </Link>
                )}
                {user.socialNetworks.linkedin && (
                  <Link
                    to={user.socialNetworks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <FaLinkedin className="text-4xl" color={user.iconColor} />
                  </Link>
                )}
                {user.socialNetworks.linkedin && (
                  <Link
                    to={user.socialNetworks.gmail}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <FaEnvelope className="text-4xl" color={user.iconColor} />
                  </Link>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-4 items-center mb-4">
              {user.websiteUrl && (
                <Link
                  to={user.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-[#253538] font-work rounded-lg text-center w-[16rem] md:w-[20rem] hover:opacity-50"
                  style={{ backgroundColor: user.linkBackgroundColor }}
                >
                  Website
                </Link>
              )}
              {user.podcastUrl && (
                <Link
                  to={user.podcastUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-[#253538] font-work rounded-lg text-center w-[16rem] md:w-[20rem] hover:opacity-50"
                  style={{ backgroundColor: user.linkBackgroundColor }}
                >
                  Podcast
                </Link>
              )}
              {user.blogUrl && (
                <Link
                  to={user.blogUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-[#253538] font-work rounded-lg text-center w-[16rem] md:w-[20rem] hover:opacity-50"
                  style={{ backgroundColor: user.linkBackgroundColor }}
                >
                  My Blog
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
