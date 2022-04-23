import React from "react";
import { Button, LevelForm } from "../../features";

import "./index.scss";

const Home = () => {
  return (
    <div className="app__home">
      <h2>Welcome to Nature Memory Game!</h2>
      <p>
        Depending on your level, you will have{" "}
        <span className="p__highlight">6, 9 or 12 cards to pair</span>.
      </p>
      <LevelForm />
      <Button />
    </div>
  );
};

export default Home;
