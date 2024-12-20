import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Hamburger from "@/public/LandingPage/hamburger.svg";
import Image from "next/image";
import NavBarText from "./NavBarText";
import Link from "next/link";

function MobileNav({ className }: { className: string }) {
  return (
    <section className={className}>
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-6 md:col-span-6">
            <h1 className=" text-[20px] leading-[30px] font-semibold text-[#272524] pt-[13px]">
              DeCoreDesign
            </h1>
          </div>
          <div className="col-span-6 md:col-span-6 justify-end text-end pt-[10px]">
            <Sheet>
              <SheetTrigger>
                <Image src={Hamburger} width={30} height={30} alt="hamburger" />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>
                    {" "}
                    <div className="flex flex-col justify-start text-start pt-[50px] gap-6">
                      {" "}
                      <Link href="/">Home</Link>
                      <Link href="/">About us</Link>
                      <Link href="/">Services</Link>
                      <Link href="/">What to see</Link>
                    </div>
                  </SheetTitle>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MobileNav;
