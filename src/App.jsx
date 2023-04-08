import React, { useState } from "react";

import JokeCard from "./components/JokeCard";
import NewJokeBtn from "./components/NewJokeBtn";
import BgSelector from "./components/BgSelector";

const App = () => {
  const [bgColor, setBgColor] = useState("");

  return (
    <div
      className={`bg-gradient-radial ${
        bgColor ? bgColor : "from-yellow-400 to-orange-500"
      } min-h-screen flex flex-col justify-center`}
    >
      <BgSelector setBgColor={setBgColor} />
      <JokeCard />
      <NewJokeBtn />
    </div>
  );
};

export default App;
