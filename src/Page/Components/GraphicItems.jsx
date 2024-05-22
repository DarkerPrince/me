import React, { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import ImageGallery from "react-image-gallery";
import DesignImagesModal from "../SubPages/Details Component/Graphs/ModalGraphix";

function GraphixItems({ graphix, key }) {
  const [imgLoaded, setImageLoaded] = useState(false);
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = graphix;
  }, [graphix]);

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
  var imagePreview = graphix.otherImg[0];

  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];

  return (
    <div className="relative max-w-sm rounded-lg shadow h-64 w-full">
      <img
        className="rounded-lg w-full h-64 object-cover"
        src={graphix.headImg}
        alt={graphix.title}
      />
      <div className="felx flex-row bg-gradient-to-t from-black to-transparent p-4 absolute bottom-0 rounded-b-lg  w-full">
        <div className="flex flex-col bg-black/30 backdrop-blur-lg p-2 rounded relative">
          <h5 className="font-semibold text-lg tracking-tight text-white">
            {graphix.title}
          </h5>

          <div className=" flex text-sm flex-wrap gap-3 mt-2">
            {graphix.tag.map((tag) => {
              return (
                <div className="text-bg rounded-sm px-2 text-xs bg-slate-600 text-slate-50">
                  {tag}
                </div>
              );
            })}
          </div>
        </div>
        <button
          className="border border-pink-500 hover:border-pink-700 bg-transparent hover:bg-pink-500 hover:text-white text-pink-50 font-medium py-1 px-4 mt-3 rounded"
          type="button"
          onClick={() => openModal(graphix.headImg)}
        >
          View Items
        </button>
      </div>
      {modalOpen && (
        <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="flex flex-col items-center relative h-full">
            {/* <img
              src={graphix.headImg}
              alt="Modal Image"
             
            /> */}

            <div>
              <DesignImagesModal imagesList={graphix.otherImg} />
            </div>
            <button
              onClick={closeModal}
              className="my-6 mx-3 px-2 py-2 bg-Primary text-white shadow-sm top-0 right-6 absolute z-20 rounded-full"
            >
              <IoMdClose />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default GraphixItems;
