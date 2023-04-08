import React from "react";

import { fetchJoke } from "../utils/fetchJoke";

const NewJokeBtn = ({ setJoke }) => {
  return (
    <p
      className="font-mansalva mb-auto text-center mt-3 lg:mt-4 text-xl cursor-pointer hover:drop-shadow-md duration-200 font-normal"
      onClick={() => {
        setJoke("Loading...");
        fetchJoke()
          .then((res) => setJoke(res.joke))
          .catch(() => setJoke("Something fishy... Cannot fetch joke"));
      }}
    >
      Get a New Joke
    </p>
  );
};

export default NewJokeBtn;
