import React from "react";
import photo1 from "../../../assets/Persona/persona1.png";
import photo2 from "../../../assets/Persona/persona2.png";
import photo3 from "../../../assets/Persona/persona3.png";
import photo4 from "../../../assets/Persona/persona4.png";
import photo5 from "../../../assets/Persona/persona5.png";
import photo6 from "../../../assets/Persona/persona6.png";
import photo7 from "../../../assets/Persona/persona7.png";
import photo8 from "../../../assets/Persona/persona8.png";
import { PieChart } from "react-minimal-pie-chart";

function PersonaItem({ persona, index }) {
  var imagesAvatar = [
    photo1,
    photo2,
    photo3,
    photo4,
    photo5,
    photo6,
    photo7,
    photo8,
  ];
  return (
    <div className=" shadow-xl bg-white hover:z-10 hover:scale-125 duration-300 ease-in-out h-full transition-all hover:shadow-2xl  dark:bg-white/20 rounded-xl flex flex-col p-4 gap-2">
      <p className="text-xl font-bold">"Personal Quotes"</p>
      <div className="flex gap-2">
        <div className="flex flex-col gap-2 items-center">
          <div className="flex flex-col gap-1 items-start">
            <img
              src={imagesAvatar[index]}
              alt=""
              srcset=""
              className=" h-32 w-48 object-cover object-top rounded-lg"
            />
            <p className="text-Primary font-semibold">{persona.name}</p>
            <div className="flex flex-col text-sm text-slate-600  items-start dark:text-slate-200 gap-4">
              <div className="flex flex-col w-full justify-between">
                <p className="text-slate-500">Education</p>
                <p className="font-bold">Degree</p>
              </div>
              <div className="flex flex-col w-full justify-between">
                <p className="text-slate-500">Age</p>
                <p className="font-bold">{persona.age} years old</p>
              </div>
              <div className="flex flex-col w-full justify-between">
                <p className="text-slate-500">Location</p>
                <p className="font-bold">Addis A.</p>
              </div>
              <div className="flex flex-col w-full justify-between">
                <p className="text-slate-500">Occupation</p>
                <p className="font-bold">Employed</p>
              </div>
              <div className="flex flex-col w-full justify-between">
                <p className="text-slate-500">Maritial Stat</p>
                <p className="font-bold">Engaged</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-[500px]">
          <div className="flex flex-col p-2 bg-slate-100 dark:bg-slate-100/20 rounded-lg">
            <p className="text-sm font-semibold text-slate-400 dark:text-slate-100">
              Biography
            </p>
            <p className="text-sm">{persona.about}</p>
          </div>
          <div className="flex flex-col p-2 bg-slate-100 dark:bg-slate-100/20 rounded-lg">
            <p className="text-sm font-semibold text-slate-400 dark:text-slate-100">
              Goal / Objective
            </p>
            <p className="text-sm">{persona.goal}</p>
          </div>
          <div className="flex flex-col p-2 bg-slate-100 dark:bg-slate-100/20  rounded-lg">
            <p className="text-sm font-semibold text-slate-400 dark:text-slate-100">
              Frustration / Pain points
            </p>
            <p className="text-sm">{persona.frustration}</p>
          </div>
          <div className="flex gap-4 h-full">
            <div className="flex flex-col p-2 w-1/2 bg-slate-100 dark:bg-slate-100/20 rounded-lg">
              <p className="text-sm font-semibold text-slate-400 dark:text-slate-100">
                Social Media
              </p>
              <PieChart data={persona.tech} />
              {/* {persona.socialMedia.map((item) => {
                console.log(item);
                return (
                  <div className="flex gap-2">
                    <p className="text-sm">{item.title}</p>{" "}
                    <p className="text-sm">{item.value}%</p>
                  </div>
                );
              })} */}
            </div>
            <div className="flex flex-col p-2 w-1/2 bg-slate-100 dark:bg-slate-100/20 rounded-lg">
              <p className="text-sm font-semibold text-slate-400 dark:text-slate-100">
                Technologies
              </p>
              {persona.tech.map((item) => {
                console.log(item);
                return (
                  <div className="flex gap-2">
                    <p className="text-sm">{item.device}</p>
                    <p className="text-sm">{item.usage}%</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonaItem;
