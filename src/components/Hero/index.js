import React, { Suspense } from "react";
import Typed from "typed.js";
import { OrbitControls } from "@react-three/drei";
import { FiTarget } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { BiTime, BiUserPin } from "react-icons/bi";
import {
  HeroBg,
  HeroBgVideo,
  HeroContainer,
  HeroContent,
  Hero3dLogo,
  Hero3dLogoContainer,
  HeroH1,
  HeroParagraphsContainer,
  HeroP,
} from "./HeroElements";
import ReelVideo from "../../videos/video.mp4";
import Lesnipe from "../3dObjects/Lesnipe";

const HeroSection = () => {
  const el = React.useRef(null);
  const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
      strings: ["Just a creative guy", "Video Editor", "Visual Effects Artist"],
      typeSpeed: 75,
      backSpeed: 35,
      showCursor: false,
    };
    typed.current = new Typed(el.current, options);
    return () => {
      typed.current.destroy();
    };
  }, []);

  return (
    <HeroContainer id="introduction">
      <HeroBg>
        <HeroBgVideo src={ReelVideo} type="video/mp4" autoPlay loop muted />
      </HeroBg>
      <HeroContent>
        <Hero3dLogoContainer>
          <Hero3dLogo>
            <OrbitControls
              enableZoom={false}
              autoRotate={true}
              autoRotateSpeed={10}
            />
            <ambientLight intensity={0.2} />
            <directionalLight position={[-2, 5, 2]} intensity={1} />
            <Suspense fallback={null}>
              <Lesnipe />
            </Suspense>
          </Hero3dLogo>
        </Hero3dLogoContainer>
        <HeroH1 ref={el} />
        <HeroParagraphsContainer>
          <HeroP>
            <BiUserPin
              style={{
                fontSize: "25px",
                color: "#ff7000",
                marginRight: "15px",
              }}
            />
            Hey, I'm Myron Sfyrakis and I'm a VFX Artist.
          </HeroP>
          <HeroP>
            <IoLocationOutline
              style={{
                fontSize: "25px",
                color: "#ff7000",
                marginRight: "10px",
              }}
            />{" "}
            I'm based in Heraklion, Crete, Greece.
          </HeroP>
          <HeroP>
            <BiTime
              style={{
                fontSize: "25px",
                color: "#ff7000",
                marginRight: "10px",
              }}
            />{" "}
            I've been doing video editing and VFX since 2012.
          </HeroP>
          <HeroP>
            <FiTarget
              style={{
                fontSize: "25px",
                color: "#ff7000",
                marginRight: "10px",
              }}
            />{" "}
            I'll make anything look unique and aesthetic.
          </HeroP>
        </HeroParagraphsContainer>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
