import React from "react";
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
  return (
    <>
      <BackgroundHolder>
        <Gradient src={gradientImage} />
        <Sky src={skyImage} />
        <Mounten src={mountenImage} />
        <Hill src={hillImage} />
        <LowerGradient src={lowerGradient} />
      </BackgroundHolder>
    </>
  );
};

export default Background;
