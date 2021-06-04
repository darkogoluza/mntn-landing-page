import React from "react";
import GlobalStyles from "./globalStyles";
import Header from "./components/Header";
import Background from "./components/Background";
import HeroContent from "./components/Hero";

function App() {
  return (
    <>
      <GlobalStyles />
      <Background />
      <Header />
      <HeroContent />
    </>
  );
}

export default App;
