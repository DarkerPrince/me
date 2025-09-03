import React, { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { FiEye, FiChevronLeft, FiChevronRight } from "react-icons/fi";

function GraphixItems({ graphix }) {
  const [imgLoaded, setImageLoaded] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Preload main image
  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.src = graphix.headImg;
  }, [graphix]);

  const openModal = (index = 0) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? graphix.otherImg.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === graphix.otherImg.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      {/* Card */}
      <div
        onClick={() => openModal(0)}
        className="relative w-full max-w-sm rounded-3xl overflow-hidden cursor-pointer group
                   bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow-lg transition-transform duration-300
                   hover:scale-[1.02] hover:shadow-xl"
      >
        {/* Subtle Background Accent */}
        <span className="absolute inset-0 rounded-3xl bg-gray-200/20 dark:bg-gray-700/20 backdrop-blur-sm z-0"></span>

        {/* Image */}
        <div className="overflow-hidden rounded-t-3xl relative">
          <img
            src={graphix.headImg}
            alt={graphix.title}
            className="w-full h-64 object-cover rounded-t-3xl transition-transform duration-500 group-hover:scale-105"
          />

          {/* Eye Icon Overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <FiEye size={32} className="text-white/90 bg-gray-800/50 rounded-full p-2" />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 p-5 flex flex-col gap-3">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {graphix.title}
          </h3>
          {graphix.description && (
            <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3">
              {graphix.description}
            </p>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-1">
            {graphix.tag.map((tag, idx) => (
              <span
                key={idx}
                className="px-2 py-1 rounded-full text-xs font-medium bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          role="dialog"
          aria-modal="true"
        >
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 p-3 rounded-full bg-white text-black shadow-lg hover:scale-110 hover:bg-red-500 hover:text-white transition-transform duration-300 z-50"
            aria-label="Close modal"
          >
            <IoMdClose size={24} />
          </button>

          {/* Main Image */}
          <div className="relative w-full max-w-5xl h-full md:h-auto rounded-3xl overflow-hidden flex items-center justify-center">
            <img
              key={graphix.otherImg[currentIndex]}
              src={graphix.otherImg[currentIndex]}
              alt={`Gallery ${currentIndex + 1}`}
              className="max-h-[80vh] w-auto rounded-2xl object-contain transition-all duration-500 transform scale-95 group-hover:scale-100"
            />

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 text-black p-3 rounded-full shadow-md transition-all duration-300"
            >
              <FiChevronLeft size={32} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 text-black p-3 rounded-full shadow-md transition-all duration-300"
            >
              <FiChevronRight size={32} />
            </button>
          </div>

          {/* Thumbnail Preview */}
          <div className="flex gap-3 mt-4 overflow-x-auto w-full max-w-5xl px-2 py-1">
            {graphix.otherImg.map((img, idx) => (
              <img
                key={idx}
                src={img}
                onClick={() => setCurrentIndex(idx)}
                className={`h-20 w-auto rounded-lg cursor-pointer border-2 transition-all duration-300 ${
                  currentIndex === idx
                    ? "border-pink-500 scale-105"
                    : "border-transparent hover:scale-105"
                }`}
              />
            ))}
          </div>

          {/* Counter */}
          <div className="mt-2 text-white/80 text-sm">
            {currentIndex + 1} / {graphix.otherImg.length}
          </div>
        </div>
      )}
    </>
  );
}

export default GraphixItems;
