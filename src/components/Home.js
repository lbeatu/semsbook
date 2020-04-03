import React, { useContext, useState } from "react";

import ProfileItem from "./profileItem";
import GridItem from "./gridItem";

const Home = () => {
  const [spoti, setSpoti] = useState(1);

  const Onclick = () => {
    console.log(spoti);

    setSpoti(!spoti);
  };
  return (
    <div className="home-container">
      <ProfileItem />
      <div className="footer"></div>
      <GridItem />
      <div className="iframe-player">
        <button onClick={Onclick}>
          {spoti ? "Show playlist" : "Hide  playlist"}{" "}
        </button>
        <iframe
          src="https://open.spotify.com/embed/playlist/2FvVxRJZuWdo7EAukKWMam?autoplay=1"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media  autoplay;"
          autoplay
          className={spoti ? "iframe-block " : "iframe-block iframe-ext"}
        ></iframe>
      </div>
    </div>
  );
};

export default Home;
