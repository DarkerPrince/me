import React, { useState } from 'react';

const Modal = ({ imageUrl, closeModal }) => {
  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="flex flex-col items-center relative">
        <img src={imageUrl} alt="Modal Image" className="w-2/3" />
        <button
          onClick={closeModal}
          className="mt-4 px-4 py-2 bg-Primary text-white rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;