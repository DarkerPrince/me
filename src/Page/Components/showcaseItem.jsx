import React, { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";
import Modal from "../SubPages/Details Component/imagePreview";

function ShowcaseItem({ showImg, blurHash }) {
  const [imgLoaded, setImageLoaded] = useState(false);
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = showImg;
  }, [showImg]);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState("");

  const openModal = (imageUrl) => {
    setSelectedImageUrl(imageUrl);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImageUrl("");
    setModalOpen(false);
  };

  return (
    <div className={`group cursor-pointer relative`}>
      <div
        style={{
          display: imgLoaded ? "none" : "inline",
        }}
        className=""
      >
        <div className="rounded-md overflow-clip w-full h-56 object-cover">
          <Blurhash
            hash={blurHash}
            width={300}
            height={300}
            resolutionX={32}
            resolutionY={32}
            punch={1}
          />
        </div>
      </div>
      <img
        id="Image"
        src={showImg}
        alt="Image 1"
        style={{ display: !imgLoaded ? "none" : "inline" }}
        className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          className="bg-white/25 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
          onClick={() => openModal(showImg)}
        >
          View
        </button>
      </div>
      {/* Render the modal if it's open */}
      {modalOpen && (
        <Modal imageUrl={selectedImageUrl} closeModal={closeModal} />
      )}
    </div>
  );
}

export default ShowcaseItem;
