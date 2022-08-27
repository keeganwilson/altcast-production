// @ts-nocheck
import React from "react";
import { Parallax, ParallaxLayer } from "react-parallax";

const PageOne = () => {
  <Parallax className="page-one" pages={5}>
    <div className="page-one-content">
      <ParallaxLayer
        offset={0}
        speed={1}
        style={{ backgroundColor: "#0033F63" }}
      ></ParallaxLayer>
      <ParallaxLayer offset={0.3} speed={0.1}>
        <h1>Altcast</h1>
      </ParallaxLayer>
    </div>
  </Parallax>;
};

export default PageOne;
