import React, { useEffect, useState } from "react";

import { fetchJoke } from "../utils/fetchJoke";

const JokeCard = () => {
  const [joke, setJoke] = useState("Loading...");

  useEffect(() => {
    fetchJoke().then((res) => setJoke(res.joke));
  }, []);

  return (
    <div className="bg-white/50 w-11/12 md:w-3/4 lg:w-3/5 xl:w-1/2 mx-auto px-5 py-2.5 rounded-2xl border-2 border-b-8 border-r-8 border-black -mt-4">
      <p className="text-center font-vt323 text-xl lg:text-2xl">{joke}</p>
    </div>
  );
};

export default JokeCard;
