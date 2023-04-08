import React from "react";

const JokeCard = ({ joke }) => {
  return (
    <div className="-mb-20 bg-white/50 w-11/12 md:w-3/4 lg:w-3/5 xl:w-1/2 mx-auto px-5 py-2.5 rounded-2xl border-2 border-b-8 border-r-8 border-black">
      <p className="text-center font-vt323 text-xl lg:text-2xl">{joke}</p>
    </div>
  );
};

export default JokeCard;
