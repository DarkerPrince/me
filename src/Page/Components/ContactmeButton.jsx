import React, { useState } from "react";
import { FaGithub, FaTelegram } from "react-icons/fa";

const FunButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const telegramProfileLink = "https://t.me/PrinceMagIV";

  const handleButtonClick = () => {
    window.open(telegramProfileLink, "_blank");
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <button
      className={`bg-gradient-to-br from-[#2AABEE] to-[#0088CC] hover:bg-gradient-to-tl text-white font-medium py-2 px-4 rounded-full shadow-lg transition duration-400 ${
        isHovered ? "scale-105 animate-shake" : ""
      }`}
      onClick={handleButtonClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center gap-2">
        <FaTelegram className="text-white hover:shadow-md transition-colors duration-300 text-lg" />
        <p> Contact me</p>
      </div>
    </button>
  );
};

export default FunButton;
