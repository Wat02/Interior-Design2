import React from "react";
import NavBar from "./NavBar";
import HeroImg from "@/public/LandingPage/hauseHero.jpg";
import Image from "next/image";
import Button from "./Button";
import { FlipWordsDemo } from "@/components/LandingPage/FlipWord";
import MobileNav from "./MobileNav";

function Hero() {
  return (
    <section className="bg-[#F9F8F3] pb-[100px]">
      <NavBar className="pt-[20px] hidden md:flex" />
      <MobileNav className="flex md:hidden" />
      <section className="pt-[20px] md:pt-[100px]">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-1">
            <div className="col-span-12 md:col-span-7 pt-[20px] md:pt-[70px]">
              <h1 className="text-[40px] md:text-[80px] leading-[50px] md:leading-[90px] font-medium">
                <span className="inline-block">
                  {" "}
                  <FlipWordsDemo />
                </span>
                <span className="text-[#69716C]">
                  You'r <br />
                  Place
                </span>{" "}
                With Archies
              </h1>
              <p className="text-[18px] md:text-[20px] leading-[28px] md:leading-[30px] font-normal pt-[15px]">
                Enim lorem non gravida amet risus libero justo ornare tincidunt.{" "}
                <br />
                Purus ultricies a sapien nibh. At libero blandit adipiscing
                nunc.
              </p>
              <div className="flex flex-row gap-4 pt-[30px]">
                <Button
                  title="Our projects"
                  className="border border-[#272524] rounded-[10px] pt-[10px] pb-[10px] pr-[20px] pl-[20px] text-[18px] font-semibold"
                />
                <Button
                  title="Contact Us"
                  className=" pt-[10px] pb-[10px] pr-[20px] pl-[20px] text-[20px] font-semibold"
                />
              </div>
            </div>
            <div className="col-span-12 md:col-span-5 ml-[0] md:ml-[80px] pt-[20px] md:pt-[0]">
              <Image
                src={HeroImg}
                width={400}
                height={200}
                alt="hause"
                className="rounded-[30px]"
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Hero;
