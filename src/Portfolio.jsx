import React from "react";
import HeroSection from "./Page/Hero";
import Skills from "./Page/skills";
import Categories from "./Page/categories";
import Showcase from "./Page/showcase";
import Certification from "./Page/certification";
import Testimonial from "./Page/Testimonial";
import Experience from "./Page/experience";
import Footer from "./Page/footer";
import Navigator from "./Page/Navigator";
import background from "./assets/background.png";
import { useEffect, useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { IoMdSunny } from "react-icons/io";

function Portfolio() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    console.log(`The THeme mode is => ${theme}`);
  };

  return (
    <div className={`${theme}`}>
      <div className="w-full bg-[#fdfbf6] dark:bg-[#121212] ">
        <div className="relative flex flex-col items-center lg:max-w-[900px] justify-center  font-leuleAfa self-center mx-auto px-4">
          <img src={background} alt="back" className="absolute top-0 z-" />
          <div className="text-white absolute top-0 right-0 w-full h-screen">
            <button
              className=" p-4 text-lg shadow-md rounded-full backback fixed bottom-6 right-6"
              onClick={handleThemeSwitch}
            >
              {theme === "dark" ? <IoMdSunny /> : <MdDarkMode />}
            </button>
          </div>
          <Navigator />
          <HeroSection />
          <Skills />
          <Categories />
          <Showcase />
          <Experience />
          <Certification />
          <Testimonial />
          <Footer />
          <img
            src={background}
            alt="back"
            className="absolute rotate-180 opacity-50 mx-auto bottom-0 -z-"
          />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
