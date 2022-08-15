import React, { useState, useEffect, useRef, Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import Typed from "typed.js";
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
        <HeroBgVideo
          src="https://www.youtube.com/embed/_s3Au5tc2m8?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1&playlist=_s3Au5tc2m8"
          frameborder="0"
        />
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
            Hey, I'm Myron Sfyrakis, a Visual Effects Artist (VFX) based in
            Heraklion, Crete, Greece.
          </HeroP>
          <HeroP>I've been doing video editing and VFX since 2012.</HeroP>
          <HeroP>I'll make anything look unique and aesthetic.</HeroP>
        </HeroParagraphsContainer>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
