import styled from "styled-components";

export const BackgroundHolder = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
`;

export const Gradient = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("${(props) => props.src}");
  position: absolute;
`;

export const Sky = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("${(props) => props.src}");
  z-index: -1;
  background-size: cover;
  background-position-y: center;
  background-repeat: no-repeat;
  position: absolute;
`;

export const Mounten = styled.div`
  width: 100%;
  height: 1400px;
  top: 425px;
  background-image: url("${(props) => props.src}");
  background-size: cover;
  background-position-y: top;
  background-repeat: no-repeat;
  position: absolute;
`;

export const Hill = styled.div`
  width: 100%;
  height: 920px;
  top: 525px;
  background-image: url("${(props) => props.src}");
  background-size: cover;
  background-position-y: top;
  background-repeat: no-repeat;
  position: absolute;
`;

export const LowerGradient = styled.div`
  width: 100%;
  height: 1400px;
  top: 400px;
  background-image: url("${(props) => props.src}");
  background-size: cover;
  background-position-y: top;
  background-repeat: no-repeat;
  position: absolute;
`;
