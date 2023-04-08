import React from "react";

const BgSelector = ({ setBgColor }) => {
  const colors = [
    "from-yellow-400 to-orange-500",
    "from-green-300 to-green-600",
    "from-sky-200 to-blue-600",
    "from-pink-300 to-rose-500",
  ];

  return (
    <div className="flex justify-center mb-auto mt-4">
      <div
        className={`cursor-pointer w-8 h-8 lg:w-10 lg:h-10 bg-gradient-radial ${colors[0]} rounded-full border mx-2 border-black`}
        onClick={() => setBgColor(colors[0])}
      ></div>
      <div
        className={`cursor-pointer w-8 h-8 lg:w-10 lg:h-10 bg-gradient-radial ${colors[1]} rounded-full border mx-2 border-black`}
        onClick={() => setBgColor(colors[1])}
      ></div>
      <div
        className={`cursor-pointer w-8 h-8 lg:w-10 lg:h-10 bg-gradient-radial ${colors[2]} rounded-full border mx-2 border-black`}
        onClick={() => setBgColor(colors[2])}
      ></div>
      <div
        className={`cursor-pointer w-8 h-8 lg:w-10 lg:h-10 bg-gradient-radial ${colors[3]} rounded-full border mx-2 border-black`}
        onClick={() => setBgColor(colors[3])}
      ></div>
    </div>
  );
};

export default BgSelector;
