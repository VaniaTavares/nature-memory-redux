import React from "react";
import { Button, LevelForm } from "../../features";

import "./index.scss";

const Home = () => {
  return (
    <div className="app__home">
      <h2>Welcome to Nature Memory Game!</h2>
      <p>Depending on your level, you will have 6, 9 or 12 cards to pair.</p>
      <p className="p__highlight">
        Once you press play, you will have 5 seconds.
      </p>
      <LevelForm />
      <Button />
    </div>
  );
};

export default Home;
