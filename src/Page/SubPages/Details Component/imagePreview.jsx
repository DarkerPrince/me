import React from 'react';
import { IoMdClose } from "react-icons/io";

const Modal = ({ imageUrl, closeModal }) => {
  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="flex flex-col items-center relative h-full">
        <img src={imageUrl} alt="Modal Image" className="h-full object-contain" />
        <button
          onClick={closeModal}
          className="my-6 mx-3 px-2 py-2 bg-Primary text-white shadow-sm top-0 right-6 absolute z-20 rounded-full"
        >
          <IoMdClose/>
        </button>
      </div>
    </div>
  );
};

export default Modal;