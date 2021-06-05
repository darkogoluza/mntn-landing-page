import React from "react";
import GlobalStyles from "./globalStyles";
import Header from "./components/Header";
import Background from "./components/Background";
import HeroContent from "./components/Hero";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <GlobalStyles />
      <Background />
      <Header />
      <HeroContent />
      <MainContent />
      <Footer />
    </>
  );
}

export default App;
