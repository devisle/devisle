import React from "react";
import Particles from "react-particles-js";

export default () => (
  <Particles
    width={'100%'} height={'100vh'}
    params={{
      particles: {
        number: {
          value: 30,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: "#000000"
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 60,
            size_min: 0.1,
            sync: false
          }
        },
        move: {
          enable: true,
          speed: 7,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "repulse"
            },
            onclick: {
              enable: false,
              mode: "push"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 800,
              line_linked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 800,
              size: 80,
              duration: 2,
              opacity: 0.8,
              speed: 3
            },
            repulse: {
              distance: 400,
              duration: 0.4
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        line_linked: {
          shadow: {
            enable: true,
            color: "#000000",
            blur: 1
          }
        }
      }
    }}
  />
);
