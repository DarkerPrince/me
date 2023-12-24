import React from "react";
import logo from "../assets/mylogo.svg";
import { MdDarkMode } from "react-icons/md";
import { IoMdSunny } from "react-icons/io";
import "../App.css"
import { useEffect ,useState } from 'react';

function Navigator() {
  const [theme ,setTheme] = useState("light");

  useEffect(()=>{
    if(theme === "dark"){
      document.documentElement.classList.add("dark");
    }else{
      document.documentElement.classList.remove("dark");
    }
  },[theme])

  const handleThemeSwitch = () =>{
    setTheme(theme === "dark"?"light":"dark");
    console.log(`The THeme mode is => ${theme}`);
  }
  

  return (
    <div className="backdrop-blur-lg bg-white/20 self-center rounded-md px-4 py-2 mt-6 shadow-lg flex items-center justify-between w-full">
      <img src={logo} alt="Logo" className="h-16 w-16  object-cover" />
      <div className="flex gap-4 items-center">
        <a href="#" class="group text-sky-600 transition duration-300">
          Work
          <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
        </a>
        <a href="#" class="group text-sky-600 transition duration-300">
          Blogs
          <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
        </a>
        <a href="#" class="group text-sky-600 transition duration-300">
          Contact me
          <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
        </a>
        
        <button onClick={handleThemeSwitch}>{theme==='dark'?<MdDarkMode/>:<IoMdSunny/>}</button>
        
      </div>
    </div>
  );
}

export default Navigator;
