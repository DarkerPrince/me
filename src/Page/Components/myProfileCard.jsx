import React from "react";
import profileImg from "../../assets/profile.png";
import { AiFillBehanceCircle } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import { TbBrandDribbbleFilled } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";

function MyProfileCard() {
  return (
    <div class="text-slate-800 dark:text-slate-200  rounded-lg">
      <div class="flex flex-col items-center ">
        <img
          class=" w-16 md:w-24 h-16 object-contain bg-Primary md:h-24 mb-3 rounded-full shadow-lg"
          src={profileImg}
          alt="profile image"
        />
        <h5 class="mb-1 text-lg lg:text-xl font-medium  ">Luel Sisay</h5>
        <span class="text-sm text-gray-500 text-center">
          UI/UX Designer & Web Developer
        </span>
        <div className="flex gap-4 mt-4 md:mt-6">
          <a href="https://www.behance.net/luel_sisay">
            <AiFillBehanceCircle className="text-slate-500 hover:text-Primary transition-colors duration-300 text-3xl" />
          </a>
          <a href="https://dribbble.com/PrinceMag">
            <TbBrandDribbbleFilled className="text-slate-500 hover:text-Primary transition-colors duration-300 text-3xl" />
          </a>
          <a href="">
            <RiInstagramFill className="text-slate-500 hover:text-Primary transition-colors duration-300 text-3xl" />
          </a>
          <a href="">
            <div className="border-l border-gray-300 pl-4">
              <FaGithub className="text-slate-500 hover:text-Primary transition-colors duration-300 text-3xl" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default MyProfileCard;
