import React from "react";

import { fetchJoke } from "../utils/fetchJoke";

const NewJokeBtn = ({ setJoke }) => {
  return (
    <p
      className="mb-20 font-mansalva text-center text-xl cursor-pointer hover:drop-shadow-md duration-200 font-normal"
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
