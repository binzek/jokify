import React from "react";

import JokeCard from "./components/JokeCard";

const App = () => {
  return (
    <div className="bg-gradient-radial from-yellow-400 to-orange-500 min-h-screen flex flex-col justify-center">
      <JokeCard />
    </div>
  );
};

export default App;
