import React from "react";
import AppHeader from "../components/AppHeader";
import Hero from "../components/Hero";
import MemberIntro from "../components/MemberIntro";
import Team from "../components/Team";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <AppHeader />
      <Hero />
      <MemberIntro />
      <Footer/>
    </>
  );
};
export default HomePage;
