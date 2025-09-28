import { useState, useEffect } from "react";

function Experience() {
  const [experiences, setExperiences] = useState([]);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Replace with your backend API endpoint
    fetch("https://portfolio-backend-gaxc.vercel.app/experience")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch experiences");
        return res.json();
      })
      .then((data) => {
        setExperiences(data);
        setSelected(data[0]); // Select first experience by default
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center mt-12">Loading experiences...</p>;
  if (error) return <p className="text-center mt-12 text-red-500">{error}</p>;

  return (
    <div
      id="experience"
      className="w-full mt-12 py-6 flex flex-col dark:text-slate-200 justify-center rounded-3xl mx-auto px-4 lg:px-12 items-center sm:py-12"
    >
      <p className="text-2xl font-bold mb-12">My Work Experience</p>

      <div className="flex flex-col md:flex-row w-full gap-6 ">
        {/* Sidebar */}
        <div className="flex flex-col gap-3 md:w-1/3 shrink-0 relative z-20 ">
          {experiences.map((exp) => (
            <button
              key={exp.id}
              onClick={() => setSelected(exp)}
              className={`flex gap-3 items-center w-full p-3 rounded-lg transition duration-300
              ${
                selected?.id === exp.id
                  ? "bg-Primary/5 border gradient-border text-Primary"
                  : "bg-white/5 hover:bg-white/10 border border-slate-400/10 text-gray-300"
              }`}
            >
              <img
                src={exp.logo}
                alt={exp.company}
                className="w-[40px] h-[40px] object-contain shadow-lg border p-1 bg-white rounded-md"
              />
              <div className="flex flex-col text-left">
                <p className="font-semibold text-slate-500">{exp.company}</p>
                <p className="text-xs text-gray-400">{exp.date}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Content Area */}
        {selected && (
          <div className="flex flex-col dark:bg-white/5 bg-[#f8f8f8] border border-slate-400/10 rounded-lg p-6 md:w-2/3">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={selected.logo}
                alt={selected.company}
                className="w-[50px] h-[50px] object-contain  rounded-md bg-white border"
              />
              <div>
                <p className="text-xl font-bold">{selected.title}</p>
                <p className="text-sm text-gray-400">{selected.company}</p>
              </div>
            </div>

            <p className="text-sm mb-4">{selected.description}</p>

            {/* Skills */}
            <div className="flex flex-wrap gap-3">
              {selected.skills.map((skill, i) => (
                <div
                  key={i}
                  className="px-4 py-1 bg-Primary/5 rounded-full border-1 border-x-slate-400 shadow-md text-Primary text-sm"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Experience;
