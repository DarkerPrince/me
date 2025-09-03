import React from "react";

function Typography({ primary, paletts }) {
  const gradientStyle = {
    background: `linear-gradient(135deg, ${primary}, ${paletts[0]})`,
  };

  return (
    <div
      style={gradientStyle}
      className="col-span-2 rounded-2xl p-6 shadow-md transition-all duration-300"
    >
      <div className="flex flex-col gap-6">
        {/* Header */}
        <div className="flex flex-col items-start">
          <p className="text-3xl font-extrabold text-slate-900 dark:text-slate-100">
            Typography
          </p>
          <div className="w-1/3 border-b-4 border-slate-800 dark:border-slate-100 rounded-md"></div>
        </div>

        {/* Typography Showcase */}
        <div className="flex flex-col xl:flex-row items-center gap-6 mb-6 bg-slate-50 dark:bg-slate-900/40 p-6 rounded-xl shadow-inner">
          {/* Big Font Preview */}
          <div className="flex flex-col items-center">
            <p className="text-8xl md:text-9xl font-extrabold text-slate-800 dark:text-slate-100">
              Aa
            </p>
            <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300">
              Poppins
            </p>
          </div>

          {/* Alphabet & Weights */}
          <div className="flex gap-8 bg-slate-100/60 dark:bg-slate-800/50 rounded-xl items-center p-4 md:p-8">
            {/* Alphabet */}
            <div className="flex flex-col justify-center text-slate-700 dark:text-slate-300">
              <p className="text-sm md:text-base font-medium">
                A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
              </p>
              <p className="lowercase text-sm md:text-base">
                a b c d e f g h i j k l m n o p q r s t u v w x y z
              </p>
            </div>

            {/* Weights */}
            <div className="flex flex-col text-slate-800 dark:text-slate-100">
              <p className="font-bold">Bold</p>
              <p className="font-semibold">Semibold</p>
              <p className="font-medium">Medium</p>
              <p className="">Regular</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Typography;
