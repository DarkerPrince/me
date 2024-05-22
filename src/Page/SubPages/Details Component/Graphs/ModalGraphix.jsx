import { MdCommentBank } from "react-icons/md";
import { useParams } from "react-router-dom";
import { useState } from "react";

function DesignImagesModal({ imagesList }) {
  const params = useParams();
  const [imgindex, setImgIndex] = useState(0);
  const id = params.id - 1;

  return (
    <div className=" flex justify-center text-white h-screen w-screen mx-auto items-center flex-col">
      <img
        className="flex h-2/3  object-contain"
        src={`${imagesList[imgindex]}`}
        alt="Ding design"
      />
      <div className=" flex items-center justify-center">
        <div className="flex flex-row  h-full object-cover  mt-2 space-x-2 w-1/2">
          {imagesList.map((pics, index) => (
            <div
              className={`flex lg:h-full w-48 lg:rounded-md mt-2 ${
                imgindex === index
                  ? "border-solid border-2 border-Primary overflow-clip"
                  : "opacity-50"
              }`}
              key={index}
              onClick={() => {
                setImgIndex(index);
                console.log("Change the image index", index);
              }}
            >
              <img className="object-cover" src={pics} alt={""} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DesignImagesModal;
