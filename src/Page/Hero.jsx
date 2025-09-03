import heroImg from "../assets/hero.png";
import { AiFillBehanceCircle } from "react-icons/ai";
import { TbBrandDribbbleFilled } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import FunButton from "./Components/ContactmeButton";



function HeroSection() {
  // const handleEmailClick = (e) => {
  //   e.preventDefault();
  //   window.location.href = "mailto:princemagiv@gmail.com";
  // };

  return (
    <div className=" flex flex-col-reverse items-center justify-center  ">
      <div className="flex flex-col gap-2 items-center justify-center ">
        <h1 className="text-4xl  lg:text-6xl font-extrabold  md:text-center dark:text-slate-200">
          Leul Sisay G.
        </h1>
        <p className="text-center text-slate-400 mb-6">
          UI/UX and Visual Designer | Front end & Mobile App Developer
        </p>
        <p className="text-center dark:text-slate-200 md:text-xl">
          I am a Senior UI designer and Front-End Engineer at Negat,
          specializing in accessibility. I contribute to the creation and
          maintenance of UI components that power Negat frontend, ensuring
          our platform meets web accessibility standards and best practices to
          deliver an inclusive user experience.
          </p>
        <div className="flex gap-4 mt-4 md:mt-6 z-10 mb-4">
          <a href="https://www.behance.net/luel_sisay">
            <AiFillBehanceCircle className="text-slate-500 hover:text-Primary transition-colors duration-300 text-3xl" />
          </a>
          <a href="https://dribbble.com/PrinceMag">
            <TbBrandDribbbleFilled className="text-slate-500 hover:text-Primary transition-colors duration-300 text-3xl" />
          </a>
          <a href="mailto:luelsisay42@gmail.com">
            <MdAttachEmail className="text-slate-500 hover:text-Primary transition-colors duration-300 text-3xl" />
          </a>
          <a href="https://github.com/DarkerPrince">
            <div className="border-l border-gray-300 pl-4">
              <FaGithub className="text-slate-500 hover:text-Primary transition-colors duration-300 text-3xl" />
            </div>
          </a>
        </div>
        <FunButton />
      </div>
      <img src={heroImg} alt="hero" className="xl:w-1/2 z-10" />
    </div>
  );
}

export default HeroSection;
