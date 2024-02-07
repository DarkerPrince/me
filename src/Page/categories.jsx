import React from "react";

import VisualItem from "./Components/CategoryItems/visualItem";
import UiItems from "./Components/CategoryItems/UiItems";
import Frontend from "./Components/CategoryItems/Frontend";
import Mobileapp from "./Components/CategoryItems/Mobileapp";

// bg-gradient-to-br from-Primary to-Secondary
function Categories() {
  return (
    <div className="rounded-3xl my-12 p-4 lg:p-12 flex flex-col justify-between overflow-clip">
      <p className="text-4xl font-bold mb-6 lg:mb-12 text-center bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 dark:text-slate-200">
        Proud Ethiopian <br /> with expertise in the fields
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <UiItems />

        <VisualItem />

        <Frontend />

        <Mobileapp />
      </div>
    </div>
  );
}

export default Categories;
