import React from "react";
import Particles from "react-particles-js";

export default () => (
  <Particles
    params={{
      particles: {
        line_linked: {
          shadow: {
            enable: true,
            color: "#000000",
            blur: 2
          }
        }
      }
    }}
    style={{
      width: "100%",
      height: "100%",
      overflow: "hidden"
    }}
  />
);
