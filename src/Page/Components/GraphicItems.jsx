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
      className="group relative w-full max-w-sm h-[360px] rounded-3xl overflow-hidden cursor-pointer 
                 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow-lg transition-all duration-500 
                 hover:scale-[1.03] hover:shadow-2xl"
    >
      {/* Image */}
      <img
        src={graphix.headImg}
        alt={graphix.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-110"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/80 opacity-90 group-hover:opacity-100 transition-opacity duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]" />

      {/* Eye Icon */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <FiEye size={36} className="text-white/90 bg-black/50 rounded-full p-2" />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 p-6 text-white translate-y-[55%] group-hover:translate-y-3 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]">
        <h3 className="text-xl font-semibold mb-6">{graphix.title}</h3>

        {graphix.description && (
          <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-3">
            {graphix.description}
          </p>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
          {graphix.tag.map((tag, idx) => (
            <span
              key={idx}
              className="px-2 py-1 rounded-full text-xs font-medium bg-white/20 backdrop-blur-sm"
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
