import React, { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";
import Modal from "../SubPages/Details Component/imagePreview";

function ShowcaseItem({ showImg, blurHash }) {
  const [imgLoaded, setImageLoaded] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.src = showImg;
  }, [showImg]);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <div className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg">
        {/* Blurhash placeholder */}
        {!imgLoaded && (
          <div className="w-full h-56 rounded-lg overflow-hidden">
            <Blurhash
              hash={blurHash}
              width={"100%"}
              height={224}
              resolutionX={32}
              resolutionY={32}
              punch={1}
            />
          </div>
        )}

        {/* Main Image */}
        <img
          src={showImg}
          alt="Showcase"
          className={`w-full h-56 object-cover rounded-lg transition-transform duration-500 ease-out ${
            imgLoaded ? "opacity-100" : "opacity-0"
          } transform group-hover:scale-105 group-hover:brightness-110`}
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/25 dark:bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={openModal}
            className="px-4 py-2 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-white font-semibold shadow-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
          >
            View
          </button>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && <Modal imageUrl={showImg} closeModal={closeModal} />}
    </>
  );
}

export default ShowcaseItem;
