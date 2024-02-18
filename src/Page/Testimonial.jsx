import React from "react";

import persona from "../assets/Persona/persona1.png";
import persona1 from "../assets/Persona/persona2.png";
import persona2 from "../assets/Persona/persona3.png";
import persona3 from "../assets/Persona/persona4.png";
function Testimonial() {
  return (
    <div className="my-12 px-4 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center">
        <p className="font-extrabold text-transparent text-2xl md:text-3xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          {" "}
          Testimonial
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 mt-4">
        <section className="bg-white shadow-2xl shadow-Secondary/20 rounded-lg dark:bg-white/5 dark:shadow-none">
          <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">
            <figure className="max-w-screen-md mx-auto">
              <svg
                className="h-12 mx-auto mb-3 text-gray-400 "
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                ></path>
              </svg>
              <blockquote>
                <p className=" text-gray-500  dark:text-slate-400 font-leuleScri">
                  "Luel is the best! His designs are amazing, and his coding
                  skills are top-notch. Highly recommend him for UI/UX design,
                  front-end development, and mobile app development."
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center mt-6 space-x-3">
                <img
                  className="w-12 h-12 rounded-full "
                  src={persona}
                  alt="profile picture"
                />
                <div className="flex items-center divide-x-2 divide-gray-500">
                  <div className="pr-3 font-medium text-gray-900 dark:text-slate-100 ">
                    MR. Daniel Hailu
                  </div>
                  <div className="pl-3 text-sm font-light text-gray-500 dark:text-slate-200">
                    CEO at AIT Tech
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </section>
        <section className="shadow-Secondary/20 bg-white shadow-lg rounded-lg dark:bg-white/5 dark:shadow-none">
          <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">
            <figure className="max-w-screen-md mx-auto">
              <svg
                className="h-12 mx-auto mb-3 text-gray-400 "
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                ></path>
              </svg>
              <blockquote>
                <p className=" text-gray-500  dark:text-slate-400 font-leuleScri">
                  "Luel My G is a highly skilled professional in UI/UX design,
                  front-end development, and mobile app development. His designs
                  are impressive, and his coding is top-notch. Highly
                  recommended!
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center mt-6 space-x-3">
                <img
                  className="w-12 h-12 rounded-full"
                  src={persona1}
                  alt="profile picture"
                />
                <div className="flex items-center divide-x-2 divide-gray-500">
                  <div className="pr-3 font-medium text-gray-900 dark:text-slate-100 ">
                    Dr. Meaza Seyoum
                  </div>
                  <div className="pl-3 text-sm font-light text-gray-500 dark:text-slate-200">
                    Client
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </section>
        <section className="shadow-Secondary/20 bg-white shadow-lg rounded-lg dark:bg-white/5 dark:shadow-none">
          <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">
            <figure className="max-w-screen-md mx-auto">
              <svg
                className="h-12 mx-auto mb-3 text-gray-400 "
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                ></path>
              </svg>
              <blockquote>
                <p className=" text-gray-00  dark:text-slate-400 font-leuleScri">
                  "Lula stands out for his excellent client handling and
                  communication. He keeps clients informed and involved,
                  resulting in a seamless working relationship. His exceptional
                  design and development expertise shine through in every
                  project."
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center mt-6 space-x-3">
                <img
                  className="w-12 h-12 rounded-full"
                  src={persona2}
                  alt="profile picture"
                />
                <div className="flex items-center divide-x-2 divide-gray-500">
                  <div className="pr-3 font-medium text-gray-900 dark:text-slate-100 ">
                    MR. Simon Daniel
                  </div>
                  <div className="pl-3 text-sm font-light text-gray-500 dark:text-slate-200">
                    CEO at Kemer
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </section>
        <section className="shadow-Secondary/20 bg-white shadow-lg rounded-lg dark:bg-white/5 dark:shadow-none">
          <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">
            <figure className="max-w-screen-md mx-auto">
              <svg
                className="h-12 mx-auto mb-3 text-gray-400 "
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                ></path>
              </svg>
              <blockquote>
                <p className=" text-gray-500  dark:text-slate-400 font-leuleScri">
                  Luel is a reliable professional who consistently delivers
                  UI/UX projects and code on time. His promptness in addressing
                  fixes ensures a smooth development process and client
                  satisfaction."
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center mt-6 space-x-3">
                <img
                  className="w-12 h-12 rounded-full"
                  src={persona3}
                  alt="profile picture"
                />
                <div className="flex items-center divide-x-2 divide-gray-500">
                  <div className="pr-3 font-medium text-gray-900 dark:text-slate-100 ">
                    Miss. Melat Andom
                  </div>
                  <div className="pl-3 text-sm font-light text-gray-500 dark:text-slate-200">
                    CEO at Andom Const.
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Testimonial;
