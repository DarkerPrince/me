
import { FiFigma } from "react-icons/fi";
import { PiBehanceLogo } from "react-icons/pi";
import { FaDribbble } from "react-icons/fa";
// import { TbBrandTailwind } from "react-icons/tb";

export default function ServiceCard() {
  return (
    <div className="relative bottom-0 min-w-[350px] max-w-[400px] ">
      {/* Folder-shaped card (reversed + diagonal tab) */}
      <div
        className="bg-indigo-50 border rounded-lg border-gray-300 shadow-sm p-4 pl-5 pr-12 relative"
        style={{
          clipPath:
            // Start at top-left → straight across → cut down diagonal tab on right → rectangle
            "polygon(0 0, 70% 0, 75% 20%, 100% 20%, 100% 100%, 0 100%)",
        }}
      >
        {/* Title */}
        <h3 className="text-gray-800 font-semibold text-sm mb-2">
          UI/UX Design Projects
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-xs italic">
          Simple Clean and User Friendly
        </p>
        <p className="text-gray-600 text-xs italic">
          Using Figma
        </p>

        {/* Icon Right */}
        <div className="absolute flex gap-2 top-1/2 right-4 -translate-y-1/2 text-gray-700">
          <FiFigma className="w-6 h-6" />
          <PiBehanceLogo className="w-6 h-6" />
          <FaDribbble className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
}
