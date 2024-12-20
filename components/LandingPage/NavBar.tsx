import React from "react";
import Logo from "@/public/assets/icons/logo-brand.svg";
import Image from "next/image";
import NavBarText from "./NavBarText";
import Button from "../LandingPage/Button";
import Img from "@/public/assets/icons/delete.svg";

function NavBar({ className }: { className: string }) {
  return (
    <section className={className}>
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-4 text-[25px] leading-[34px] font-semibold text-[#272524] pt-[13px]">
            <h1>DeCoreDesign</h1>
          </div>
          <div className="col-span-12 md:col-span-4 flex flex-col md:flex-row pt-[10px]">
            <NavBarText title="Home" text="text1" />
            <NavBarText title="About Us" text="text2" />
            <NavBarText title="Services" text="text3" />
            <NavBarText title="What to see" text="text4" />
          </div>
          <div className="col-span-12 md:col-span-4 flex flex-col md:flex-row pt-[10px] justify-end mr-[40px]">
            <button>sign-in</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NavBar;
