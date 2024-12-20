import React from "react";
import { HeroScrollDemo } from "@/components/LandingPage/ContainerScroll";

function BestWork() {
  return (
    <section className="pb-[150px]">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-12">
            {" "}
            <HeroScrollDemo />
          </div>
          <div className="col-span-12 md:col-span-12 pt-[40px]">
            <h1 className="text-[50px] leading-[40px] font-semibold justify-center text-center">
              Service We Providing
            </h1>
            <p className="text-[18px] leading-[25px] text-center pt-[20px]">
              Vestibulum nisl ipsum bibendum erat. Turpis sollicitudin magna in{" "}
              <br />
              semper.
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 justify-center text-center pt-[80px]">
            <p className="text-[40px]">🏠</p>
            <p className="text-[25px] leading-[30px] font-semibold pt-[5px] pb-[5px]">
              Architecture
            </p>
            <p className="text-[18px] leading-[25px]">
              Etiam nunc morbi aliquet enim hac et <br />
              tincidunt ipsum pellentesque. <br />
              Malesuada morbi fringilla semper eget <br />
              nibh. Venenatis dictum ullamcorper <br />
              morbi blandit duis semper.
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 justify-center text-center  pt-[80px]">
            <p className="text-[40px]">✏️</p>
            <p className="text-[25px] leading-[30px] font-semibold pt-[5px] pb-[5px]">
              Interior work
            </p>
            <p className="text-[18px] leading-[25px]">
              Etiam nunc morbi aliquet enim hac et <br />
              tincidunt ipsum pellentesque. <br />
              Malesuada morbi fringilla semper eget <br />
              nibh. Venenatis dictum ullamcorper <br />
              morbi blandit duis semper.
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 justify-center text-center  pt-[80px]">
            <p className="text-[40px]">📍</p>
            <p className="text-[25px] leading-[30px] font-semibold pt-[5px] pb-[5px]">
              Retail designs
            </p>
            <p className="text-[18px] leading-[25px]">
              Etiam nunc morbi aliquet enim hac et <br />
              tincidunt ipsum pellentesque. <br />
              Malesuada morbi fringilla semper eget <br />
              nibh. Venenatis dictum ullamcorper <br />
              morbi blandit duis semper.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BestWork;
