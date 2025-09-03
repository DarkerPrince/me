import React from 'react';
import { IoMdClose } from "react-icons/io";

const Modal = ({ imageUrl, closeModal }) => {
  // Close modal if user clicks outside the image
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) closeModal();
  };

  return (
    <div 
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center 
                 bg-black/70 backdrop-blur-md animate-fadeIn p-4"
    >
      <div className="relative w-full max-w-6xl mx-auto flex justify-center items-center">
        {/* Image */}
        <img 
          src={imageUrl} 
          alt="Modal" 
          className="rounded-3xl shadow-2xl object-contain max-h-[95vh] w-full animate-scaleIn border border-gray-200 dark:border-gray-700"
        />

        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute -top-6 -right-6 p-4 rounded-full bg-white dark:bg-gray-800 text-black dark:text-white 
                     shadow-xl hover:scale-110 hover:bg-red-500 hover:text-white
                     transition-transform duration-300"
        >
          <IoMdClose size={24} />
        </button>
      </div>
    </div>
  );
};

export default Modal;
