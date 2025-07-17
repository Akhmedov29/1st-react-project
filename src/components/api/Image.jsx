import React, { useState } from "react";
import toast from "react-hot-toast";
import { CiSquarePlus } from "react-icons/ci";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { Link } from "react-router-dom";

function Image({ image }) {
  const [like, setLike] = useState();
  const { alt_description, urls, user } = image;
  console.log(user);
  

  console.log(user);
  

  const handlelike = () => {
    setLike(true)
    toast('Liked!', {
    icon: '❤️',
  });
  }
  const handlelike2 = () => {
    setLike(false)
    toast('Disliked!', {
    icon: '💔',
  });

 
}
  return (
    <div className="relative">
      <img src={urls.full} alt={alt_description} />
      <div className="absolute top-2 right-4 flex">
        {like ? (
          <FcLike className="text-3xl cursor-pointer" onClick={handlelike2} />
        ) : (
          <FcLikePlaceholder className="text-3xl cursor-pointer" onClick={handlelike} />
        )}
        
      </div>
      <div className="w-full h-[40px] bg-black bg-opacity-50 flex items-center justify-between absolute bottom-[0px]">
        <div className="flex items-center gap-2 ml-[10px]">
        <button href={user.social.portfolio_url} className="flex items-center gap-2 h-full">
        <img className="rounded-full" src={user.profile_image.small} alt="" />
        <a href={user.social.portfolio_url}>Project or YouTube</a>
        </button>
        </div>
        <button className="mr-3">
        <CiSquarePlus className="text-[32px] cursor-pointer" />
        </button>
      </div>
    </div>
  );
}

export default Image;