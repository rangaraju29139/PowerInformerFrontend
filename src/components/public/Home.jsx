import React from "react";

import NavigationBar from "./NavigationBar";
import HeroSection from "./HeroSection";
import Footer from "./Footer";

export default function Home(props) {
  return (
    <>
      <NavigationBar type="public" />
      <HeroSection />
      <Footer />
    </>
  );
}
