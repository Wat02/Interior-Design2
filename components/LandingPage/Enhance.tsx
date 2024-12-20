import React from "react";
import Image from "next/image";
import Enhancee from "@/public/LandingPage/enhance.jpg";

function Enhance() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-5 pt-[100px] ml-[0] md:ml-[80px] hidden md:block">
            <Image
              src={Enhancee}
              width={450}
              height={450}
              alt="enhance"
              className="rounded-[20px]"
            />
          </div>
          <div className="col-span-12 md:col-span-7 pt-[50px] md:pt-[150px] ml-[0] md:ml-[120px]">
            <h1 className="text-[40px] md:text-[60px] leading-[50px] md:leading-[70px] font-bold ">
              enhance{" "}
              <button className="pt-[5px] pl-[20px] pb-[5px] bg-transparent  border-2 border-[#282524]  pr-[20px] text-[60px] font-semibold leading-[70px] rounded-[50px] relative flex-col hidden md:inline-block">
                {" "}
                Your
              </button>{" "}
              <br />
              interior through <br />
              desughn
            </h1>
            <p className="text-[20px] leading-[34px] font-normal text-[#4A4A4A] pt-[15px]">
              Dolor massa et ut dui in congue. Eros vulputate tellus nam <br />
              pulvinar nec scelerisque leo iaculis lorem. Massa nulla elit mi{" "}
              <br />
              tristique in urna urna. Cras nisl turpis pellentesque sit quis{" "}
              <br />
              justo id. Sit integer libero blandit tellus morbi vulputate <br />
              viverra dapibus.
            </p>
            <h5 className="text-[28px] leading-[34px] font-medium underline underline-offset-8 pt-[30px]">
              More
            </h5>
          </div>
          <div className="col-span-12 md:col-span-7 ml-[0] md:ml-[80px] pt-[50px] md:pt-[150px]">
            <p className="text-[20px] leading-[34px] font-medium">
              Ut ornare convallis eget porta duis. Etiam tellus sem integer sed{" "}
              <br />
              adipiscing et turpis tellus. Ut nisl mattis lacus nunc hac iaculis{" "}
              <br />
              commodo enim. In condimentum at varius feugiat. In feugiat lacus{" "}
              <br />
              neque posuere ridiculus.
            </p>
          </div>
          <div className="col-span-12 md:col-span-5 pt-[50px] md:pt-[100px] text-center md:text-right justify-start md:justify-end mr-[0] md:mr-[50px] ">
            <button className="rounded-[50%] w-[250px] text-[25px] font-semibold leading-[40px] h-[250px] border-2 border-[#282524] bg-transparent ">
              Award Winners <br /> 2023
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Enhance;
