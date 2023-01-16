import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import { ObjOne } from "../components/InfoSection/Data";
import { RoadObj } from "../components/Roadmap/Data";
import { TeamObj } from "../components/Team/Data";

import Services from "../components/Services";
import Gallery from "../components/Gallery/Gallery";
import Roadmap from "../components/Roadmap/Roadmap";
import Team from "../components/Team/Team";

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...ObjOne} />
      <Gallery />
      <Roadmap {...RoadObj} />
      <Team {...TeamObj} />
      <Services />
      <Footer />
    </>
  );
}

export default Home;
