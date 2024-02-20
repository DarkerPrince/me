import React from "react";
import { Certificates } from "../assets/Files/files";

function Certification() {
  return (
    <div className="my-12 lg:p-12 flex flex-col items-center justify-center">
      <div className=" flex flex-col  items-center lg:w-2/3">
        <p className="font-extrabold text-transparent text-2xl md:text-3xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          {" "}
          Certification
        </p>
        <p className="text-xs md:text-sm text-center dark:text-slate-200">
          UI/UX Education & Certs: Design degrees, cool certifications, and
          specialized training.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 my-4 items-center justify-center">
        {Certificates.map((cert) => {
          return (
            <img
              src={cert.imageID}
              alt="Certificate"
              className=" bg-green-200 bg-contain object-cover w-full  rounded-lg h-56"
            />
          );
        })}
      </div>
    </div>
  );
}

export default Certification;
