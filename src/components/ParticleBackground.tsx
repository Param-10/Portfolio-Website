import { useCallback, memo, useEffect, useState } from "react";
import type { Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

function ParticleBackground() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  
  // Check screen size for responsive optimizations
  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {
    // Avoid console log in production
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fullScreen: {
          enable: true,
          zIndex: 0
        },
        fpsLimit: 60, // Reduce from 120 for better performance
        interactivity: {
          events: {
            onClick: {
              enable: !isSmallScreen, // Disable on mobile
              mode: "push",
            },
            onHover: {
              enable: !isSmallScreen, // Disable on mobile
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: isSmallScreen ? 2 : 4, // Fewer particles on mobile
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: ["#7c3aed", "#6d28d9", "#5b21b6", "#4c1d95"],
          },
          links: {
            color: "#6d28d9",
            distance: 150,
            enable: true,
            opacity: 0.4,
            width: 1,
            triangles: {
              enable: isSmallScreen ? false : true, // Disable triangles on mobile
              color: "#4c1d95",
              opacity: 0.1
            }
          },
          collisions: {
            enable: !isSmallScreen, // Disable on mobile
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: isSmallScreen ? 0.5 : 1, // Slower on mobile
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: isSmallScreen ? 40 : 80, // Fewer particles on mobile
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
          gradient: {
            enable: !isSmallScreen, // Disable on mobile
            stops: [0, 50, 100],
            colors: ["#7c3aed", "#5b21b6", "#4c1d95"]
          }
        },
        detectRetina: true,
      }}
    />
  );
}

// Use memo to prevent unnecessary re-renders
export default memo(ParticleBackground);