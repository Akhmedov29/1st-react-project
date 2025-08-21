import { useState } from "react";
import toast from "react-hot-toast";
import { CiSquarePlus } from "react-icons/ci";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { Link } from "react-router-dom";

function Image({ image, keys }) {
  const { alt_description, urls, user, links } = image;
  const [like, setLike] = useState(false);

  const handlelike = () => {
    setLike(true);
    toast("Like bosildi!", {
      icon: "❤️",
    });
  };
  const handlelike2 = () => {
    setLike(false);
    toast("Like qaytarib olindi!", {
      icon: "💔",
    });
  };
  const downloadImage = (e) => {
    e.preventDefault();
    if (!user) {
      return toast.success("Please verify your email, go to profile");
    }
    window.open(links.download + "&force=true", "_blank");
  };

  return (
    <div className="relative">
      <img src={urls.full} alt={alt_description} />
      <div className="absolute top-2 right-4 flex">
        {like ? (
          <div>
            <FcLike className="text-3xl cursor-pointer" onClick={handlelike2} />
          </div>
        ) : (
          <FcLikePlaceholder
            className="text-3xl cursor-pointer"
            onClick={handlelike}
          />
        )}
      </div>
      <div className="w-full h-[40px] bg-black bg-opacity-50 flex items-center justify-between absolute bottom-[0px]">
        <div className="flex items-center gap-2 ml-[10px]">
          <button
            href={user.social.portfolio_url}
            className="flex items-center gap-2 h-full"
          >
            <img
              className="rounded-full"
              src={user.profile_image.small}
              alt=""
            />
            <a href={user.social.portfolio_url} className="text-white">
              Project or YouTube
            </a>
          </button>
        </div>
        <button className="mr-3">
          <a
            onClick={(event) => downloadImage(event)}
            target="_blank"
            download
            rel="noppener noreferrer"
          >
            <CiSquarePlus className="text-[36px] cursor-pointer" />
          </a>
        </button>
      </div>
    </div>
  );
}

export default Image;
