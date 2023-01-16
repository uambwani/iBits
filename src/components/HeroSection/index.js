import React, { useState } from "react";
import { Button } from "../ButtonElements";

import Video from "../../videos/bgMain.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroBtnWrapper,
} from "./HeroElements";

function HeroSection() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg playsInline autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>iBits</HeroH1>
        {/* <HeroP>8888 iBits have arrived on the ethereum blockchain</HeroP> */}
        <HeroBtnWrapper>
          <Button
            to=''
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
            primary='true'
            dark='true'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            Mint Soon...
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;
