import React from "react";
import persona from "../assets/Persona/persona1.png";

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
        <section class="bg-white shadow-2xl shadow-Secondary/20 rounded-lg dark:bg-white/5 dark:shadow-none">
          <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">
            <figure class="max-w-screen-md mx-auto">
              <svg
                class="h-12 mx-auto mb-3 text-gray-400 "
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
                <p class=" text-gray-900 dark:text-slate-200">
                  "Landwind is just awesome. It contains tons of predesigned
                  components and pages starting from login screen to complex
                  dashboard. Perfect choice for your next SaaS application."
                </p>
              </blockquote>
              <figcaption class="flex items-center justify-center mt-6 space-x-3">
                <img
                  class="w-12 h-12 rounded-full "
                  src={persona}
                  alt="profile picture"
                />
                <div class="flex items-center divide-x-2 divide-gray-500">
                  <div class="pr-3 font-medium text-gray-900 dark:text-slate-100 ">
                    Micheal Gough
                  </div>
                  <div class="pl-3 text-sm font-light text-gray-500 dark:text-slate-200">
                    CEO at Google
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </section>
        <section class="shadow-Secondary/20 bg-white shadow-lg rounded-lg dark:bg-white/5 dark:shadow-none">
          <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">
            <figure class="max-w-screen-md mx-auto">
              <svg
                class="h-12 mx-auto mb-3 text-gray-400 "
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
                <p class=" text-gray-900  dark:text-slate-200">
                  "Landwind is just awesome. It contains tons of predesigned
                  components and pages starting from login screen to complex
                  dashboard. Perfect choice for your next SaaS application."
                </p>
              </blockquote>
              <figcaption class="flex items-center justify-center mt-6 space-x-3">
                <img
                  class="w-12 h-12 rounded-full"
                  src={persona}
                  alt="profile picture"
                />
                <div class="flex items-center divide-x-2 divide-gray-500">
                  <div class="pr-3 font-medium text-gray-900 dark:text-slate-100 ">
                    Micheal Gough
                  </div>
                  <div class="pl-3 text-sm font-light text-gray-500 dark:text-slate-200">
                    CEO at Google
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </section>
        <section class="shadow-Secondary/20 bg-white shadow-lg rounded-lg dark:bg-white/5 dark:shadow-none">
          <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">
            <figure class="max-w-screen-md mx-auto">
              <svg
                class="h-12 mx-auto mb-3 text-gray-400 "
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
                <p class=" text-gray-900  dark:text-slate-200">
                  "Landwind is just awesome. It contains tons of predesigned
                  components and pages starting from login screen to complex
                  dashboard. Perfect choice for your next SaaS application."
                </p>
              </blockquote>
              <figcaption class="flex items-center justify-center mt-6 space-x-3">
                <img
                  class="w-12 h-12 rounded-full"
                  src={persona}
                  alt="profile picture"
                />
                <div class="flex items-center divide-x-2 divide-gray-500">
                  <div class="pr-3 font-medium text-gray-900 dark:text-slate-100 ">
                    Micheal Gough
                  </div>
                  <div class="pl-3 text-sm font-light text-gray-500 dark:text-slate-200">
                    CEO at Google
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </section>
        <section class="shadow-Secondary/20 bg-white shadow-lg rounded-lg dark:bg-white/5 dark:shadow-none">
          <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">
            <figure class="max-w-screen-md mx-auto">
              <svg
                class="h-12 mx-auto mb-3 text-gray-400 "
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
                <p class=" text-gray-900  dark:text-slate-200">
                  "Landwind is just awesome. It contains tons of predesigned
                  components and pages starting from login screen to complex
                  dashboard. Perfect choice for your next SaaS application."
                </p>
              </blockquote>
              <figcaption class="flex items-center justify-center mt-6 space-x-3">
                <img
                  class="w-12 h-12 rounded-full"
                  src={persona}
                  alt="profile picture"
                />
                <div class="flex items-center divide-x-2 divide-gray-500">
                  <div class="pr-3 font-medium text-gray-900 dark:text-slate-100 ">
                    Micheal Gough
                  </div>
                  <div class="pl-3 text-sm font-light text-gray-500 dark:text-slate-200">
                    CEO at Google
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
