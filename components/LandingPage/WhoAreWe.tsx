import React from "react";
import { AppleCardsCarouselDemo } from "../ui/appleCor";

function WhoAreWe() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-7 order-last md:order-first">
            <AppleCardsCarouselDemo />
          </div>
          <div className="col-span-12 md:col-span-5 pt-[2.5rem] md:pt-[180px] ml-[0] md:ml-[15%] ">
            <h4 className="text-[20px] md:text-[25px] leading-[25px] md:leading-[30px] font-medium pb-[10px] md:pb-[15px]">
              who are we
            </h4>
            <h1 className="text-[30px] md:text-[45px] leading-[35px] md:leading-[50px] font-bold text-[#69716C]">
              interior design <br />
              studio
            </h1>
            <h5 className="md:text-[17px] leading-[20px] font-bold pt-[10px] pb-[5px] md:pb-[10px]">
              An award-winning and development <br />
              team that is proud of our work
            </h5>
            <p className="text-[16px] leading-[24px] font-light pt-[15px]">
              Venenatis est ac habitasse pharetra viverra <br />
              imperdiet. Cras aliquet facilisis eu sapien porta
              <br />
              velit mattis posuere. Arcu felis risus magna in et <br />
              aliquam aliquet. Commodo consequat lorem velit <br />
              nec felis. Non varius nisl dictum turpis tincidunt.
            </p>
            <h5 className="text-[28px] leading-[34px] font-medium underline underline-offset-8 pt-[30px]">
              More
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoAreWe;
