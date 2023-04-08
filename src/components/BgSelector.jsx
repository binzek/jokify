import React from "react";

const BgSelector = () => {
  return (
    <div className="flex justify-center mb-auto mt-4">
      <div className="cursor-pointer w-8 h-8 lg:w-10 lg:h-10 bg-gradient-radial from-yellow-400 to-orange-500 rounded-full border mx-2 border-black"></div>
      <div className="cursor-pointer w-8 h-8 lg:w-10 lg:h-10 bg-gradient-radial from-green-300 to-green-600 rounded-full border mx-2 border-black"></div>
      <div className="cursor-pointer w-8 h-8 lg:w-10 lg:h-10 bg-gradient-radial from-sky-300 to-blue-500 rounded-full border mx-2 border-black"></div>
      <div className="cursor-pointer w-8 h-8 lg:w-10 lg:h-10 bg-gradient-radial from-pink-300 to-rose-500 rounded-full border mx-2 border-black"></div>
    </div>
  );
};

export default BgSelector;
