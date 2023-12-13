
"use client"
import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim"; 
const ParticalesBackground = () => {


    const particlesInit = useCallback(async (engine) => {
      console.log(engine);
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadFull(engine);
      await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
      await console.log(container);
    }, []);

  return (
    <div>
      <Particles className="absolute"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#111111",
            },
          },
          fpsLimit: 120,
          fullScreen: {
            enable: true,
            zIndex: -100,
          },
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 1,
              },
              repulse: {
                distance: 50,
                duration: 0.9,
              },
            },
          },
          particles: {
            color: {
              value: "#03A84E",
            },
            links: {
              color: "#03A84E",
              distance: 100,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 5000,
              },
              value: 100,
            },
            opacity: {
              value: 0.2,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default ParticalesBackground;
