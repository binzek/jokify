import React, { useEffect, useState } from "react";

import JokeCard from "./components/JokeCard";
import NewJokeBtn from "./components/NewJokeBtn";
import BgSelector from "./components/BgSelector";
import { fetchJoke } from "./utils/fetchJoke";

const App = () => {
  const [bgColor, setBgColor] = useState("");
  const [joke, setJoke] = useState("");

  useEffect(() => {
    setJoke("Loading...");
    fetchJoke()
      .then((res) => setJoke(res.joke))
      .catch(() => setJoke("Something fishy... Cannot fetch joke"));
  }, []);

  return (
    <div
      className={`bg-gradient-radial ${
        bgColor ? bgColor : "from-yellow-400 to-orange-500"
      } min-h-screen flex flex-col justify-between`}
    >
      <BgSelector setBgColor={setBgColor} />
      <JokeCard joke={joke} />
      <NewJokeBtn setJoke={setJoke} />
    </div>
  );
};

export default App;
