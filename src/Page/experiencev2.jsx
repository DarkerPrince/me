import { useState } from "react";

// Company Logos
export const Kemer = "https://i.ibb.co/72b9wBg/kemer.png";
export const Negat = "https://i.ibb.co/QQ18PTD/negat.png";
export const AIT = "https://i.ibb.co/KsKZdvy/AIT.png";
export const Kibur = "https://i.ibb.co/vDWHnsx/kibur.jpg";
export const SSC = "https://i.ibb.co/SsNGb7k/SSC.png";
export const LMIS = "https://i.ibb.co/ckC8bNS/elmis.png";
export const AHRI = "https://i.ibb.co/6sXHWv8/AHRI.jpg";
export const TYK = "https://i.ibb.co/FV7xH8P/TYK.png";

// Experience Data
const experiences = [
  {
    id: 1,
    logo: SSC,
    company: "Ethio AI",
    title: "Senior UI Designer",
    date: "June 12, 2024 - Aug 14, 2025",
    description:
      "Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects. Provide leadership within engineering department through collaboration and knowledge sharing.",
    links: ["Link 1", "Link 2"],
    skills: ["Figma", "React", "Tailwind"],
  },
  {
    id: 2,
    logo: Kemer,
    company: "Ministry of Labor and Skill",
    title: "Senior UI/UX Designer and Frontend Developer",
    date: "Jan 2023 - May 2024",
    description:
      "Developed user interfaces, optimized performance, and collaborated with designers to deliver responsive applications.",
    links: ["Portfolio", "Github"],
    skills: ["JavaScript", "Next.js", "TypeScript"],
  },
  {
    id: 5,
    logo: Negat,
    company: "Negat Technologies",
    title: "Senior UI/UX Designer",
    date: "Aug 2022 - Dec 2022",
    description:
      "Designed mobile-first interfaces and user experiences, conducted usability testing, and improved accessibility.",
    links: ["Behance", "Dribbble"],
    skills: ["Sketch", "Adobe XD", "Illustrator"],
  },
  {
    id: 3,
    logo: AIT,
    company: "AIT Technologies",
    title: "UI/UX Designer",
    date: "Aug 2022 - Dec 2022",
    description:
      "Designed mobile-first interfaces and user experiences, conducted usability testing, and improved accessibility.",
    links: ["Behance", "Dribbble"],
    skills: ["Sketch", "Adobe XD", "Illustrator"],
  },
  {
    id: 4,
    logo: Kibur,
    company: "Kibur College",
    title: "UI/UX Designer",
    date: "Aug 2022 - Dec 2022",
    description:
      "Designed mobile-first interfaces and user experiences, conducted usability testing, and improved accessibility.",
    links: ["Behance", "Dribbble"],
    skills: ["Sketch", "Adobe XD", "Illustrator"],
  }
];

function Experience() {
  const [selected, setSelected] = useState(experiences[0]);

  return (
    <div
      id="experience"
      className="w-full mt-12 py-6 flex flex-col text-white justify-center rounded-3xl mx-auto px-4 lg:px-12 items-center sm:py-12"
    >
      <p className="text-2xl font-bold mb-12">My Work Experience</p>

      <div className="flex flex-col md:flex-row w-full gap-6">
        {/* Sidebar */}
        <div className="flex flex-col gap-3 md:w-1/3">
          {experiences.map((exp) => (
            <button
              key={exp.id}
              onClick={() => setSelected(exp)}
              className={`flex gap-3 items-center w-full p-3 rounded-xl transition 
              ${
                selected.id === exp.id
                  ? "bg-blue-500/20 border border-blue-400 text-blue-300"
                  : "bg-white/5 hover:bg-white/10 text-gray-300"
              }`}
            >
              <img
                src={exp.logo}
                alt={exp.company}
                className="w-[40px] h-[40px] object-contain"
              />
              <div className="flex flex-col text-left">
                <p className="font-semibold">{exp.company}</p>
                <p className="text-xs text-gray-400">{exp.date}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="flex flex-col bg-white/10 rounded-xl p-6 md:w-2/3">
          <div className="flex items-center gap-3 mb-4">
            <img
              src={selected.logo}
              alt={selected.company}
              className="w-[50px] h-[50px] object-contain rounded-md bg-white/20"
            />
            <div>
              <p className="text-xl font-bold">{selected.title}</p>
              <p className="text-sm text-gray-400">{selected.company}</p>
            </div>
          </div>

          <p className="text-sm mb-4">{selected.description}</p>

          {/* Links */}
          <div className="flex flex-row gap-4 mb-4">
            {selected.links.map((link, i) => (
              <a key={i} href="#" className="text-blue-400 hover:underline">
                {link}
              </a>
            ))}
          </div>

          {/* Skills */}
          <div className="flex flex-wrap gap-3">
            {selected.skills.map((skill, i) => (
              <div
                key={i}
                className="px-4 py-1 bg-blue-500/20 rounded-full text-blue-300 text-sm"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
