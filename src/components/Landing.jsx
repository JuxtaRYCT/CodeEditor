import React from "react";
import { Box, Button, Text, background } from "@chakra-ui/react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "../styles/Landing.css";
import TextBlock from "./Explanation";

const Landing = () => {
  return (
    <Box
      minH="100vh"
    >
      <div className="App">
        <Parallax pages={2} style={{ top: '0', left: '0' }} class="animation">
          <ParallaxLayer offset={0} speed={0.25}>
            <div class="animation_layer parallax" id="artback"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.3}>
            <div class="animation_layer parallax" id="mountain"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={-0.1}>
            <div class="animation_layer parallax" id="logoland"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.2}>
            <div class="animation_layer parallax" id="jungle1"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.25}>
            <div class="animation_layer parallax" id="jungle2"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.5}>
            <div class="animation_layer parallax" id="jungle3"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.45}>
            <div class="animation_layer parallax" id="jungle4"></div>
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={0.02}>
            <div class="animation_layer parallax" id="codecraft"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.4}>
            <div class="animation_layer parallax" id="manonmountain"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.35}>
            <div class="animation_layer parallax" id="jungle5"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.04}>
            <div class="animation_layer parallax" id="button">
              {/* <Button
                color="brown"
                variant="solid"
              >Get Started</Button> */}

              <button >
                Get Started
              </button>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.35}>

            <TextBlock />
          </ParallaxLayer>

        </Parallax>
      </div>
    </Box>

  );
};

export default Landing;
