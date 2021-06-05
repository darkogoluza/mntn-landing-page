import React, { useEffect, useState } from "react";
import {
  Gradient,
  BackgroundHolder,
  Sky,
  Mounten,
  Hill,
  LowerGradient,
} from "./backgroundElements";
import gradientImage from "../../assets/bg_gradient.png";
import skyImage from "../../assets/bg_sky.png";
import mountenImage from "../../assets/bg_mounten.png";
import hillImage from "../../assets/bg_hill.png";
import lowerGradient from "../../assets/bg_lower_gradient.png";

const Background = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <>
      <BackgroundHolder>
        <Gradient src={gradientImage} />
        <Sky src={skyImage} />
        <Mounten
          style={{ transform: `translateY(-${offsetY * 0.1}px)` }}
          src={mountenImage}
        />
        <Hill
          style={{ transform: `translateY(-${offsetY * 0.2}px)` }}
          src={hillImage}
        />
        <LowerGradient src={lowerGradient} />
      </BackgroundHolder>
    </>
  );
};

export default Background;
