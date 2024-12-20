import React from "react";
import { AnimatedModalDemo } from "./Animated ";
import { DirectionAwareHoverDemo } from "./Direction";
import { DirectionAwareHoverDemo2 } from "@/components/LandingPage/Direction2";

function Fotter() {
  return (
    <section className="pt-[100px]">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-4">
            <DirectionAwareHoverDemo />
          </div>
          <div className="col-span-12 md:col-span-4">
            <DirectionAwareHoverDemo2 />
          </div>
          <div className="col-span-12 md:col-span-4">
            <h1 className="text-[30px] md:text-[55px] leading-[35px] md:leading-[66px] font-bold ml-[0] md:ml-[40px] pt-[40px]">
              Whan't to Book Hotel?
            </h1>
            <AnimatedModalDemo />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Fotter;
