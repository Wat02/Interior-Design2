import React from "react";
import Hero from "@/components/LandingPage/Hero";
import WhoAreWe from "@/components/LandingPage/WhoAreWe";
import BigClients from "@/components/LandingPage/BigClients";
import Enhance from "@/components/LandingPage/Enhance";
import BestWork from "@/components/LandingPage/BestWork";
import Fotter from "@/components/LandingPage/Fotter";
import Testamonial from "@/components/LandingPage/Testamonial";

function page() {
  return (
    <section>
      <div>
        <Hero />
        <WhoAreWe />
        <BigClients />
        <Enhance />
        <BestWork />
        <Testamonial />
        <Fotter />
      </div>
    </section>
  );
}

export default page;
